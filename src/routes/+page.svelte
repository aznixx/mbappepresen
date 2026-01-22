<script lang="ts">
	import { slides } from '$lib/presentation';
	import { quintOut } from 'svelte/easing';
	import { fly, fade } from 'svelte/transition';
	import { Maximize2, X } from '@lucide/svelte';
	import './layout.css';

	let currentIndex = $state(0);
	let direction = $state(1); // 1 = Next, -1 = Prev
	let isAnimating = $state(false);
	let isFocused = $state(false);

	const duration = 1000;

	function next() {
		if (isAnimating || currentIndex >= slides.length - 1 || isFocused) return;
		direction = 1;
		isAnimating = true;
		currentIndex++;
		setTimeout(() => (isAnimating = false), duration);
	}

	function prev() {
		if (isAnimating || currentIndex <= 0 || isFocused) return;
		direction = -1;
		isAnimating = true;
		currentIndex--;
		setTimeout(() => (isAnimating = false), duration);
	}

	function onKeyDown(e: KeyboardEvent) {
		if (isFocused) {
			if (e.key === 'Escape') isFocused = false;
			return;
		}
		if (e.key === 'ArrowRight' || e.key === ' ') next();
		if (e.key === 'ArrowLeft') prev();
	}

	function cinematicSlide(node: Element, { delay = 0, duration = 1000, dir = 1, mode = 'in' }) {
		return {
			delay,
			duration,
			easing: quintOut,
			css: (t: number, u: number) => {
				// Translate Logic
				const offset = u * 100;
				let transform = '';

				if (dir === 1) {
					transform += `translateX(${offset}%) `;
				} else {
					transform += `translateX(${-offset}%) `;
				}

				// Scale Logic
				let scale = 1;
				if (mode === 'in') {
					// Enter: 1.1 -> 1
					scale = 1 + u * 0.1;
				} else {
					// Exit: 1 -> 0.95
					scale = 1 - u * 0.05;
				}
				transform += `scale(${scale})`;

				// Opacity Logic
				// Fade in/out to smooth the hard edges
				const opacity = t;

				return `transform: ${transform}; opacity: ${opacity};`;
			}
		};
	}

	// Reset focus when changing slides
	$effect(() => {
		currentIndex;
		isFocused = false;
	});
</script>

<svelte:window onkeydown={onKeyDown} />

<div class="fixed inset-0 flex overflow-hidden bg-black font-sans text-white select-none">
	{#if slides[currentIndex].type === 'youtube'}
		<!-- ENHANCED CINEMATIC YOUTUBE LAYOUT -->
		{#key currentIndex}
			<div
				class="absolute inset-0 z-0 h-full w-full"
				in:cinematicSlide={{ duration, dir: direction, mode: 'in' }}
				out:cinematicSlide={{ duration, dir: direction === 1 ? -1 : 1, mode: 'out' }}
			>
				<div
					class="absolute inset-0 z-10 bg-gradient-to-r from-black via-black/40 to-transparent transition-opacity duration-700 {isFocused
						? 'opacity-0'
						: 'opacity-100'}"
				></div>
				<div
					class="absolute inset-0 z-10 bg-black/40 transition-all duration-700 {isFocused
						? 'backdrop-blur-0 bg-black/0'
						: 'backdrop-blur-[4px]'}"
				></div>

				<iframe
					width="100%"
					height="100%"
					src="https://www.youtube.com/embed/{slides[currentIndex]
						.youtubeId}?autoplay=1&mute={isFocused ? '0' : '1'}&loop=1&playlist={slides[
						currentIndex
					].youtubeId}&controls=1&rel=0&showinfo=0&iv_load_policy=3"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen
					class="h-full w-full transition-all duration-1000 {isFocused
						? 'scale-[0.85] object-contain'
						: 'scale-[1.4] object-cover contrast-125 saturate-125'}"
					class:pointer-events-none={!isFocused}
				></iframe>
			</div>

			{#if !isFocused}
				<div
					class="relative z-20 flex h-full w-full flex-col justify-center p-16 xl:p-32"
					in:fly={{ x: -100, duration: 1200, delay: 500, easing: quintOut }}
					out:fade={{ duration: 400 }}
				>
					<div class="flex max-w-5xl flex-col gap-10">
						<!-- HEADER -->
						<div class="flex items-center gap-6">
							<div class="h-px w-12 bg-cyan-500"></div>
							<div class="text-sm font-black tracking-[0.6em] text-cyan-400 uppercase">
								{slides[currentIndex].subtitle || 'CINEMATIC MOMENT'}
							</div>
						</div>

						<!-- TITLE -->
						<div class="flex flex-col">
							<h1
								class="text-[12rem] leading-[0.8] font-black tracking-tighter text-white uppercase italic drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] xl:text-[14rem]"
							>
								THE<br />HATTRICK
							</h1>
						</div>

						<!-- STORY & STATS ROW -->
						<div class="flex flex-col gap-12 xl:flex-row xl:items-end">
							<p
								class="max-w-2xl border-l-[6px] border-cyan-500 bg-black/60 p-10 text-2xl leading-relaxed font-light text-zinc-100 backdrop-blur-xl"
							>
								{slides[currentIndex].story}
							</p>

							<!-- FOCUS BUTTON -->
							<button
								onclick={() => (isFocused = true)}
								class="group flex h-24 flex-1 items-center justify-center gap-4 border border-cyan-500/30 bg-black/40 px-8 text-xl font-black tracking-widest text-white uppercase backdrop-blur-md transition-all hover:bg-cyan-500 hover:text-black"
							>
								<Maximize2 size={32} class="transition-transform group-hover:scale-110" />
								<span>Focus</span>
							</button>

							<!-- GOAL MARKERS -->
							<div class="flex gap-4">
								{#each ["80'", "81'", "118'"] as minute}
									<div
										class="group relative flex h-24 w-24 flex-col items-center justify-center border border-white/20 bg-white/5 backdrop-blur-md transition-all hover:border-cyan-500 hover:bg-cyan-500/20"
									>
										<div class="text-3xl font-black text-white italic">{minute}</div>
										<div class="text-[10px] font-bold tracking-widest text-cyan-400 uppercase">
											GOAL
										</div>
										<div
											class="absolute -top-1 -right-1 h-3 w-3 bg-cyan-500 shadow-[0_0_10px_#06b6d4]"
										></div>
									</div>
								{/each}
							</div>
						</div>

						<!-- FOOTER KEYWORDS -->
						{#if slides[currentIndex].keywords}
							<div class="flex flex-wrap gap-4">
								{#each slides[currentIndex].keywords as word}
									<div class="flex items-center gap-2">
										<span class="h-1.5 w-1.5 rounded-full bg-cyan-500"></span>
										<span class="text-xs font-black tracking-[0.2em] text-zinc-400 uppercase"
											>{word}</span
										>
									</div>
								{/each}
							</div>
						{/if}
					</div>
				</div>
			{:else}
				<!-- EXIT FOCUS BUTTON -->
				<button
					onclick={() => (isFocused = false)}
					in:fade={{ delay: 1000, duration: 500 }}
					class="absolute top-8 right-8 z-50 flex h-16 w-32 items-center justify-center gap-2 bg-black/60 font-black tracking-widest text-white uppercase backdrop-blur-md transition-all hover:bg-white hover:text-black"
				>
					<X size={20} />
					<span>Exit</span>
				</button>
			{/if}
		{/key}
	{:else if slides[currentIndex].type === 'gallery'}
		<!-- PREMIUM TROPHY GALLERY LAYOUT -->
		{#key currentIndex}
			<div
				class="absolute inset-0 z-0 h-full w-full bg-black"
				in:cinematicSlide={{ duration, dir: direction, mode: 'in' }}
				out:cinematicSlide={{ duration, dir: direction === 1 ? -1 : 1, mode: 'out' }}
			>
				<!-- Background Decoration -->
				<div
					class="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10"
				>
					<h2
						class="text-[30vw] font-black tracking-tighter text-white uppercase italic blur-sm select-none"
					>
						{slides[currentIndex].bgTitle}
					</h2>
				</div>

				<!-- Gallery Grid -->
				<div
					class="relative z-10 grid h-full w-full grid-cols-2 gap-4 p-8 xl:p-16 {(slides[
						currentIndex
					].images?.length || 0) <= 2
						? 'grid-rows-1'
						: 'grid-rows-2'}"
				>
					{#each slides[currentIndex].images || [] as img, i}
						<div
							class="group relative overflow-hidden bg-zinc-900 shadow-2xl transition-all duration-700 hover:z-20 hover:scale-[1.02] hover:shadow-cyan-500/20"
							in:fly={{
								y: 50,
								opacity: 0,
								duration: 800,
								delay: 400 + i * 150,
								easing: quintOut
							}}
						>
							<img
								src={img}
								alt="Trophy"
								class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
								class:object-top={(slides[currentIndex].images?.length || 0) <= 2}
								class:object-bottom={i === 3}
							/>
							<div
								class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
							></div>
						</div>
					{/each}
				</div>

				<!-- Content Overlay -->
				<div
					class="absolute bottom-16 left-16 z-30 max-w-xl border-l-[6px] border-cyan-500 bg-black/60 p-10 backdrop-blur-xl"
					in:fly={{ x: -50, opacity: 0, duration: 1000, delay: 1000, easing: quintOut }}
				>
					<div class="mb-4 text-sm font-black tracking-[0.4em] text-cyan-400 uppercase">
						{slides[currentIndex].subtitle}
					</div>
					<h1 class="mb-6 text-6xl font-black tracking-tighter text-white uppercase italic">
						{slides[currentIndex].title}
					</h1>
					<p class="text-xl leading-relaxed font-light text-zinc-100">
						{slides[currentIndex].story}
					</p>
					<div class="mt-8 flex flex-wrap gap-4">
						{#each slides[currentIndex].keywords || [] as word}
							<span class="text-xs font-bold tracking-[0.2em] text-cyan-500 uppercase">#{word}</span
							>
						{/each}
					</div>
				</div>
			</div>
		{/key}
	{:else}
		<!-- STANDARD SPLIT LAYOUT -->
		<div class="relative h-full w-1/2 overflow-hidden border-r border-white/10 bg-zinc-900">
			{#key currentIndex}
				<div
					class="absolute inset-0 h-full w-full"
					in:cinematicSlide={{ duration, dir: direction, mode: 'in' }}
					out:cinematicSlide={{ duration, dir: direction === 1 ? -1 : 1, mode: 'out' }}
				>
					{#if 'video' in slides[currentIndex] && slides[currentIndex].video}
						<video
							src={slides[currentIndex].video}
							autoplay
							muted={!slides[currentIndex].withSound}
							loop
							playsinline
							class="h-full w-full object-cover"
						></video>
					{:else if 'image' in slides[currentIndex] && slides[currentIndex].image}
						<img
							src={slides[currentIndex].image}
							alt=""
							class="h-full w-full object-cover transition-transform duration-[20s] ease-linear"
							class:scale-110={currentIndex !== 0}
							style={currentIndex !== 0 ? 'animation: drift 20s infinite alternate;' : ''}
						/>
					{/if}
				</div>
			{/key}
		</div>

		<!-- RIGHT COLUMN: CONTENT (50%) -->
		<div class="relative flex h-full w-1/2 flex-col justify-center bg-black p-16 xl:p-24">
			<!-- HEADER (Fixed Top Right of Content Col) -->
			<div
				class="absolute top-8 right-8 flex items-center gap-4 font-mono text-xs tracking-widest text-zinc-500 uppercase"
			>
				<span>ADAM OURAHOU</span>
				<span class="h-px w-8 bg-zinc-700"></span>
				<span>CH. 0{currentIndex}</span>
			</div>

			{#key currentIndex}
				<div
					class="flex flex-col gap-12"
					in:fly={{ y: 20, duration: 800, delay: 300, easing: quintOut }}
				>
					<!-- SUBTITLE -->
					<div class="text-sm font-bold tracking-[0.4em] text-cyan-500 uppercase">
						{slides[currentIndex].subtitle || 'THE CHRONICLE'}
					</div>

					<!-- TITLE -->
					<h1
						class="text-7xl leading-[0.9] font-black tracking-tighter text-white uppercase italic xl:text-8xl"
					>
						{#if slides[currentIndex].title.includes(' ')}
							{#each slides[currentIndex].title.split(' ') as word}
								<div class="block">{word}</div>
							{/each}
						{:else}
							{slides[currentIndex].title}
						{/if}
					</h1>

					<!-- STORY -->
					{#if slides[currentIndex].story}
						<div
							class="max-w-xl border-l border-zinc-700 pl-6 text-lg leading-relaxed font-light text-zinc-400"
						>
							{slides[currentIndex].story}
						</div>
					{/if}

					<!-- KEYWORDS (Staggered List) -->
					{#if slides[currentIndex].keywords && slides[currentIndex].keywords.length > 0}
						<div class="mt-4 flex flex-wrap gap-x-6 gap-y-2">
							{#each slides[currentIndex].keywords as word}
								<span class="text-xs font-bold tracking-widest text-zinc-600 uppercase"
									>#{word}</span
								>
							{/each}
						</div>
					{/if}
				</div>
			{/key}
		</div>
	{/if}

	<!-- NAVIGATION & PROGRESS (Always visible) -->
	<!-- PROGRESS (Bottom fixed) -->
	<div
		class="absolute bottom-0 left-0 z-50 h-1 w-full bg-zinc-900/50 transition-opacity duration-700"
		class:opacity-0={isFocused}
	>
		<div
			class="h-full bg-cyan-500 transition-all duration-500 ease-out"
			style="width: {((currentIndex + 1) / slides.length) * 100}%"
		></div>
	</div>

	<!-- NAVIGATION HINT -->
	<div
		class="absolute right-8 bottom-8 z-50 flex gap-2 text-[10px] tracking-widest text-zinc-400 transition-opacity duration-700"
		class:opacity-0={isFocused}
	>
		<span>PREV [←]</span>
		<span>NEXT [→]</span>
	</div>
</div>

<style>
	@keyframes drift {
		from {
			transform: scale(1);
		}
		to {
			transform: scale(1.1);
		}
	}
</style>
