<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	const { post } = $derived(data);
</script>

<article>
	<h2>{post.title}</h2>
	<p>{post.summary}</p>
	{@html post.html}
</article>
