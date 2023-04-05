<script lang="ts">
	import { marked } from 'marked';
	import type { PageData } from './$types';
	export let data: PageData;

	const { project } = data.props;
</script>

<svelte:head>
	<title>Robin Lee Portfolio | {project.name}</title>
</svelte:head>

<div class="flex justify-center items-center sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
	<img class="rounded-lg" src={project.image[0].url} alt={project.title} width="350" height="250" />
</div>

<h1 class="text-4xl font-semibold mb-5">{project.name}</h1>

<div class="mb-5 flex justify-between">
	<div>
		{#if project.tags}
			{#each project.tags as tag}
				<span class="badge badge-primary mr-2 hover:bg-primary-focus cursor-pointer">{tag}</span>
			{/each}
		{/if}
	</div>
</div>

<div class="mb-5 prose flex prose-a:text-primary hover:prose-a:text-primary-focus">
	{#if project.demo}
		<a class="mr-5" href={project.demo}>Project Paper</a>
	{/if}
	<a href={project.sourceCode}>Source Code</a>
</div>

<div class="mb-5 prose flex prose-a:text-primary hover:prose-a:text-primary-focus">
	{project.startDate}
	{#if project.endDate}
		{project.endDate}
	{/if}
</div>

<article class="absolute overflow-x-scroll">
	<h1>Tech Stack</h1>
	{@html marked(project.techStack)}
	<h1>Project Description</h1>
	{@html marked(project.description)}
	<h1>Awards</h1>
	{@html marked(project.awards)}
</article>
