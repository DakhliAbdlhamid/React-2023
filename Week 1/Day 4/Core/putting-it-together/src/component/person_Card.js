import React, { useState } from 'react';

const PersonCard = ({ firstName, lastName, age, hairColor }) => {
  const [personAge, setPersonAge] = useState(age);

  const increaseAge = () => {
    setPersonAge(prevAge => prevAge + 1);
  };

  return (
    <div className="person-card">
      <h2>{lastName} {firstName}</h2>
      <p>Age: {personAge}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
};

export default PersonCard;
