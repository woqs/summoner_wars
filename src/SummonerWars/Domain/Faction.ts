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
    {y: 7, x: 4, unit: CaveGobelin_Sneeks},
    {y: 5, x: 2, unit: CaveGobelin_BeastRider},
    {y: 6, x: 4, unit: CaveGobelin_HordeSlinger},
    {y: 6, x: 3, unit: StartPortal},
  ],
}
