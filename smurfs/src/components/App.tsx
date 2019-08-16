import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { VillageProvider, useVillageContext } from '../store/context';
import VillageResidents from './VillageResidents';
import Form from './Form';
import { Smurf } from '../store/types';
import { fetchSmurfs, successSmurfs, failSmurfs } from '../store/actions';

const App = (): React.ReactElement => {
  return (
    <VillageProvider>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Form />
        <VillageResidents />
      </div>
    </VillageProvider>
  );
};

export default App;
