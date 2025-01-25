<script>
	let { type, search = $bindable() } = $props();
</script>

<input
	class="self-end rounded-lg border border-transparent bg-cat-crust p-4 text-cat-text transition duration-200 ease-in placeholder:opacity-80 hover:border-cat-text focus:border-cat-blue focus:outline-none"
	type="search"
	id="search-field"
	placeholder="Pesquise o {type}"
	autocomplete="on"
	bind:value={search}
/>
