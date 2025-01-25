<script>
	import perfil from '$lib/perfil-2.jpeg';
</script>

<main class="flex w-full flex-col items-center gap-8 px-4 lg:flex-row-reverse">
	<div class="aspect-square max-w-sm overflow-hidden rounded-3xl border-2 border-cat-red md:w-2/3">
		<img
			class="block h-full object-fill"
			src={perfil}
			alt="foto do dono do portifolio"
			width="800"
			height="800"
		/>
	</div>
	<div class="flex flex-1 flex-col items-center justify-center sm:items-stretch">
		<h2 class="pb-8 text-6xl font-semibold tracking-tighter sm:text-8xl md:text-9xl">Sobre Mim</h2>
		<div class="prose prose-xl prose-slate self-start font-light dark:prose-invert">
			<p>
				Sou um engenheiro de software apaixonado por tecnologia e criação de produtos e serviços
				tecnológicos, por meio de ferramentas e processo de desenvolvimento.
				<br />
				<br />
				Utilizo e tenho o conhecimento das mais diversas ferramentas e processo de desenvolvimento, seja
				elas FrontEnd, BackEnd, Bancos de Dados, diagramas UML, Métodos Ágeis entre outros.
			</p>
		</div>
	</div>
</main>
