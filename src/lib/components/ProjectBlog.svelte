<script lang="ts">
	import type { Post } from '../../types';
	import { formatDate } from '../usualFunctions.js';

	let { title, desc, type, posts }: { title: string; desc: string; type: string; posts: Post[] } =
		$props();
	let search = $state('');
	let filtered = $state<Post[]>(posts);

	function filter() {
		if (search === '') filtered = posts;
		filtered = posts.filter((post) =>
			`${post.title} ${post.categories} ${formatDate(post.publishedAt)}`
				.toLowerCase()
				.includes(search.toLowerCase())
		);
	}
</script>

<div class="flex flex-col items-start gap-8">
	<h2 class="text-5xl font-bold text-cat-text md:text-7xl">{title}</h2>
	<p class="prose prose-lg font-light md:prose-xl dark:prose-invert">{desc}</p>
	<input
		class="self-end rounded-lg border border-transparent bg-cat-crust p-4 text-cat-text transition duration-200 ease-in placeholder:opacity-80 hover:border-cat-text focus:border-cat-blue focus:outline-none"
		type="search"
		id="search-field"
		placeholder="Pesquise o {type}"
		autocomplete="on"
		bind:value={search}
		oninput={filter}
	/>
</div>

{#each filtered as { title, publishedAt, categories, slug } (title)}
	<div
		class="my-6 flex flex-wrap items-center justify-between gap-8 rounded-md bg-cat-mantle px-6 py-4"
	>
		<div class="flex flex-col items-start gap-2">
			<h3 class="text-2xl font-bold md:text-4xl">{title}</h3>
			<h4 class="text-md font-normal opacity-50 md:text-lg">{formatDate(publishedAt)}</h4>
			<div class="flex gap-4">
				{#each categories as cat (cat)}
					<span class="font-bold text-cat-mauve">{cat}</span>
				{/each}
			</div>
		</div>
		<a
			href="{type}/{slug}"
			class="rounded-full border border-cat-green px-2 py-1 text-center transition-colors duration-300 hover:bg-cat-green hover:text-cat-crust md:px-4 md:py-2"
			>Ver {type === 'blog' ? 'Artigo' : 'Projeto'}</a
		>
	</div>
{/each}
