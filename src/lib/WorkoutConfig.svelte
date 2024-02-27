<script lang="ts">
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
				<Table.Row>
					<Table.Cell>
						<Dumbbell />
					</Table.Cell>
					<Table.Cell class="font-medium">Gainage</Table.Cell>
					<Table.Cell>15s</Table.Cell>
					<Table.Cell class="text-right">
						<Button variant="outline" size="icon">
							<Pencil class="w-4 h-4" />
						</Button>
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>
						<Dumbbell />
					</Table.Cell>
					<Table.Cell class="font-medium">Pompes</Table.Cell>
					<Table.Cell>15s</Table.Cell>
					<Table.Cell class="text-right">
						<Button variant="outline" size="icon">
							<Pencil class="w-4 h-4" />
						</Button>
					</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>
						<PauseCircle />
					</Table.Cell>
					<Table.Cell class="font-medium">Pause</Table.Cell>
					<Table.Cell>30s</Table.Cell>
					<Table.Cell class="text-right">
						<Button variant="outline" size="icon">
							<Pencil class="w-4 h-4" />
						</Button>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	</Card.Content>
</Card.Root>
