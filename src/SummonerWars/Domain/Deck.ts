import { Card, CaveGobelin_BeastRider, CaveGobelin_Blarf, CaveGobelin_EnrageTheHord, CaveGobelin_HordeClimber, CaveGobelin_HordeSlinger, CaveGobelin_PileOn, CaveGobelin_Smeg, CaveGobelin_Sneak, CaveGobelin_TheEater, CaveGobelin_Unrelenting, CaveGoblin_Clinger, Portal } from "./Card"

export class Deck {
  cards: Card[];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  shuffle(): Deck {
    for (let i = this.cards.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; 
    }
    return this;
  }

  draw(): Card | undefined {
    return this.cards.shift();
  }
}

export const Deck_CaveGoblins = new Deck([
  CaveGobelin_TheEater,
  CaveGobelin_Smeg,
  CaveGobelin_Blarf,
  CaveGobelin_HordeClimber,
  CaveGobelin_HordeClimber,
  CaveGobelin_HordeClimber,
  CaveGobelin_HordeClimber,
  CaveGoblin_Clinger,
  CaveGoblin_Clinger,
  CaveGoblin_Clinger,
  CaveGoblin_Clinger,
  CaveGobelin_HordeSlinger,
  CaveGobelin_HordeSlinger,
  CaveGobelin_HordeSlinger,
  CaveGobelin_BeastRider,
  CaveGobelin_BeastRider,
  CaveGobelin_BeastRider,
  CaveGobelin_PileOn,
  CaveGobelin_PileOn,
  CaveGobelin_Sneak,
  CaveGobelin_Sneak,
  CaveGobelin_EnrageTheHord,
  CaveGobelin_EnrageTheHord,
  CaveGobelin_Unrelenting,
  CaveGobelin_Unrelenting,
  Portal,
  Portal,
  Portal,
]);
