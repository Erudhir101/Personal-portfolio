<script>
	import ProjectBlog from '$lib/components/ProjectBlog.svelte';
	let { data } = $props();
</script>

<ProjectBlog
	title="Blogs"
	desc="Artigos sobre TI, estudos pessoais e afins."
	posts={data.posts}
	type="Artigo"
/>
