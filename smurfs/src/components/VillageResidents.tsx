import React, { useEffect } from 'react';
import axios from 'axios';
import Resident from './Resident';
import { useVillageContext } from '../store/context';
import { fetchSmurfs, successSmurfs, failSmurfs } from '../store/actions';

const VillageResidents = (): React.ReactElement => {
  const [state, dispatch] = useVillageContext();
  const { smurfs } = state;

  useEffect((): void => {
    const fetch = async (): Promise<void> => {
      dispatch(fetchSmurfs());
      try {
        const response = await axios.get('http://localhost:3333/smurfs');
        console.log('response', response);
        dispatch(successSmurfs(response.data));
      } catch (error) {
        dispatch(failSmurfs());
      }
    };
    fetch();
  }, [dispatch]);

  return (
    <div className="residents">
      {smurfs.map(
        (smurf): React.ReactElement => (
          <Resident key={smurf.id} resident={smurf} />
        )
      )}
    </div>
  );
};

export default VillageResidents;
