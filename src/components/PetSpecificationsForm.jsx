import React, { useState } from 'react';


function PetSpecificationsForm() {
  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [colors, setColors] = useState('');

  const [userPets, setUserPets] = useState([]);

  const handleAddPet = (newPet) => {
    setUserPets([...userPets, newPet]);
    setName('');
    setBreed('');
    setColors('');
  };

  return (
    <div>
      <h2>Add Pet Specification</h2>
      <form>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Breed:</label>
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </div>
        <div>
          <label>Colors:</label>
          <input
            type="text"
            value={colors}
            onChange={(e) => setColors(e.target.value)}
          />
        </div>
        <button onClick={() => handleAddPet({ name, breed, colors })}>Add Pet</button>
      </form>
      <h3>My Pets:</h3>
      <ul>
        {userPets.map((pet, index) => (
          <li key={index}>
            Name: {pet.name}, Breed: {pet.breed}, Colors: {pet.colors}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PetSpecificationsForm;
