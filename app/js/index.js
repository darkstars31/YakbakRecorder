
var angular = require('angular');
var fs = require('fs');
var RecordRTC = require('recordrtc');

//var userMedia = new navigator.getUserMedia;
//console.log(userMedia);
var recordAudio;
var recordingPaused = false;

var startRecording = function( sampleRate ) {
	if(!recordingPaused) {
		navigator.getUserMedia({audio: true, video: false},function(stream) {
			recordAudio = RecordRTC(stream, {video: false, audio: true,
				numberOfAudioChannels: 1,
				sampleRate: sampleRate,
				bufferSize: 16384
			});
			recordAudio.startRecording();

		},function(error) {
			alert(JSON.stringify(error));
		});
	} else {
		recordingPaused = false;
		recordAudio.resumeRecording();
	}
};
var pauseRecording = function() {
	recordAudio.pauseRecording();
};
var stopRecording = function (filename) {
	recordAudio.stopRecording(function() {
		recordAudio.save(filename);
		recordAudio.clearRecordedData();
	});
};

var app = angular.module('app', [require('angular-route')]);

app.controller('Main', [ '$interval' , function ($interval){
		var self = this;
		self.isRecording = false;
		self.recordingLengthInSeconds = 0;
		this.filename = "audioFile";
		this.sampleRate = 44100;
		this.audioTracks = "";
		console.log(this.audioTracks);

		
		this.startRecordingOnClick = function() {
			if(!self.isRecording){
				self.isRecording = true;
				startRecording( self.sampleRate );
			} else {
				self.isRecording = false;
				recordingPaused = true;
				pauseRecording();
			}
		};
			
		this.stopRecordingOnClick = function() {
			self.recordingLengthInSeconds = 0;
			self.isRecording = false;
			setTimeout(function() {
				stopRecording(self.filename)}, 500
			);
		};

		this.menu = function () {

		};
		
		this.closeApp = function ()
		{
			var browserWindow = window.remote.getCurrentWindow();
			browserWindow.close();
		};
		
		$interval(function() {
			if(self.isRecording == true){
				self.recordingLengthInSeconds += 1;
			}
		}, 1000);

  }]);
  

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
		templateUrl: 'templates/main.html',
		controllerAs: 'main',
        controller: 'Main'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
