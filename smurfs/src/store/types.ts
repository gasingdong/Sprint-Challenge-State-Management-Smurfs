export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';
export const ADD_SMURF = 'ADD_SMURF';

export type FetchStatus =
  | typeof FETCH_SMURFS_START
  | typeof FETCH_SMURFS_SUCCESS
  | typeof FETCH_SMURFS_FAIL;

export interface Smurf {
  name: string;
  age: number;
  height: string;
  id: number;
}

export interface VillageState {
  smurfs: Smurf[];
  status: FetchStatus;
}

export interface VillageAction {
  type: string;
  payload?: {
    smurfs: Smurf[];
  };
}
