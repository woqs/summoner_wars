import { Player } from "./Player";

export const STRIKE_TYPE_MELEE = "M";
export const STRIKE_TYPE_RANGED = "R";

export type ICard = {
  name: string,
  cost: number,
}

export type Unit = ICard & {
  maxHealth: number,
  currentHealth: number,
  strikes: number,
  strikesType: typeof STRIKE_TYPE_MELEE | typeof STRIKE_TYPE_RANGED,
  capacity: Capacity[],
  owner?: Player,
};

export type Event = ICard & {
  effect: string,
}

export type Card =
  | Unit
  | Event;


export const CAPACITY_FREE_ATTACK = "free_attack";
export const CAPACITY_NO_MOVE = "no_move";
export const CAPACITY_SWITCH = "switch";
export const CAPACITY_FEED = "feed";
export const CAPACITY_MANAVORE = "manavore";
export const CAPACITY_MANAVORE_STRIKE = "manavore_strike";
export const CAPACITY_MOVE_PLUS_1 = "M+1";
export const CAPACITY_CLIMB = "climb";
export const CAPACITY_MOVE_GRAB = "move_grab";
export const CAPACITY_STRAIGHT_FOUR = "S4";
export const CAPACITY_CHARGE_THREE = "C3+";
export const CAPACITY_PORTAL = "portal";

export type Capacity =
  | typeof CAPACITY_FREE_ATTACK
  | typeof CAPACITY_NO_MOVE
  | typeof CAPACITY_SWITCH
  | typeof CAPACITY_FEED
  | typeof CAPACITY_MANAVORE
  | typeof CAPACITY_MANAVORE_STRIKE
  | typeof CAPACITY_MOVE_PLUS_1
  | typeof CAPACITY_CLIMB
  | typeof CAPACITY_MOVE_GRAB
  | typeof CAPACITY_STRAIGHT_FOUR
  | typeof CAPACITY_CHARGE_THREE
  | typeof CAPACITY_PORTAL
;

export const StartPortal: Unit = {name: "Portal", cost: 0, maxHealth: 10, currentHealth: 10, strikes: 0, strikesType: STRIKE_TYPE_MELEE, capacity: [CAPACITY_PORTAL]};
export const Portal: Unit = {name: "Portal", cost: 0, maxHealth: 5, currentHealth: 5, strikes: 0, strikesType: STRIKE_TYPE_MELEE, capacity: [CAPACITY_PORTAL]};

export const CaveGobelin_BeastRider: Unit = {name: "Beast Rider", cost: 2, maxHealth: 3, currentHealth: 3, strikes: 3, strikesType: STRIKE_TYPE_MELEE, capacity: [CAPACITY_STRAIGHT_FOUR, CAPACITY_CHARGE_THREE]};
export const CaveGobelin_HordeSlinger: Unit = {name: "Horde Slinger", cost: 0, maxHealth: 1, currentHealth: 1, strikes: 2, strikesType: STRIKE_TYPE_RANGED, capacity: [CAPACITY_FREE_ATTACK]};
export const CaveGoblin_Clinger: Unit ={name: "Clinger", cost: 0, maxHealth: 2, currentHealth: 2, strikes: 2, strikesType: STRIKE_TYPE_MELEE, capacity: [CAPACITY_NO_MOVE, CAPACITY_MOVE_GRAB]};
export const CaveGobelin_HordeClimber: Unit = {name: "Horde Climber", cost: 0, maxHealth: 3, currentHealth: 3, strikes: 1, strikesType: STRIKE_TYPE_MELEE, capacity: [CAPACITY_MOVE_PLUS_1, CAPACITY_CLIMB]};
export const CaveGobelin_PileOn: Event = {name: "Pile On", cost: 0, effect: ""};
export const CaveGobelin_Sneak: Event = {name: "Sneak", cost: 0, effect: ""};
export const CaveGobelin_EnrageTheHord: Event = {name: "Enrage The Hord", cost: 1, effect: ""};
export const CaveGobelin_Unrelenting: Event = {name: "Unrelenting", cost: 1, effect: ""}
export const CaveGobelin_Sneeks: Unit = {name: "Sneeks", cost: 0, maxHealth: 11, currentHealth: 11, strikes: 3, strikesType: STRIKE_TYPE_MELEE, capacity: [CAPACITY_SWITCH]};
export const CaveGobelin_TheEater: Unit = {name: "The Eater", cost: 6, maxHealth: 9, currentHealth: 9, strikes: 5, strikesType: STRIKE_TYPE_MELEE, capacity: [CAPACITY_FEED]};
export const CaveGobelin_Smeg: Unit = {name: "Smeg", cost: 0, maxHealth: 4, currentHealth: 4, strikes: 2, strikesType: STRIKE_TYPE_RANGED, capacity: [CAPACITY_FREE_ATTACK, CAPACITY_MANAVORE]};
export const CaveGobelin_Blarf: Unit = {name: "Blarf", cost: 0, maxHealth: 6, currentHealth: 6, strikes: 0, strikesType: STRIKE_TYPE_MELEE, capacity: [CAPACITY_MANAVORE_STRIKE]};
