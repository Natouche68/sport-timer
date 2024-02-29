import { writable } from "svelte/store";

type WorkoutConfig = {
	type: "exercise" | "rest";
	name: string;
	time: number;
}[];

export const workoutConfig = writable<WorkoutConfig>([]);

type CurrentData = {
	playing: boolean;
	currentlyDoing: number;
};

export const currentData = writable<CurrentData>({
	playing: false,
	currentlyDoing: 0,
});
