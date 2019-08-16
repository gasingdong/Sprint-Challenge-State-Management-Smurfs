import React from 'react';
import { useVillageContext } from '../store/context';
import Resident from './Resident';

const VillageResidents = (): React.ReactElement => {
  const { smurfs } = useVillageContext()[0];
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
