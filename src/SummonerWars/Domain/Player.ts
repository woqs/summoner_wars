import { Card } from "./Card";
import { Deck } from "./Deck";
import { State } from "./FieldState";

export type Player = {
    name: string,
    mana: number,
    deck: Deck,
    graveyard: Card[],
    events?: string[],
    unitsState: State[],
};
