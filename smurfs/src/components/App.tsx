import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { useVillageContext } from '../store/context';
import VillageResidents from './VillageResidents';
import Form from './Form';
import { Smurf } from '../store/types';
import { fetchSmurfs, successSmurfs, failSmurfs } from '../store/actions';

const App = (): React.ReactElement => {
  const [state, dispatch] = useVillageContext();
  const { smurfs } = state;

  const updateVillage = async (): Promise<void> => {
    dispatch(fetchSmurfs());
    try {
      const response = await axios.get('http://localhost:3333/smurfs');
      dispatch(successSmurfs(response.data));
    } catch (error) {
      dispatch(failSmurfs());
    }
  };

  const addResident = (smurf: Smurf): void => {
    const post = async (): Promise<void> => {
      try {
        await axios.post('http://localhost:3333/smurfs', smurf);
        updateVillage();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    post();
  };

  const deleteResident = (id: number): void => {
    const deleteSmurf = async (): Promise<void> => {
      try {
        await axios.delete(`http://localhost:3333/smurfs/${id}`);
        updateVillage();
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };
    deleteSmurf();
  };

  useEffect((): void => {
    const getVillage = async (): Promise<void> => {
      dispatch(fetchSmurfs());
      try {
        const response = await axios.get('http://localhost:3333/smurfs');
        dispatch(successSmurfs(response.data));
      } catch (error) {
        dispatch(failSmurfs());
      }
    };
    getVillage();
  }, [dispatch]);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <Form addResident={addResident} />
      <VillageResidents residents={smurfs} deleteResident={deleteResident} />
    </div>
  );
};

export default App;
