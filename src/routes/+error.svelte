<script lang="ts">
	import { page } from '$app/state';
</script>

<section class="error-page">
	<h1 class="code">{page.status}</h1>
	<p class="message">{page.error?.message ?? 'Something went wrong.'}</p>
	<a class="back" href="/">Voltar para Home</a>
</section>

<style>
	.error-page {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 60vh;
		gap: 1rem;
		text-align: center;
	}

	.code {
		font-size: 6rem;
		font-weight: 900;
		color: var(--color-primary);
		line-height: 1;
		margin: 0;
	}

	.message {
		font-size: 1.25rem;
		color: var(--text-body);
		opacity: 0.8;
	}

	.back {
		margin-top: 1rem;
		color: var(--color-secondary);
		font-weight: 600;
		text-decoration: underline 2px var(--color-secondary);
		transition: color 0.15s ease-in;
		&:hover {
			color: var(--color-primary);
		}
	}
</style>
