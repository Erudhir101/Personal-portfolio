<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from 'mode-watcher';
	import '../global.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<ModeWatcher />
<div class="page">
	<Navbar />
	<div class="children">
		{@render children()}
	</div>
	<Footer />
</div>

<style>
	.page {
		min-height: 100svh;
		display: flex;
		gap: 2rem;
		flex-direction: column;
		justify-content: space-between;
		.children {
			width: 100%;
			height: 100%;
			flex: 1;
		}
	}
</style>
