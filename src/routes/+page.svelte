<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	const { projects } = data;
</script>

<pre>{JSON.stringify(projects, null, 2)}</pre>
