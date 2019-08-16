import React from 'react';

const Form = (): React.ReactElement => {
  return (
    <div className="new-resident-form">
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="age" placeholder="Age" />
        <input type="text" name="height" placeholder="Height" />
      </form>
    </div>
  );
};

export default Form;
