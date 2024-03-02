<script lang="ts">
	import { currentData, workoutConfig } from "$lib/stores";
	import EditExercise from "$lib/EditExercise.svelte";
	import AddExercise from "$lib/AddExercise.svelte";
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";
	import * as Card from "$lib/components/ui/card";
	import * as Drawer from "$lib/components/ui/drawer";
	import Dumbbell from "lucide-svelte/icons/dumbbell";
	import Pencil from "lucide-svelte/icons/pencil";
	import PauseCircle from "lucide-svelte/icons/pause-circle";
	import Play from "lucide-svelte/icons/play";
	import Check from "lucide-svelte/icons/check";
	import Hourglass from "lucide-svelte/icons/hourglass";
	import Plus from "lucide-svelte/icons/plus";
</script>

<Card.Root>
	<Card.Header>
		<Card.Title tag="h2" class="flex justify-between items-center gap-32">
			<div>My Workout {$currentData.currentConfig}</div>
			<Drawer.Root>
				<Drawer.Trigger>
					<Button variant="outline" size="icon">
						<Plus />
					</Button>
				</Drawer.Trigger>
				<AddExercise />
			</Drawer.Root>
		</Card.Title>
	</Card.Header>
	<Card.Content class="md:max-h-[64vh] overflow-y-auto">
		{#each $workoutConfig as exercise, i}
			{#if i > 0}
				<Separator />
			{/if}

			<div
				class="flex flex-row justify-between items-center p-3 {$currentData.currentlyDoing ===
					i && $currentData.playing
					? 'text-green-600'
					: ''}"
			>
				<div class="flex flex-row justify-start items-center gap-8 font-medium">
					{#if exercise.type === "exercise"}
						<Dumbbell class="w-6 h-6" />
					{:else if exercise.type === "rest"}
						<PauseCircle class="w-6 h-6" />
					{/if}
					{exercise.name}
				</div>
				<div>{exercise.time}s</div>
				<div class="text-right">
					{#if $currentData.playing}
						<Button disabled variant="ghost" size="icon">
							{#if $currentData.currentlyDoing === i}
								<Play fill="currentColor" />
							{:else if $currentData.currentlyDoing > i}
								<Check />
							{:else if $currentData.currentlyDoing < i}
								<Hourglass />
							{/if}
						</Button>
					{:else}
						<Drawer.Root>
							<Drawer.Trigger>
								<Button variant="outline" size="icon">
									<Pencil class="w-4 h-4" />
								</Button>
							</Drawer.Trigger>
							{#key $workoutConfig}
								<EditExercise exerciseIndex={i} />
							{/key}
						</Drawer.Root>
					{/if}
				</div>
			</div>
		{/each}
	</Card.Content>
</Card.Root>
