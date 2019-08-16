import React from 'react';
import './App.css';
import { VillageProvider } from '../store/context';

const App = (): React.ReactElement => {
  return (
    <VillageProvider>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    </VillageProvider>
  );
};

export default App;
