<script>
	import ProjectBlog from '$lib/components/ProjectBlog.svelte';
</script>

<ProjectBlog
	title="Projetos"
	desc="Meus projetos pessoais e realizados à trabalho."
	posts={[
		{
			title: 'portfólio',
			published: true,
			publishedAt: '2025-01-22',
			categories: ['svelte', 'portifolio', 'frontend', 'backend', 'mdsvex', 'node'],
			slug: 'https://github.com/Erudhir101/Personal-portfolio',
			summary: 'meu portfólio pessoal'
		}
	]}
	type=""
/>
