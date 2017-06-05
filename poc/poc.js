(function (window, undefined) {
	'use strict';

	var player;

	$(function onReady() {
		$('#go-button').click(function () {
			var videoId = $('#video-id').val();
	        player = new YT.Player('player', {
	          height: '390',
	          width: '640',
	          videoId: videoId,
	          events: {
	            'onReady': onPlayerReady,
	            'onStateChange': onPlayerStateChange
	          }
	        });
		});
		$('#action-button').click(function () {
			var playbackRate = $('#playback-rate').val();
			player.setPlaybackRate(Number(playbackRate));
		})
	});

	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


	window.onYouTubeIframeAPIReady = function () {

	}

	function onPlayerReady(event) {
		debugger;
	  //event.target.playVideo();
	}

	function onPlayerStateChange(event) {
		console.log(event);
	}

})(window);