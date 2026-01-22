<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const { post } = $derived(data);

	async function handleCopy(event: MouseEvent) {
		const target = event.target as HTMLElement;

		const button = target.closest('.copy-btn') as HTMLButtonElement;
		if (!button) return;

		const code = button.dataset.code;
		if (code) {
			try {
				await navigator.clipboard.writeText(code);

				button.classList.add('copied');
				const svg = button.querySelector('svg');
				button.innerText = 'Copied!';
				setTimeout(() => {
					button.innerText = '';
					button.appendChild(svg);
					button.classList.remove('copied');
				}, 2000);
			} catch (err) {
				console.error('Failed to copy!', err);
			}
		}
	}
</script>

<article class="article">
	<div class="info">
		<h2>{post.title}</h2>

		<span
			>Criado em: {new Intl.DateTimeFormat('pt-BR', {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
			}).format(post.created_date)}.</span
		>
	</div>
	<main class="content" onclick={handleCopy}>
		{@html post.html}
	</main>
</article>

<style>
	.article {
		width: 80%;
		margin-inline: auto;
		margin-block: 3rem;
		border-radius: 10px;
		padding: 2rem 1rem;
		box-shadow: 0px 2px 8px var(--bg-border);
		-webkit-box-shadow: 0px 2px 8px var(--bg-border);
		-moz-box-shadow: 0px 2px 8px var(--bg-border);
	}
	.info {
		width: 80%;
		display: flex;
		flex-direction: column;
		margin-inline: auto;
		margin-bottom: 2rem;
		h2 {
			font-size: 2.5rem;
			font-weight: 900;
		}
		span {
			font-weight: 800;
			opacity: 80%;
			color: var(--color-success);
		}
	}

	.content {
		padding: 2rem 4rem;

		:global(h1, h2, h3, h4, h5, h6) {
			color: var(--color-primary);
			margin-bottom: 1.5rem;
		}

		:global(p) {
			margin-bottom: 1.25rem;
		}

		:global(a) {
			color: var(--text-body);
			transition: color 0.15s ease-in;
			text-decoration: underline 2px var(--color-secondary);
			&:hover {
				color: var(--color-secondary);
			}
		}

		:global(table) {
			/* background-color: var(--bg-surface); */
			border-collapse: collapse;
			overflow: hidden;
			margin-block: 2rem;

			:global(th, td) {
				padding: 0.8rem 1rem;
			}

			:global(thead) {
				:global(tr) {
					background-color: var(--bg-overlay);
					color: var(--text-body);
					text-align: left;
					:global(th) {
						font-weight: 800;
					}
				}
			}
			:global(tbody) {
				:global(tr) {
					border-bottom: 1px solid var(--bg-border);
				}
			}
		}

		:global(ul, ol) {
			margin-bottom: 1rem;
			:global(li) {
				&::marker {
					font-size: 1.25rem;
					color: var(--color-secondary);
				}
			}
		}

		:global(.copy-btn) {
			position: absolute;
			top: 0.5rem;
			right: 0.5rem;
			background: transparent;
			border: 1px solid var(--bg-border);
			border-radius: 4px;
			padding: 0.5rem 0.55rem;
			font-size: 0.75rem;
			cursor: pointer;
			opacity: 0;
			transition:
				opacity 0.2s ease-in,
				transform 0.2s ease-in-out;
			&:hover {
				opacity: 1;
			}
		}

		:global(.copy-btn.copied) {
			color: var(--color-success);
			border-color: var(--color-success);
			transform: scale(1.15);
		}

		:global(code) {
			border: 1px solid var(--bg-border);
			border-radius: 5px;
			padding: 3px;
			padding-inline: 0.5em;
			padding-block: 0.25em;
		}

		:global(pre) {
			padding: 1rem;
			border-radius: 10px;
			border: 1px solid var(--bg-border);
			margin: 2rem 0;
			overflow: hidden;
			:global(code) {
				font-size: 1rem;
				border: 0;
			}
		}

		:global(figure) {
			:global(pre) {
				padding: 1rem;
				border-radius: 10px;
				:global(code) {
					border: 0;
				}
			}
		}

		:global(blockquote) {
			background: color-mix(in srgb, var(--color-primary), transparent 90%);
			border-width: 0 0 0 4px;
			border-style: solid;
			border-color: color-mix(in srgb, var(--color-primary), transparent 20%);
			border-radius: 6px;
			padding: 1rem 1.5rem;

			margin-block: 2rem;

			/* Monospace font for that tech feel */
			font-size: 0.9rem;
			color: var(--text-body);

			/* Optional: Add a little emoji or icon before */
			&::before {
				content: 'Note: ';
				font-weight: bold;
				color: var(--color-primary);
			}
			:global(cite) {
				display: block;
				margin-top: 10px;
				font-size: 0.85rem;
				font-style: normal;
				font-weight: bold;
				color: var(--text-body);
				opacity: 0.8;
			}
		}
		:global(img) {
			border: 1px solid var(--bg-border);
			border-radius: 8px;
			margin-block: 2rem;
		}
	}

	@media (max-width: 1000px) {
		.article {
			width: 100%;
		}
		.info {
			width: 90%;
		}
		.content {
			padding: 1rem;
		}
	}
</style>
