<script>
	/*
	import { onMount } from 'svelte';
	import '$lib/js/RecordRTC';
	import '$lib/js/common';
	import '$lib/js/gif-recorder';
  

	let recorder;
	let image;
	let isRecording = false;
	let isStartDisabled = false;
	let isStopDisabled = true;
	let message = '';
  
	function captureCamera(callback) {
	  navigator.mediaDevices.getUserMedia({ video: true })
		.then(camera => callback(camera))
		.catch(error => {
		  alert('Unable to capture your camera. Please check console logs.');
		  console.error(error);
		});
	}
  
	function stopRecordingCallback() {
	  message = 'Gif recording stopped: ' + bytesToSize(recorder.getBlob().size);
	  image.src = URL.createObjectURL(recorder.getBlob());
	  recorder.camera.stop();
	  recorder.destroy();
	  recorder = null;
	}
  
	function startRecording() {
	  isStartDisabled = true;
	  captureCamera(camera => {
		message = 'Waiting for Gif Recorder to start...';
		recorder = RecordRTC(camera, {
		  type: 'gif',
		  frameRate: 1,
		  quality: 10,
		  width: 360,
		  height: 240,
		  onGifRecordingStarted: () => {
			message = 'Gif recording started.';
		  },
		  onGifPreview: gifURL => {
			image.src = gifURL;
		  }
		});
  
		recorder.startRecording();
		recorder.camera = camera;
		isStopDisabled = false;
		isRecording = true;
	  });
	}
  
	function stopRecording() {
	  isStopDisabled = true;
	  recorder.stopRecording(stopRecordingCallback);
	  isRecording = false;
	}
  
	onMount(() => {
	  return () => {
		if (recorder) {
		  recorder.destroy();
		}
	  };
	});
	*/
  </script>
  <!--
	<style>
		html, body {
			margin: 0!important;
			padding: 0!important;
		}
		button:disabled {
			background-color: gray;
			cursor: not-allowed;
		}
	</style>
	
	<main>
		<h1>{message || 'Simple Gif Recording using RecordRTC'}</h1>
		
		<button on:click={startRecording} disabled={isStartDisabled}>Start Recording</button>
		<button on:click={stopRecording} disabled={isStopDisabled}>Stop Recording</button>
		
		<hr>
		<img bind:this={image} />
		
		<footer style="margin-top: 20px;">
			<small id="send-message"></small>
		</footer>
	</main>
	-->