import { Unit } from "./Card";

export type FieldState = {
    field: State[][],
};
export type State = {
    x: number,
    y: number,
    unit?: Unit,
};
