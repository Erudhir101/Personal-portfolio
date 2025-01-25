<script>
	import { slide } from 'svelte/transition';
	import Hamburger from './Hamburger.svelte';
	import { page } from '$app/state';

	let isOpen = $state(false);
</script>

{#snippet sidebar()}
	<div
		transition:slide={{ axis: 'y', duration: 500 }}
		class="absolute left-0 top-0 z-50 flex h-full w-full flex-col items-end gap-4 border-b-2 border-cat-mauve bg-cat-mantle px-4 pt-8 text-end"
	>
		<button
			aria-expanded={isOpen}
			class="border-cat-text text-cat-text"
			onclick={() => (isOpen = !isOpen)}
		>
			<span class="text-4xl hover:text-cat-peach">&times;</span>
		</button>
		<nav>
			<ul>
				{#each ['about', 'projects', 'blog'] as name}
					<li>
						<a
							aria-label="links"
							href="/{name}"
							class="underline-gw text-4xl font-medium {page.url.pathname === '/' + name
								? 'text-cat-peach'
								: 'text-cat-text'} no-underline transition-all duration-150 hover:text-cat-peach"
							onclick={() => (isOpen = !isOpen)}>{name}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
{/snippet}

<header
	class="sticky top-0 z-50 flex justify-between rounded-md bg-cat-mantle p-5 shadow-md shadow-cat-crust md:top-4"
>
	<h1 class="text-xl font-bold text-cat-blue transition-colors duration-150 hover:text-cat-red">
		<a href="/"> Gabriel Carneiro </a>
	</h1>
	<button
		aria-expanded={isOpen}
		class=" text-cat-text md:hidden {isOpen ? 'hidden' : 'inline'}"
		onclick={() => (isOpen = !isOpen)}
	>
		<Hamburger />
	</button>
	<nav class="hidden md:inline">
		<ul class="flex gap-4">
			{#each ['about', 'projects', 'blog'] as name}
				<li>
					<a
						aria-label="links"
						href="/{name}"
						class="underline-gw text-xl font-medium {page.url.pathname === '/' + name
							? 'text-cat-peach'
							: 'text-cat-text'} no-underline transition-all duration-150 hover:text-cat-peach"
						>{name}</a
					>
				</li>
			{/each}
		</ul>
	</nav>
</header>
{#if isOpen}
	{@render sidebar()}
{/if}

<style>
	.underline-gw {
		position: relative;
		display: inline-block;
	}

	.underline-gw::after {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 0;
		height: 2px; /* Adjust the thickness of the underline */
		background-color: currentColor; /* Use the current text color */
		transition: width 0.3s ease; /* Animation duration and easing */
	}
	.underline-gw:hover::after {
		width: 100%; /* Full width on hover */
	}
</style>
