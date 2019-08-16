import React from 'react';
import axios from 'axios';
import { Smurf } from '../store/types';
import { fetchSmurfs, successSmurfs, failSmurfs } from '../store/actions';
import { useVillageContext } from '../store/context';

interface ResidentProps {
  resident: Smurf;
}

const Resident = ({ resident }: ResidentProps): React.ReactElement => {
  const dispatch = useVillageContext()[1];

  const deleteResident = (): void => {
    const deleteSmurf = async (): Promise<void> => {
      try {
        const responseDelete = await axios.delete(
          `http://localhost:3333/smurfs/${resident.id}`
        );
        console.log('responseDelete', responseDelete);
        dispatch(fetchSmurfs());
        try {
          const response = await axios.get('http://localhost:3333/smurfs');
          console.log('response', response);
          dispatch(successSmurfs(response.data));
        } catch (error) {
          dispatch(failSmurfs());
        }
      } catch (error) {
        console.log(error);
      }
    };
    console.log('deleting resident', resident);
    deleteSmurf();
  };

  const expel = (): void => {
    deleteResident();
  };

  return (
    <div className="residents__resident">
      <h1>{resident.name}</h1>
      <h2>
        {resident.age} - {resident.height}
      </h2>
      <button type="button" onClick={expel}>
        Expel Resident
      </button>
    </div>
  );
};

export default Resident;
