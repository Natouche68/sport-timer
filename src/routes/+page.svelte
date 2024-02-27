<script lang="ts">
	import Timer from "$lib/Timer.svelte";
	import WorkoutConfig from "$lib/WorkoutConfig.svelte";
</script>

<main
	class="h-dvh flex flex-col md:flex-row justify-around items-center overflow-x-hidden"
>
	<Timer />
	<WorkoutConfig />
</main>
