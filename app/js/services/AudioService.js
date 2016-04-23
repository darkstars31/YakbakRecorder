var RecordRTC = require('recordrtc');
var recordAudio;
var recordingPaused = false;

function AudioService() {

    this.startRecording = function( sampleRate ) {
        if(!recordingPaused) {
            navigator.webkitGetUserMedia({audio: true, video: false},function(stream) {
                recordAudio = RecordRTC(stream, {type: 'audio',
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
    this.pauseRecording = function() {
        recordingPaused = true;
        recordAudio.pauseRecording();
    };

    this.stopRecording = function (filename) {
        recordAudio.stopRecording(function() {
            recordAudio.save(filename);
            recordAudio.clearRecordedData();
        });
    };
}

angular.module('app').service('AudioService', AudioService)