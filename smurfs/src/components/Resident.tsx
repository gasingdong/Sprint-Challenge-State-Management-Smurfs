import React from 'react';
import { Smurf } from '../store/types';

interface ResidentProps {
  resident: Smurf;
}

const Resident = ({ resident }: ResidentProps): React.ReactElement => {
  return (
    <div className="residents__resident">
      <h1>{resident.name}</h1>
    </div>
  );
};

export default Resident;
