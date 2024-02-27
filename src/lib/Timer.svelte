<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import Play from "lucide-svelte/icons/play";
</script>

<div class="w-3/4 md:w-1/3 relative">
	<svg viewBox="0 0 256 256" class="overflow-visible">
		<circle
			cx="128"
			cy="128"
			r="128"
			fill="none"
			stroke="currentColor"
			stroke-width="5"
		/>
	</svg>
	<div
		class="absolute inset-16 md:inset-24 flex flex-col justify-center items-center gap-6"
	>
		<div class="text-6xl md:text-8xl font-semibold">00:00,00</div>
		<Button variant="outline" size="icon" class="w-20 h-20 md:w-24 md:h-24">
			<Play class="w-12 h-12 md:w-16 md:h-16" fill="currentColor" />
		</Button>
	</div>
</div>
