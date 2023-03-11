import React, { useState } from 'react';

function ThirdTask() {
  const [name, setName] = useState('Amit');

  const handleClick = () => {
    setName(name === 'Amit' ? 'Rajan' : 'Himanshu');
  };

  return (
    <div>
      <h1>My name is, {name}!</h1>
      <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default ThirdTask;
