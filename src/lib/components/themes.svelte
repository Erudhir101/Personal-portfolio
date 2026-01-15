<script>
	import { slide } from 'svelte/transition';
	import { Sun, Moon } from 'lucide-svelte';
	import { toggleMode, mode } from 'mode-watcher';
</script>

<button onclick={toggleMode} class="themes">
	{#if mode.current === 'light'}
		<div transition:slide>
			<Sun />
		</div>
	{:else}
		<div transition:slide>
			<Moon />
		</div>
	{/if}
</button>

<style>
	.themes {
		background-color: transparent;
		font-size: 2rem;
		border: 0;
		cursor: pointer;
	}
</style>
