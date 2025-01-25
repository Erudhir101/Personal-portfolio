<script>
	import About from '$lib/components/About.svelte';
	import PersonalInfo from '$lib/components/PersonalInfo.svelte';
	import Technologies from '$lib/components/Technologies.svelte';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	let trans = $state(false);
	onMount(() => (trans = true));
</script>

{#if trans}
	<div transition:fade={{ duration: 1000 }} class="flex h-full flex-col gap-32">
		<About />

		<PersonalInfo
			title="Títulos"
			notes={[
				{
					name: 'Engenharia de Software',
					time: '2019-2023 | Universidade Católica de Brasília - UCB',
					description: 'Graduado sendo o melhor da turma, media de nota 9.85.'
				},
				{
					name: 'Análise Desenvolvimento de Sistemas',
					time: '2024-Hoje | Universidade Católica de Brasília - UCB',
					description: 'Cursando para complementar o currículo.'
				}
			]}
		/>
		<PersonalInfo
			title="Experiência"
			notes={[
				{
					name: 'Estágio',
					time: '2023 | Universidade Católica de Brasília - UCB',
					description:
						'Realizei um estágio dentro da UCB para o desenvolvimento de uma plataforma de espaço acadêmico para os cursos de TI.'
				}
			]}
		/>
		<!-- <Technologies /> -->
	</div>
{/if}
