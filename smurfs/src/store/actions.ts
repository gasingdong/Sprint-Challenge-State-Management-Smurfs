import {
  FETCH_SMURFS_START,
  VillageAction,
  FETCH_SMURFS_SUCCESS,
  Smurf,
  FETCH_SMURFS_FAIL,
} from './types';

export const fetchSmurfs = (): VillageAction => ({ type: FETCH_SMURFS_START });

export const successSmurfs = (smurfs: Smurf[]): VillageAction => ({
  type: FETCH_SMURFS_SUCCESS,
  payload: {
    smurfs,
  },
});

export const failSmurfs = (): VillageAction => ({ type: FETCH_SMURFS_FAIL });
