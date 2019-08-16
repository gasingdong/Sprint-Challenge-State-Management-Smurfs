import React from 'react';
import './App.css';
import { VillageProvider } from '../store/context';
import VillageResidents from './VillageResidents';
import Form from './Form';

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
