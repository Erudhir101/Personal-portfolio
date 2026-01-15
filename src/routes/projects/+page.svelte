<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1>Blog</h1>

{#each data.posts as post (post.id)}
	<article class="article">
		<a href={resolve('/blog/[id]', { id: post.id })}>
			<h2 class="title">{post.title}</h2>
		</a>
		<p class="summary">{post.summary}</p>
	</article>
{/each}

<style>
	.article {
		display: flex;
		gap: 1rem;
		align-items: center;
	}
	.title {
		font-size: 2rem;
	}
	.summary {
		font-size: 1rem;
	}
</style>
