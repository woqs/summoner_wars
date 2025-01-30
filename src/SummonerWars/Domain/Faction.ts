import { CaveGobelin_BeastRider, CaveGobelin_HordeSlinger, CaveGobelin_Sneeks, StartPortal } from "./Card";
import { Deck, Deck_CaveGoblins } from "./Deck";
import { State } from "./FieldState";

export type Faction = {
  deck: Deck,
  startingPosition: State[],
}

export const Faction_CaveGobelins: Faction = {
  deck: Deck_CaveGoblins,
  startingPosition: [
    {y: 0, x: 0, unit: CaveGobelin_Sneeks},
    {y: 1, x: 0, unit: CaveGobelin_BeastRider},
    {y: 2, x: 0, unit: CaveGobelin_HordeSlinger},
    {y: 3, x: 0, unit: StartPortal},
  ],
}
