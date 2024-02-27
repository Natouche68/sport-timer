<script lang="ts">
	import { currentData, workoutConfig } from "$lib/stores";
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import * as Table from "$lib/components/ui/table";
	import Dumbbell from "lucide-svelte/icons/dumbbell";
	import Pencil from "lucide-svelte/icons/pencil";
	import PauseCircle from "lucide-svelte/icons/pause-circle";
</script>

<Card.Root class="md:w-1/3">
	<Card.Header>
		<Card.Title tag="h2">My Workout</Card.Title>
	</Card.Header>
	<Card.Content>
		<Table.Root>
			<Table.Body>
				{#each $workoutConfig as exercise}
					<Table.Row>
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
							{#if !$currentData.playing}
								<Button variant="outline" size="icon">
									<Pencil class="w-4 h-4" />
								</Button>
							{/if}
						</Table.Cell>
					</Table.Row>
				{/each}
			</Table.Body>
		</Table.Root>
	</Card.Content>
</Card.Root>
