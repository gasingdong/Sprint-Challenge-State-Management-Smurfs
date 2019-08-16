import { Reducer } from 'react';
import {
  VillageState,
  VillageAction,
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,
} from './types';

const reducer: Reducer<VillageState, VillageAction> = (
  state,
  action
): VillageState => {
  const { payload, type } = action;
  switch (type) {
    case FETCH_SMURFS_START:
      return { ...state, status: FETCH_SMURFS_START };
    case FETCH_SMURFS_SUCCESS:
      if (payload) {
        return {
          ...state,
          status: FETCH_SMURFS_SUCCESS,
          smurfs: payload.smurfs,
        };
      }
      return {
        ...state,
        status: FETCH_SMURFS_FAIL,
        smurfs: [],
      };
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        status: FETCH_SMURFS_FAIL,
        smurfs: [],
      };
    default:
      return state;
  }
};

export default reducer;
