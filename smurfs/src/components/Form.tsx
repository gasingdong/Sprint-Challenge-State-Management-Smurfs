import React, { useState } from 'react';
import { Smurf } from '../store/types';

interface FormProps {
  addResident: (smurf: Smurf) => void;
}

const Form = ({ addResident }: FormProps): React.ReactElement => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    addResident({
      name,
      height,
      age: Number(age),
      id: Date.now(),
    });
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
