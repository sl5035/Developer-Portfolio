<script lang="ts">
	import { onMount } from 'svelte';
	import ProjectCard from '$lib/components/project-card.svelte';
	import IconsNav from '$lib/components/icons-nav.svelte';
	import type { PageData } from './$types';
	import { marked } from 'marked';
	export let data: PageData;

	const { projects } = data.props;
	const { authors } = data.props;
	let projectContainer: any;

	onMount(() => {
		projectContainer = document.getElementById('project-container');
		console.log('Mounted PC');
		console.log(projectContainer);
	});

	let sProject: any;
	let isDefault = true;
	let projectSelected = false;

	let projectScaled = 'mr-6 individual-project-scale';
	let projectUnScaled = 'mr-6 individual-project';

	function getRandomColor() {
		var trans = '1'; // 100% transparency
		var color = 'rgba(';
		for (var i = 0; i < 3; i++) {
			color += Math.floor(Math.random() * 255) + ',';
		}
		color += trans + ')'; // add the transparency
		return color;
	}
	const randomColor1 = getRandomColor();
	const randomColor2 = getRandomColor();

	const mainMessageClass = 'main-message';

	function selectProject(slug: any) {
		sProject = projects.find((arr: { slug: any }) => arr.slug === slug);

		console.log('slug: ' + slug + ' SProject:');
		console.log(sProject);

		isDefault = false;
		projectContainer?.classList.add('individual-project-scale');
		//projectContainer?.classList.remove("individual-project-scale");
		//projectSelected = true;
	}

	function selectHome() {
		sProject = null;

		isDefault = true;
		//projectSelected = false;
	}
</script>

<svelte:head>
	<title>Robin Lee Portfolio</title>
</svelte:head>

<div
	class="inner-container"
	style="/*max-height: 791px;*/ --grad1:{randomColor1}; --grad2:{randomColor2}"
>
	<div class="relative">
		<svg
			class="absolute corner-top-left"
			width="300"
			height="300"
			data-name="corner-top-left"
			xmlns="http://www.w3.org/2000/svg"
			style="pointer-events:none; top:0;left:0;transition:all ease-in-out;"
			data-inlinesvg=".inlineSvgFile-1"
			><defs
				><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"
					><stop offset="0" class="gradient1" /><stop offset=".5" class="gradient2" /><stop
						offset="1"
						class="gradient1"
					/></linearGradient
				></defs
			><path
				fill="url('#grad1')"
				d="M8 0h292l-20 20H25a5 5 0 0 0-5 5v255L0 300V8a8 8 0 0 1 8-8Z"
			/></svg
		>
	</div>

	<div class="p-8 relative">
		<div class="flex flex-col justify-items-center">
			<header class="mb-3 lg:mb-4 2xl:mb-24 ml-1 md:ml-4 mt-4 flex flex-row">
				<div class="w-4/5 text-3xl md:text-base">
					<p on:click={selectHome}>Portfolio</p>
				</div>

				<IconsNav />
			</header>

			<div
				class="flex flex-col mt-6 md:mt-0 lg:flex-row xs-mb-23 lg:mb-20 xl:mb-24 items-start pl-12 gap-15 lg:mx-12"
			>
				<div class="w-full md:w-3/4">
					<div class="flex project-body">
						<!-- {#if isDefault} -->
						<!-- <p>Test</p> -->
						{#each authors as { name, intro }}
							<!-- <div class="flex"> -->
							<div class={isDefault ? projectScaled : projectUnScaled}>
								<div id="welcome">
									<svg
										id="welcome_svg"
										xmlns="http://www.w3.org/2000/svg"
										class="w-full"
										width="605.44"
										height="122.24"
										viewBox="0 0 3092 382"
										data-inlinesvg=".inlineSvgFile-7"
										><path
											id="welcome_path"
											style="stroke-dasharray: 9541.93, 9541.93; stroke-dashoffset: 7156; transition: fill 1s ease-in-out 0s; stroke: rgb(204, 204, 204);"
											stroke="none"
											stroke-miterlimit="10"
											stroke-width="2"
											d="M673 52h13v286h-13V52ZM21 68h15l11.67 35 25.66 76 31.33 92L121 319c1.18-7.67 5.08-16.57 7.66-24l14.65-42 44.36-127 15.75-45c3.77-10.08 3.22-12.74 9.6-12.98 10.02-.39 8.61 1.39 13.32 14.98l15.33 44 40.99 117L309 319c1.13-7.32 8.11-26.23 10.95-34l14-41 10.74-32 29.98-87 14.66-43c4.29-12.86 3.55-13.88 10.67-14h8l-13.69 40-38.65 113-27.33 80L316 338h-7c-8.14-.05-7.4-.24-12.33-15l-15.34-44-39.99-114L214 87c-1.18 7.63-4.52 14.73-7 22l-15 43-30.31 87-15.27 44-12.75 37c-1.05 3.14-4.63 14.5-6.51 16.4-1.95 1.98-9.36 2.07-11.94 1.31-3.99-1.18-6.58-12.8-7.89-16.71l-16.66-49L21 68Zm570 230c2.38 2.41 7.16 6.17 5.83 10-.99 2.86-6.43 7.08-8.83 9.13-8.01 6.86-18.98 13.19-29 16.54-31.99 10.67-70.69 6.18-98-14.15-17.58-13.08-30.45-33.18-35.5-54.52-3.02-12.77-2.65-24.03-2.5-37 .31-26.02 14.43-53.95 34-70.7 29.18-24.98 77.82-27.22 110-6.76 15.48 9.85 25.23 22.2 33.24 38.46 8.78 17.81 9.76 31.68 9.76 51H457l-22 1 3.5 22c2.11 8.93 6.03 17.29 10.94 25 22.1 34.72 69.57 48.39 107.56 33.54 20.65-8.08 22.5-15.31 34-23.54Zm320-1c12.51 5.34 10.73 10.47 1.91 18.57-8.18 7.52-16.65 12.67-26.91 16.83-27.39 11.09-63.18 8.47-89-5.71-56.7-31.15-64.76-116.41-20.96-161.69 16.95-17.52 41.58-27.96 65.96-28h13c17.15.2 38.68 7.29 52 18.09 3.48 2.82 13.82 11.03 13.1 15.87-.31 2.1-2.54 3.96-4.12 5.19-1.79 1.39-2.96 1.94-4.98 2.85-16.12-22.52-41.49-30.31-68-30-13.46.16-31.78 6.35-43 13.7-48.27 31.58-51.35 106.37-9 144.13 32.26 28.76 94.69 27.83 120-9.83Zm130-159.58c31.95-3.9 65.11 6.25 86.83 30.58 14.22 15.93 24.14 40.56 24.17 62v17c-.32 26.84-16.35 57.76-38 73.41-21.5 15.54-41.23 18.89-67 18.59-7.87-.1-18.5-2.52-26-5-31.73-10.49-54.2-35.62-62.1-68-3.13-12.81-3.05-22.06-2.9-35 .18-14.98 5.27-32.93 12.51-46 12.61-22.75 33.41-38.61 58.49-45.25l14-2.33ZM1229 184c2.81-11.94 13.43-23.44 23-30.63 20.75-15.58 38.22-16.66 63-16.37 10.93.13 25.57 4.26 35 9.75 11.55 6.71 21.12 16.99 26.56 29.25l5.44 14c3.84-16.33 17.18-31.14 31-39.95 20.33-12.95 36.95-13.32 60-13.05 21.62.26 42.69 11.59 55.22 29 14.93 20.75 13.78 43.98 13.78 68v104h-13V215c-.03-18.87-8.14-40.46-23-52.53-21.85-17.76-59.06-17.22-83-3.96-7.55 4.19-14.03 9.9-19.56 16.49-19.32 23.02-18.44 47.97-18.44 76v87h-13V221c-.03-17.84-4.92-39.43-17.32-52.83-19.51-21.09-55.03-24.08-80.68-13.72-11.39 4.6-21.2 12.02-28.91 21.55-18.09 22.38-17.09 46.16-17.09 73v89h-13V138h13v29l1 17Zm542 114c2.39 2.42 7.16 6.17 5.83 10-.91 2.65-6.56 7.66-8.83 9.56-8.97 7.53-18.99 12.76-30 16.58-30.89 10.72-70.81 4.63-97-14.9-48.89-36.45-51.28-121.31-5-160.94 14.53-12.44 35.76-21.21 55-21.3h13c8.96.11 17.63 2.32 26 5.31 23.27 8.31 40.35 24.18 50.69 46.69 7.74 16.84 10.31 32.6 10.31 51h-175c.03 34.99 20.14 67.24 53 80.55 13.99 5.67 25.24 6.47 40 6.45 15.51-.02 33.42-5.67 46-14.78l16-14.22Zm7-69c-.24-26.58-16.1-55.62-39-69.24-24.94-14.85-59.06-14.85-84 0-18.23 10.85-30.98 29.82-36.11 50.24l-2.89 19h162Zm-1180 0c-2.27-28.02-15.25-54.79-40-69.55-29.57-17.64-72.11-13.53-96.96 10.64-15.37 14.94-24.57 37.54-25.04 58.91h162Zm445-79.7c-32.04 5.95-54.87 20.41-67.55 51.7-4.06 10.03-6.4 24.18-6.45 35-.18 39.89 18.04 74.6 58 86.98 5.76 1.78 15.05 3.95 21 4.02 18.01.21 32.87-1.63 49-10.51 49.02-27.01 55.84-102.96 18.71-142.4-18.76-19.93-46.02-27.44-72.71-24.79Zm799 165.55c4.74-1.3 9.69-1.39 13.67 1.95 7.18 6.01 5.14 18.08-3.67 21.46-14.63 5.61-25.63-14.82-10-23.41Z"
										/></svg
									>
								</div>

								<span class={mainMessageClass}>
									<h2 class="text-3xl md:text-xl mb-4 font-bold tracking-wider underline mt-6">
										<a href="/about">{name}</a>
									</h2>
									<p class="text-base md:text-base mb-4">{@html marked(intro)}</p>
								</span>
							</div>

							<!-- <img class="mask mask-squircle h-48" src={url} alt={name} /> -->
							<!-- </div> -->
						{/each}
						<!-- {:else} -->
						<!-- <div class="flex"> -->
						{#if sProject}
							{#each projects as { name, slug, sourceCode }}
								<div
									id="project-container"
									class={sProject.slug === slug ? projectScaled : projectUnScaled}
								>
									<span class={mainMessageClass}>
										<h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
										<p class="text-sm mb-4">{sProject.summary}</p>
										<button class="project-link text-2xl lg:text-base"
											><a href="/projects/{slug}"> View </a></button
										>

										<button class="project-link text-2xl lg:text-base"
											><a href={sourceCode}> Source </a></button
										>
									</span>
								</div>
							{/each}

							<!-- </div> -->
						{/if}
					</div>
				</div>
				<div class="flex flex-col md:w-1/4 w-3/4 pr-9">
					<h2 class="my-8" style="font-size:30px;font-weight:100;">Projects</h2>
					<!-- <div class="project-wrapper before:bg-gradient-to-r before:from-[{randomColor1}] before:via-[{randomColor2}] before:to-[{randomColor1}]
					after:bg-gradient-to-r after:from-[{randomColor2}] after:via-[{randomColor1}] after:to-[{randomColor2}]"> -->
					<div class="project-wrapper">
						<div>
							{#each projects as { name, slug }}
								<!-- <a class="mb-3" href="/projects/{slug}"><p>{name}</p></a>		 -->
								<a class="mb-2 lg:mb-3 text-2xl lg:text-base" on:click={() => selectProject(slug)}
									><span>{name}</span></a
								>
							{/each}
						</div>
					</div>
				</div>
			</div>

			<div class="absolute bottom-0 md:bottom-16 right-24 lg:bottom-20 lg:right-20 text-sm italic">
				<p>
					&copy; {`${new Date().getFullYear()}`} Robin Lee
				</p>
			</div>
		</div>

		<div class="relative">
			<svg
				class="absolute corner-bottom-right"
				width="300"
				height="300"
				data-name="corner-bottom-right"
				xmlns="http://www.w3.org/2000/svg"
				style="pointer-events:none; right:0; bottom:0;"
				data-inlinesvg=".inlineSvgFile-6"
				><defs
					><linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%"
						><stop offset="0" class="gradient1" /><stop offset=".5" class="gradient2" /><stop
							offset="1"
							class="gradient1"
						/></linearGradient
					></defs
				><path
					fill="url('#grad2')"
					d="M292 300H0l20-20h255a5 5 0 0 0 5-5V20l20-20v292a8 8 0 0 1-8 8Z"
				/></svg
			>
		</div>
	</div>
</div>

<!-- {#each authors as { name, intro, picture: { url } }}
	<div class="flex mb-40 items-end">
		<div class="mr-6">
			<h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
			<p class="text-xl mb-4">{intro}</p>
		</div>

		<img class="mask mask-squircle h-48" src={url} alt={name} />
	</div>
{/each} -->

<!-- <div class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52">
	{#each projects as { name, slug, description, image }}
		<ProjectCard {name} {description} url={image[0].url} {slug} />
	{/each}
</div> -->
