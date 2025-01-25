<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	import { OrbitControls } from 'three/examples/jsm/Addons.js';

	onMount(() => {
		const scene = new THREE.Scene();
		scene.background = new THREE.Color('#f0f0f0');
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		camera.position.z = 5;

		const geometry = new THREE.BoxGeometry();
		const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive: '#468585' });
		const cube = new THREE.Mesh(geometry, material);
		scene.add(cube);

		const light = new THREE.DirectionalLight(0x9cdba6, 10);
		light.position.set(1, 1, 1);
		scene.add(light);

		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		document.body.appendChild(renderer.domElement);

		const controls: OrbitControls = new OrbitControls(camera, renderer.domElement);
		controls.enableDamping = true;
		controls.dampingFactor = 0.05;
		controls.enableZoom = true;
		controls.enablePan = true;

		function animeRot() {
			requestAnimationFrame(animeRot);
			controls.update();
			renderer.render(scene, camera);
		}
		animeRot();
	});
</script>

<main></main>
