import React from 'react';
import Resident from './Resident';
import { Smurf } from '../store/types';

interface VillageResidentsProps {
  residents: Smurf[];
  deleteResident: (id: number) => void;
}

const VillageResidents = ({
  residents,
  deleteResident,
}: VillageResidentsProps): React.ReactElement => {
  return (
    <div className="residents">
      {residents.map(
        (smurf): React.ReactElement => (
          <React.Fragment key={smurf.id}>
            <Resident resident={smurf} />
            <button
              type="button"
              onClick={(): void => deleteResident(smurf.id)}
            >
              Expel Resident
            </button>
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default VillageResidents;
