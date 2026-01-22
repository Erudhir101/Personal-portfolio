<script>
	import { resolve } from '$app/paths';
	import Github from '../assets/github.svelte';
	import Linkedin from '../assets/linkedin.svelte';
	import { TextAlignJustify, X } from 'lucide-svelte';
	import Themes from './themes.svelte';

	let isOpen = $state(false);
	function toggle() {
		isOpen = !isOpen;
	}
</script>

{#snippet sidebar()}
	<button class="hamburguer" onclick={toggle} aria-expanded={isOpen}
		><TextAlignJustify size={24} /></button
	>
	<nav class="sidebar" class:open={isOpen}>
		<div class="sidebar-header">
			<Themes />
			<button onclick={() => (isOpen = false)} aria-label="Close menu"> <X size={26} /></button>
		</div>

		<ul class="links">
			<li class="list"><a onclick={toggle} class="link" href={resolve('/')}>Home</a></li>
			<li class="list"><a onclick={toggle} class="link" href={resolve('/blog')}>Blog</a></li>
			<li class="list">
				<a onclick={toggle} class="link" href={resolve('/projects')}>Projects</a>
			</li>
		</ul>
	</nav>
{/snippet}

<header class="navbar">
	<h1 class="name">
		<a class="name-link" href={resolve('/')}>Gabriel Carneiro</a>
	</h1>
	<nav class="buttons-links">
		<ul class="links">
			<li class="list">
				<a class="link" href={resolve('/blog')}>blog</a>
			</li>
			<li class="list">
				<a class="link" href={resolve('/projects')}>projects</a>
			</li>
		</ul>
		<ul class="buttons">
			<a href="https://www.github.com/erudhir101/" class="github"><Github /></a>
			<a href="https://www.linkedin.com/in/gabriel-silva-carneiro" class="linkedin"><Linkedin /></a>
			<Themes />
		</ul>
	</nav>
	{@render sidebar()}
</header>

<style>
	.navbar {
		display: flex;
		position: sticky;
		top: 0;
		left: 0;
		z-index: 2;
		align-items: center;
		justify-content: space-between;
		gap: 2rem;
		margin-inline: auto;
		padding: 1rem 2rem;
		border-radius: 0 0 10px 10px;
		border: 2px solid var(--bg-border);
		border-top: 0;
		width: 100%;
		max-width: 50%;
		background: color-mix(in srgb, var(--bg-surface), transparent 70%);
		box-shadow:
			0px 1px 1.1px var(--bg-border),
			0px 1.7px 1.9px -1.2px var(--bg-border),
			0px 4px 4.5px -2.5px var(--bg-border);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}

	.buttons-links {
		flex: 1;
		display: flex;
	}

	.name {
		font-size: 2rem;
		font-weight: 700;
		letter-spacing: -0.0125rem;
		color: var(--color-primary);
	}

	.name-link {
		text-decoration: none;
	}

	.links {
		display: flex;
		padding: 0;
		flex: 1;
		justify-content: center;
		gap: 2rem;
	}

	.list {
		list-style-type: none;
	}

	.link {
		text-decoration: none;
		font-weight: 500;
		font-size: 1.2rem;
		letter-spacing: 0.1rem;
		color: var(--text-body);
		transition: color 0.2s ease-in-out;
		&:hover {
			color: var(--color-secondary);
		}
	}

	.buttons {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
	.github {
		color: var(--white);
		transition: color 0.2s ease-in;
		&:hover {
			color: var(--color-secondary);
		}
	}

	.linkedin {
		color: var(--color);
		transition: color 0.2s ease-in;
		&:hover {
			color: var(--color-primary);
		}
	}

	.hamburguer {
		display: none;
		background-color: transparent;
		padding: 5px;
		border: 0;
		border-radius: 8px;
		min-width: 36px;
		min-height: 36px;
		text-align: center;
		cursor: pointer;
		transition: background-color 0.2s ease-in;
		&:hover {
			background-color: var(--color-primary);
		}
	}

	.sidebar {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 50%;
		background: var(--bg-surface, #fff);
		box-shadow: 4px 0 15px rgba(0, 0, 0, 0.1);
		z-index: 50;

		transform: translateX(-100%);
		transition: transform 0.3s ease-in-out;
		&.open {
			display: block;
			transform: translateX(0);
		}
		.links {
			flex-direction: column;
			align-items: center;
		}
	}

	.sidebar-header {
		display: flex;
		justify-content: space-between;
		padding-inline: 1rem;
		align-items: center;
		margin-bottom: 1rem;
		button {
			padding: 0.2rem;
			margin: 1rem 0;
			background-color: transparent;
			border: 0;
			border-radius: 100%;
			cursor: pointer;
			transition: background-color 0.2s ease-in;
			&:hover {
				background-color: var(--bg-overlay);
			}
		}
	}

	@media (max-width: 450px) {
		.sidebar {
			display: flex;
			width: 100%;
		}
	}

	@media (max-width: 640px) {
		.buttons-links {
			display: none;
		}
		.hamburguer {
			display: flex;
		}
	}

	@media (max-width: 1280px) {
		.navbar {
			max-width: 100%;
		}
	}
</style>
