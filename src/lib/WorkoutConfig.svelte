<script lang="ts">
	import { currentData, workoutConfig } from "$lib/stores";
	import EditExercise from "$lib/EditExercise.svelte";
	import AddExercise from "$lib/AddExercise.svelte";
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import * as Table from "$lib/components/ui/table";
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
		<Table.Root>
			<Table.Body>
				{#each $workoutConfig as exercise, i}
					<Table.Row
						class={$currentData.currentlyDoing === i && $currentData.playing
							? "text-green-600"
							: ""}
					>
						<Table.Cell>
							{#if exercise.type === "exercise"}
								<Dumbbell />
							{:else if exercise.type === "rest"}
								<PauseCircle />
							{/if}
						</Table.Cell>
						<Table.Cell class="font-medium">{exercise.name}</Table.Cell>
						<Table.Cell>{exercise.time}s</Table.Cell>
						<Table.Cell class="text-right">
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
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Card.Content>
</Card.Root>
