<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<div class="relative flex w-full justify-center gap-16 px-4 md:px-8 dark:text-cat-text">
	<div class="flex min-h-screen w-full max-w-7xl flex-col justify-between gap-32">
		<Header />
		<div>
			{@render children()}
		</div>
		<Footer />
	</div>
</div>
