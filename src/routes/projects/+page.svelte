<script lang="ts">
	import { resolve } from '$app/paths';
	import { ExternalLink } from 'lucide-svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

{#snippet project(project: (typeof data.projects)[0])}
	<a href={project.link} class="link">
		<article class="project">
			<div class="icon">
				<ExternalLink size={28} />
			</div>
			<img src={project.img} class="img" alt="logo" />
			<h2>{project.title}</h2>
			<p class="description">{project.description}</p>
			<div class="tags">
				{#each project.tags as tag (tag)}
					<span class="tag">{tag}</span>
				{/each}
			</div>
		</article>
	</a>
{/snippet}

<main class="main">
	<div class="info">
		<h1 class="title">Projects</h1>
	</div>

	<section class="posts">
		{#each data.projects as projects (projects.link)}
			{@render project(projects)}
		{/each}
	</section>
</main>

<style>
	.main {
		width: 60%;
		height: 100%;
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

	.link {
		text-decoration: none;
		color: var(--text-body);
		&:hover {
			.icon {
				opacity: 100%;
			}
		}
	}

	.project {
		display: flex;
		position: relative;
		flex-direction: column;
		gap: 2rem;
		background-color: var(--bg-surface);
		border-radius: 12px;
		margin: 2rem 0;
		padding: 2rem;
		transition: all 0.2s ease-in-out;
		box-shadow: none;
		transform: translate(0px, 0px);

		&:hover {
			box-shadow: var(--bg-overlay) 5px 10px 2.6px;
			transform: translate(0px, -10px);
		}

		.icon {
			opacity: 0;
			position: absolute;
			top: 0;
			right: 0;
			padding: 1.5rem;
			transition: opacity 0.2s ease-in;
			color: var(--color-success);
		}

		h2 {
			font-size: 2rem;
		}

		.description {
			font-size: 1.15rem;
			font-weight: 300;
			letter-spacing: 0.05rem;

			&::first-letter {
				text-transform: capitalize;
			}
		}

		.img {
			width: 10rem;
			height: 10rem;
			border-radius: 12px;
			border: 1px solid var(--bg-border);
		}

		.tags {
			display: flex;
			flex-wrap: wrap;
			overflow: hidden;
			gap: 1rem;
		}

		.tag {
			background-color: color-mix(in srgb, var(--color-secondary), transparent 30%);
			color: var(--bg-base);
			font-weight: 700;
			text-wrap: nowrap;
			border-radius: 12px;
			padding: 0.25rem 0.5rem;
			transition: background-color 0.15s ease-in;
			&:hover {
				background-color: color-mix(in srgb, var(--color-success), transparent 10%);
			}
		}
	}

	@media (max-width: 1280px) {
		.posts {
			grid-template-columns: 1fr;
		}
	}
</style>
