<script lang="ts">
	const tecnologies = [
		{ name: 'svelte', color: '#ff3e00' },
		{ name: 'react', color: '#58c4dc' },
		{ name: 'node', color: '#5cad47' },
		{ name: 'java', color: '#c74634' }
	];
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	let size = 11;

	gsap.registerPlugin(ScrollTrigger);
	let component: HTMLElement;

	onMount(() => {
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion) {
			return;
		}

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: component,
				start: 'top bottom',
				end: 'bottom top',
				scrub: 4
			}
		});

		tl.fromTo(
			'.tech-row',
			{
				x: (index) => {
					return index % 2 === 0 ? gsap.utils.random(100, 80) : gsap.utils.random(-100, -80);
				}
			},
			{
				x: (index) => {
					return index % 2 === 0 ? gsap.utils.random(-100, -80) : gsap.utils.random(100, 80);
				}
			}
		);
	});
</script>

<h2 class=" text-6xl font-semibold tracking-tighter md:text-8xl">Tecnologias de Uso</h2>
<div bind:this={component} class="flex flex-col gap-8">
	{#each tecnologies as tech (tech.name)}
		<div class="tech-row flex items-center justify-center gap-6 text-slate-700">
			{#each { length: size }, i}
				<div
					class="text-7xl font-extrabold uppercase"
					style="color:{i === Math.floor(size / 2) ? tech.color : 'inherit'};"
				>
					{tech.name}
				</div>
				<div class="size-8 rounded-full bg-slate-700"></div>
			{/each}
		</div>
	{/each}
</div>
