<script>
	import { onMount } from "svelte";

	import RecordRTC from 'recordrtc';

	let image,
	recordBtn,
	waiting = false,
	recording = false,
	recorded = false,
	interval = 2,
	fps = 1,
	img_placeholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
	console.log(image);



	function startCamera() {
		console.log("start camera");
		//navigator.mediaDevices.getUserMedia({ video: true });
	}

	function uploadGif() {
		
	}

	function resetRecording() {
		recorded = false;
		image.setAttribute("src", img_placeholder);
	}

	function captureCamera(callback) {
		navigator.mediaDevices.getUserMedia({ video: true }).then(function(camera) {
			callback(camera);
		}).catch(function(error) {
			alert('Unable to capture your camera. Please check console logs.');
			console.error(error);
		});
	}

	function stopRecordingCallback() {
		image.setAttribute("src", URL.createObjectURL(recorder.getBlob()));
		recorder.camera.stop();
		recorder.destroy();
		recorder = null;
	}

	var recorder; // globally accessible

	 function startRecording() {
		recordBtn.classList.add("disabled");
		waiting = true;
		captureCamera(function(camera) {
			
			recorder = RecordRTC(camera, {
				type: 'gif',
				frameRate: 10,
				quality: 1,
				width: 375,
				onGifRecordingStarted: function() {
				},
				onGifPreview: function(gifURL) {
					image.setAttribute("src", gifURL);
					waiting = false;
					recording = true;
				},
			});
			
			recorder.startRecording();
			// release camera on stopRecording
			recorder.camera = camera;

			recordBtn.classList.remove("disabled");
		});
	};

	function stopRecording() {
		recordBtn.classList.add("disabled");
		recorder.stopRecording(stopRecordingCallback);
		recording = false;
		recorded = true;
	};

	onMount(() => {
		startCamera()
	})
</script>

		<img
			id="camera"
			bind:this={image}
			src={img_placeholder}
			class="w-full bg-black/10 dark:bg-white/10 rounded-xl mb-4 object-cover aspect-[3/4]"
			alt=""
		/>
		<div class="create-menu flex justify-around text-white">
			<div class="record-btn-wrapper">
				<button bind:this={recordBtn} class="record-btn {recording && "recording"} {recorded && "recorded"}" on:click={recording ? stopRecording : startRecording}>
					{#if waiting === true}
						<p>loading</p>
					{:else }
						<div>test?</div>
					{/if}
				</button>
				<button class="upload-btn" on:click={uploadGif}>
					upload
				</button>
			</div>
			<button on:click={recorded ? resetRecording : flipCamera} class={recording && "disabled"} >
				{#if recorded}
					smazat
				{:else}
					switch cam
				{/if}
			</button>
		</div>
