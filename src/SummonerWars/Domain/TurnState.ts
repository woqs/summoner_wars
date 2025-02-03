export class TurnState {
  private currentTurnStateIndex;
  private playersNames;
  private currentPlayerName;

  constructor(playersNames: Array<string>, startingPlayerName: string) {
    this.currentTurnStateIndex = 0;
    this.playersNames = playersNames;
    this.currentPlayerName = startingPlayerName;
  }

  next(): TurnState {
    this.currentTurnStateIndex += 1;
    if (this.currentTurnStateIndex > TURNS.length - 1) {
      this.currentPlayerName = this.playersNames.filter((playerName) => playerName !== this.currentPlayerName)[0];
      this.currentTurnStateIndex = 0;
    }
    return this;
  }

  getCurrentState(): TURN_STATE {
    return TURNS[this.currentTurnStateIndex];
  }

  getCurrentPlayerName(): string {
    return this.currentPlayerName;
  }
}

export type TurnStateTracker = {
  currentPlayerName: string,
  currentTurnState: TURN_STATE,
};

export const TURN_STATE_START_STEP = "Start";
export const TURN_STATE_INVOKE = "Invoke";
export const TURN_STATE_MOVE = "Move";
export const TURN_STATE_CONSTRUCT = "Construct";
export const TURN_STATE_ATTACK = "Attack";
export const TURN_STATE_MAGIC = "Magic";
export const TURN_STATE_END_STEP = "Draw";

const TURNS: Array<TURN_STATE> = [
  TURN_STATE_START_STEP,
  TURN_STATE_INVOKE,
  TURN_STATE_MOVE,
  TURN_STATE_CONSTRUCT,
  TURN_STATE_ATTACK,
  TURN_STATE_MAGIC,
  TURN_STATE_END_STEP,
];

export type TURN_STATE =
  | typeof TURN_STATE_START_STEP
  | typeof TURN_STATE_INVOKE
  | typeof TURN_STATE_MOVE
  | typeof TURN_STATE_CONSTRUCT
  | typeof TURN_STATE_ATTACK
  | typeof TURN_STATE_MAGIC
  | typeof TURN_STATE_END_STEP
;
