<script lang="ts">
	import { currentData, workoutConfig } from "$lib/stores";
	import EditExercise from "$lib/EditExercise.svelte";
	import AddExercise from "$lib/AddExercise.svelte";
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";
	import * as Card from "$lib/components/ui/card";
	import * as Dialog from "$lib/components/ui/dialog";
	import Dumbbell from "lucide-svelte/icons/dumbbell";
	import Pencil from "lucide-svelte/icons/pencil";
	import PauseCircle from "lucide-svelte/icons/pause-circle";
	import Play from "lucide-svelte/icons/play";
	import Check from "lucide-svelte/icons/check";
	import Hourglass from "lucide-svelte/icons/hourglass";
	import Plus from "lucide-svelte/icons/plus";

	let addExerciseOpen = false;

	let areDialogsOpen: boolean[] = [];
	$workoutConfig.forEach(() => {
		areDialogsOpen.push(false);
	});
</script>

<Card.Root>
	<Card.Header>
		<Card.Title tag="h2" class="flex justify-between items-center gap-32">
			<div>My Workout {$currentData.currentConfig}</div>
			<Dialog.Root bind:open={addExerciseOpen}>
				<Dialog.Trigger>
					<Button variant="outline" size="icon">
						<Plus />
					</Button>
				</Dialog.Trigger>
				<AddExercise bind:isDialogOpen={addExerciseOpen} />
			</Dialog.Root>
		</Card.Title>
	</Card.Header>
	<Card.Content class="max-h-[30vh] md:max-h-[64vh] overflow-y-auto">
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
				<div
					class="flex flex-row justify-start items-center gap-4 md:gap-12 font-medium"
				>
					{#if exercise.type === "exercise"}
						<Dumbbell class="w-6 h-6" />
					{:else if exercise.type === "rest"}
						<PauseCircle class="w-6 h-6" />
					{/if}
					{exercise.name}
				</div>
				<div
					class="flex flex-row justify-end items-center gap-4 md:gap-16 text-right"
				>
					{exercise.time}s
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
						<Dialog.Root bind:open={areDialogsOpen[i]}>
							<Dialog.Trigger>
								<Button variant="outline" size="icon">
									<Pencil class="w-4 h-4" />
								</Button>
							</Dialog.Trigger>
							{#key $workoutConfig}
								<EditExercise
									exerciseIndex={i}
									bind:isDialogOpen={areDialogsOpen[i]}
								/>
							{/key}
						</Dialog.Root>
					{/if}
				</div>
			</div>
		{/each}
	</Card.Content>
</Card.Root>
