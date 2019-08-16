export interface Smurf {
  name: string;
  age: number;
  height: string;
  id: number;
}

export interface VillageState {
  smurfs: Smurf[];
}

export interface VillageAction {
  type: string;
  payload?: {};
}
