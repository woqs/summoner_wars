import { Deck } from "./Deck";

export type Player = {
    name: string,
    mana: number,
    deck: Deck,
    graveyard: number,
    events?: string[],
};
