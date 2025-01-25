<script lang="ts">
	let { data } = $props();
	import { formatDate } from '$lib/usualFunctions.js';
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article
	class="flex flex-col items-center justify-between overflow-scroll rounded-lg bg-cat-crust px-4 py-16 shadow-md"
>
	<hgroup>
		<h1
			class="mb-2 text-center text-5xl font-bold text-cat-blue sm:text-justify md:text-7xl xl:text-8xl"
		>
			{data.meta.title}
		</h1>
		<p class="text-md text-center font-light opacity-70 md:text-lg">
			Publicado {formatDate(data.meta.publishedAt)}
		</p>
	</hgroup>
	{#if data.meta.categories}
		<div class="mb-16 mt-4 flex gap-4">
			{#each data.meta.categories as cat (cat)}
				<span class="text-2xl font-bold text-cat-mauve opacity-70 hover:opacity-100"
					>&num;{cat}</span
				>
			{/each}
		</div>
	{:else}
		<div class="mb-16 mt-4 flex gap-4"></div>
	{/if}
	<div
		class="
    sm:prose-md prose-table:border-text-cat-text
    prose
    prose-cyan
    lg:prose-xl dark:prose-invert
  prose-headings:text-cat-mauve
  prose-p:text-white
  prose-a:text-cat-blue hover:prose-a:text-cat-red
  prose-strong:text-cat-red prose-em:text-cat-peach
  prose-code:bg-cat-base prose-code:font-jetbrains
  prose-pre:bg-cat-base
  prose-pre:text-cat-text prose-pre:shadow-lg
    prose-table:border prose-table:shadow-md prose-table:shadow-cat-peach
    hover:prose-tr:bg-cat-mantle prose-th:p-4 prose-th:font-bold prose-th:uppercase
    prose-th:text-cat-green
    prose-td:p-4 prose-td:text-justify
    prose-img:rounded-2xl

    "
	>
		<data.content />
	</div>
</article>
