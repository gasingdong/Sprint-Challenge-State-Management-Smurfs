import React, { useState } from 'react';
import axios from 'axios';
import { Smurf } from '../store/types';
import { useVillageContext } from '../store/context';
import { fetchSmurfs, successSmurfs, failSmurfs } from '../store/actions';

const Form = (): React.ReactElement => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const dispatch = useVillageContext()[1];

  const addResident = (smurf: Smurf): void => {
    const post = async (): Promise<void> => {
      try {
        const responsePost = await axios.post(
          'http://localhost:3333/smurfs',
          smurf
        );
        console.log('responsePost', responsePost);
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
    console.log('adding resident', smurf);
    post();
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    addResident({
      name,
      height,
      age: Number(age),
      id: Date.now(),
    });
    setName('');
    setAge('');
    setHeight('');
  };

  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
  };

  const ageHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setAge(event.currentTarget.value);
  };

  const heightHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setHeight(event.currentTarget.value);
  };

  return (
    <div className="new-resident-form">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={nameHandler}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={age}
          onChange={ageHandler}
        />
        <input
          type="text"
          name="height"
          placeholder="Height"
          value={height}
          onChange={heightHandler}
        />
        <button type="submit">Add Resident</button>
      </form>
    </div>
  );
};

export default Form;
