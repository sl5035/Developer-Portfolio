<script>
	import ThemeSelect from './theme-select.svelte';
</script>

<div class="navbar lg:mb-12 sticky top-0 z-10">
	<div class="flex-1 px-2 mx-2">
		<!-- <a class="text-lg font-bold" href="/"> Portfolio and Blog </a> -->
	</div>

	<div class="flex-none px-2 mx-2 lg:flex">
		<div class="flex items-stretch">
			<a href="/">
				<svg
					fill="#1a1b26"
					version="1.1"
					id="Capa_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlns:xlink="http://www.w3.org/1999/xlink"
					width="25px"
					height="25px"
					viewBox="0 0 441.556 441.555"
					xml:space="preserve"
				>
					<g>
						<path
							d="M405.584,262.377h-26.899v124.201c0,22-17.7,39.799-39.801,39.799h-236.3c-22,0-39.8-17.699-39.8-39.799V262.377h-26.9
                        c-30,0-50.2-36.699-23.3-64.299l159.2-162.1c13.5-14.1,31.2-20.8,49-20.8s35.5,6.7,49.6,20.8l36.101,36.7v-32.4
                        c0-14.1,11.6-25.1,25.7-25.1h21.399c13.5,0,25.101,11,25.101,25.1v106.5l50.199,51.4
                        C455.685,225.678,436.185,262.377,405.584,262.377z"
						/>
					</g>
				</svg></a
			>
			<div class="px-4">
				<ThemeSelect />
			</div>
		</div>
	</div>
</div>
