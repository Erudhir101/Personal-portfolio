<script>
	import Github from '../assets/github.svelte';
	import Linkedin from '../assets/linkedin.svelte';
	import { Copyright } from 'lucide-svelte';
</script>

<footer class="footer">
	<div class="info">
		<Copyright size={15} />
		{new Date().getFullYear()}
		<span class="name">Gabriel Carneiro.</span>
		<p>Obrigado por Acessar.</p>
	</div>
	<div class="links">
		<a href="https://www.github.com/erudhir101/" class="github"><Github /></a>
		<a href="https://www.linkedin.com/in/gabriel-silva-carneiro" class="linkedin"><Linkedin /></a>
	</div>
</footer>

<style>
	.footer {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		background-color: var(--bg-surface);
		color: color-mix(in srgb, var(--text-body), transparent 40%);
		padding: 2rem;

		.info {
			display: flex;
			align-items: center;
			gap: 0.5rem;
		}

		.links {
			display: flex;
			gap: 1.5rem;

			.github {
				color: var(--text-body);
				transition: color 0.15s ease-in;
				&:hover {
					color: var(--color-secondary);
				}
			}

			.linkedin {
				color: var(--text-body);
				transition: color 0.15s ease-in;
				&:hover {
					color: var(--color-primary);
				}
			}
		}
	}
</style>
