import React, { Dispatch, useReducer, createContext, useContext } from 'react';
import { VillageState, VillageAction, FETCH_SMURFS_SUCCESS } from './types';
import reducer from './reducer';

const initialState: VillageState = {
  smurfs: [],
  status: FETCH_SMURFS_SUCCESS,
};

export const VillageContext: React.Context<
  [VillageState, Dispatch<VillageAction>]
> = createContext<[VillageState, Dispatch<VillageAction>]>([
  initialState,
  (): void => {},
]);

interface VillageProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

export const VillageProvider = ({
  children,
}: VillageProviderProps): React.ReactElement => (
  <VillageContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </VillageContext.Provider>
);

export const useVillageContext = (): [VillageState, Dispatch<VillageAction>] =>
  useContext(VillageContext);
