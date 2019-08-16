import React from 'react';
import './App.css';
import axios from 'axios';
import { VillageProvider, useVillageContext } from '../store/context';
import VillageResidents from './VillageResidents';
import Form from './Form';
import { Smurf } from '../store/types';
import { fetchSmurfs, successSmurfs, failSmurfs } from '../store/actions';

const App = (): React.ReactElement => {
  const [state, dispatch] = useVillageContext();

  const addResident = (smurf: Smurf): void => {
    const post = async (): Promise<void> => {
      try {
        const responsePost = await axios.post(
          'http://localhost:3333/smurfs',
          smurf
        );
        console.log('responsePost', responsePost);
      } catch (error) {
        console.log(error);
      }
    };
    console.log('adding resident', smurf);
    post();
  };

  return (
    <VillageProvider>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Form addResident={addResident} />
        <VillageResidents />
      </div>
    </VillageProvider>
  );
};

export default App;
