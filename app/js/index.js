
var angular = require('angular');

var app = angular.module('app', [require('angular-route')]);

app.controller('Main', function ($interval, AudioService){
		var self = this;
		self.isRecording = false;
		self.recordingLengthInSeconds = 0;
		this.sampleRate = 44100;
		this.audioTracks = "";
		this.filename = "Audio";
		
		this.startRecordingOnClick = function() {
			if(!self.isRecording){
				self.isRecording = true;
				AudioService.startRecording( self.sampleRate );
			} else {
				self.isRecording = false;
				AudioService.pauseRecording();
			}
		};
			
		this.stopRecordingOnClick = function() {
			self.isRecording = false;
			setTimeout(function() {
				AudioService.stopRecording(self.filename+self.sampleRate+"_seconds"+self.recordingLengthInSeconds);
				self.recordingLengthInSeconds = 0;
			}, 500);
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

  });

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
