<script>
	let { title, notes } = $props();
</script>

<main class="flex flex-col items-start gap-8 px-4">
	<h2 class=" text-6xl font-semibold tracking-tighter md:text-8xl">{title}</h2>
	{#each notes as note}
		<div>
			<h3 class="text-3xl font-medium tracking-tight md:text-4xl">{note.name}</h3>
			<h4 class="mt-2 text-xl font-normal tracking-tight opacity-50 md:text-2xl">{note.time}</h4>
			<p class="prose prose-lg prose-slate mt-4 leading-tight dark:prose-invert">
				{note.description}
			</p>
		</div>
	{/each}
</main>
