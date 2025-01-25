<script lang="ts">
	import { browser } from '$app/environment';
	import * as THREE from 'three';
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { OrbitControls } from 'three/examples/jsm/Addons.js';
	import { onMount } from 'svelte';

	let tag = $state<HTMLElement>();

	let x = $state(-5);
	let y = $state(0);
	let z = $state(5);
	$inspect(x, y, z);

	if (browser) {
		let camera: THREE.PerspectiveCamera;
		let scene: THREE.Scene;
		let renderer: THREE.WebGLRenderer;
		let controls: OrbitControls;
		let loader: GLTFLoader;
		let model: THREE.Group<THREE.Object3DEventMap>;
		let ambientLight: THREE.AmbientLight;
		let directionalLight: THREE.DirectionalLight;

		const init = () => {
			scene = new THREE.Scene();
			loader = new GLTFLoader();
			loader.load(
				'/laptop/scene.gltf',
				function (gltf) {
					model = gltf.scene;

					// Compute the bounding box
					const box = new THREE.Box3().setFromObject(model);

					// Get the center of the bounding box
					const center = new THREE.Vector3();
					box.getCenter(center);

					// Move the model to center it
					model.position.sub(center); // Move the model to the origin

					const scaleFactor = 5; // Change this value to scale differently
					model.scale.set(scaleFactor, scaleFactor, scaleFactor);
					model.position.set(1, -1, 1);
					scene.add(model);
				},
				function (xhr) {
					console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
				},
				function (error) {
					console.log(error);
				}
			);
			camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
			renderer = new THREE.WebGLRenderer({ alpha: true });
			renderer.setSize(window.innerWidth, window.innerHeight);
			controls = new OrbitControls(camera, renderer.domElement);
			controls.enableZoom = false;
			tag?.appendChild(renderer.domElement);

			ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
			scene.add(ambientLight);

			directionalLight = new THREE.DirectionalLight(0xffffff, 1); // White light
			directionalLight.position.set(5, 10, 7.5); // Position the light
			scene.add(directionalLight);

			camera.position.set(x, y, z);
		};

		const render = () => {
			renderer.clear();
			renderer.render(scene, camera);
		};

		const animate = () => {
			requestAnimationFrame(animate);
			controls.update();
			render();
		};

		onMount(() => {
			init();
			animate();
		});
	}
</script>

<svelte:head>
	<title>SvelteKit + ThreeJS</title>
</svelte:head>

<div class="flex flex-wrap items-center">
	<div class="">
		<h1
			class="flex flex-col text-nowrap text-[clamp(3rem,20vmin,10rem)] font-extrabold leading-none tracking-tighter text-cat-text"
		>
			<div>
				{#each 'Gabriel'.split('') as letter}
					<span class="inline-block">{letter}</span>
				{/each}
			</div>
			<div>
				{#each 'Carneiro'.split('') as letter}
					<span class="text-cat-blue">{letter}</span>
				{/each}
			</div>
		</h1>
		<span
			class="bg-gradient-to-r from-red-500 via-red-200 to-red-500 bg-clip-text text-[clamp(1rem,10vmin,2.5rem)] font-bold uppercase tracking-widest text-transparent"
			>Engenheiro de Software</span
		>
	</div>
	<div class="w-full lg:absolute lg:left-1/3" bind:this={tag}></div>
</div>
