<script lang="ts">
	import { resolve } from '$app/paths';
	import { ChevronsRight } from 'lucide-svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

{#snippet blog(post: (typeof data.posts)[0])}
	<article class="article">
		<a href={resolve('/blog/[id]', { id: post.id })}>
			<h2>{post.title}</h2>
		</a>
		<p>{post.summary}</p>
		<h2 class="readme">
			<a href={resolve('/blog/[id]', { id: post.id })}> Saiba Mais </a>
			<span><ChevronsRight size={20} /></span>
		</h2>
	</article>
{/snippet}

<main class="main">
	<div class="info">
		<h1 class="title">Blog</h1>
		<span class="count">{data.posts.length} Artigos</span>
	</div>

	<section class="posts">
		{#each data.posts as post (post.id)}
			{@render blog(post)}
		{/each}
	</section>
</main>

<style>
	.main {
		width: 60%;
		margin-inline: auto;
		margin-top: 4rem;
	}
	.info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-inline: 1rem;
		margin-bottom: 1rem;
	}
	.title {
		font-size: 2.375rem;
	}
	.count {
		font-size: 1.215rem;
		font-weight: 600;
		color: var(--color-secondary);
		opacity: 90%;
	}

	.posts {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 2rem;
	}

	.article {
		position: relative;
		min-width: 0;
		gap: 1rem;
		padding: 20px 33px 25px;
		border: 2px solid var(--bg-border);
		border-radius: 8px;
		a {
			color: var(--text-body);
			text-decoration: underline solid transparent 2px;
			transition: text-decoration 0.2s ease-in;
			&:hover {
				text-decoration-color: var(--color-warning);
			}
		}
		p {
			max-width: 100%;
			opacity: 80%;
			padding: 1rem 0;
		}
		.readme {
			display: flex;
			align-items: center;
			gap: 5px;
			position: absolute;
			bottom: 0;
			left: 2;
			font-size: 1rem;
			padding: 10px 0;
			span {
				visibility: hidden;
				opacity: 0;
				transition: opacity 0.3s ease-in;
			}
			&:hover {
				span {
					visibility: visible;
					opacity: 100;
				}
			}
		}
	}

	.title {
		font-size: 2rem;
	}

	@media (max-width: 1280px) {
		.posts {
			grid-template-columns: 1fr;
		}
	}
</style>
