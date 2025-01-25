<footer class="mb-16 flex w-full flex-col-reverse items-center justify-between gap-8 md:flex-row">
	<div class="flex items-baseline gap-2">
		<h3 class="text-lg font-extrabold">Gabriel Carneiro</h3>
		<span class="text-sm font-light">© {new Date().getFullYear()}</span>
	</div>
	<nav>
		<ul class="flex flex-col flex-wrap items-center gap-4 sm:flex-row">
			<li>
				<a
					aria-label="links"
					href="/about"
					class="underline-gw text-lg font-bold text-cat-text no-underline transition-all duration-150 hover:text-cat-peach"
				>
					About
				</a>
			</li>
			<span class="hidden text-2xl font-thin leading-[0] text-cat-text sm:inline">|</span>
			<li>
				<a
					aria-label="links"
					href="/projects"
					class="underline-gw text-lg font-bold text-cat-text no-underline transition-all duration-150 hover:text-cat-peach"
				>
					Projects
				</a>
			</li>
			<span class="hidden text-2xl font-thin leading-[0] text-cat-text sm:inline">|</span>
			<li>
				<a
					aria-label="links"
					href="/blog"
					class="underline-gw text-lg font-bold text-cat-text no-underline transition-all duration-150 hover:text-cat-peach"
				>
					Blog
				</a>
			</li>
		</ul>
	</nav>
	<div>
		<ul class="flex items-center gap-8">
			{#each [{ name: 'github', icon: '', href: 'https://www.github.com/erudhir101' }, { name: 'Linkedin', icon: '', href: 'https://www.linkedin.com/in/gabriel-silva-carneiro' }] as social}
				<li>
					<a
						aria-label={social.name}
						href={social.href}
						target="_blank"
						class="underline-gw text-4xl font-bold text-cat-text no-underline transition-all duration-150 {social.name ===
						'Linkedin'
							? 'hover:text-cat-blue'
							: 'hover:text-cat-mauve'}"
					>
						{social.icon}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</footer>
