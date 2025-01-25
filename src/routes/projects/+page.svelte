<script>
	import ProjectBlog from '$lib/components/ProjectBlog.svelte';
</script>

<ProjectBlog
	title="Projetos"
	desc="Meus projetos pessoais e realizados à trabalho."
	posts={[
		{
			title: 'portifolio',
			published: true,
			publishedAt: '2025-01-22',
			categories: ['svelte', 'portifolio', 'frontend', 'backend', 'mdsvex', 'node'],
			slug: 'https://github.com/erudhir101/portifolio',
			summary: 'meu portifolio pessoal'
		}
	]}
	type="projects"
/>
