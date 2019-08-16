import { Reducer } from 'react';
import { VillageState, VillageAction } from './types';

const reducer: Reducer<VillageState, VillageAction> = (
  state,
  action
): VillageState => {
  const { payload, type } = action;
  return state;
};

export default reducer;
