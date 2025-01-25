<script>
	// Props
	let { children } = $props();
	// State using runes
	let copyButtonText = $state('Copy');
	let codeContent = $state('');
	let codeContainer = $state();

	// Effect for initializing code content
	$effect(() => {
		if (codeContainer) {
			codeContent = codeContainer.textContent || '';
		}
	});

	// Action to copy content
	async function copyToClipboard() {
		try {
			await navigator.clipboard.writeText(codeContent);
			copyButtonText = 'Copied!';

			setTimeout(() => {
				copyButtonText = 'Copy';
			}, 2000);
		} catch (err) {
			console.error('Failed to copy:', err);
			copyButtonText = 'Failed to copy';
		}
	}
</script>

<div class="group relative">
	<button
		onclick={copyToClipboard}
		class="absolute right-2 top-2 rounded bg-gray-700 px-2 py-1 text-sm text-white
           opacity-0 transition-opacity duration-200 group-hover:opacity-100"
	>
		{copyButtonText}
	</button>

	<pre class="relative overflow-x-auto rounded-lg bg-gray-900 p-4">
    <code bind:this={codeContainer} class="text-white">
      {@render children()}
    </code>
  </pre>
</div>

<style>
	pre {
		position: relative;
		margin: 1em 0;
	}

	code {
		font-family: 'Fira Code', monospace;
		font-size: 0.9em;
		line-height: 1.5;
	}
</style>
