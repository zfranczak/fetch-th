import React from 'react';
import '../styles/dog-card.css';

interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

interface DogCardProps {
  dog: Dog;
}

const DogCard: React.FC<DogCardProps> = ({ dog }) => {
  const { id, img, name, age, zip_code, breed } = dog;

  return (
    <div className='dog-card'>
      <img src={img} alt={name} className='dog-image' />
      <div className='dog-details'>
        <h2>{name}</h2>
        <p>Breed: {breed}</p>
        <p>Age: {age}</p>
        <p>Zip Code: {zip_code}</p>
      </div>
    </div>
  );
};
console.log('dog card created');
export default DogCard;
