import React, { useState, useEffect } from 'react';
import '../styles/dog-card.css';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

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
  onAdd?: (dog: Dog) => void; // Function to handle adding a dog
  onRemove?: (id: string) => void; // Function to handle removing a dog
}

const DogCard: React.FC<DogCardProps> = ({ dog, onAdd, onRemove }) => {
  const { id, img, name, age, zip_code, breed } = dog;
  const [isAddedToList, setIsAddedToList] = useState<boolean>(false);

  const isDogInList = (): boolean => {
    const storedDogList = localStorage.getItem('doglist');
    if (storedDogList) {
      let dogList: Dog[] = JSON.parse(storedDogList);
      return dogList.some((storedDog) => storedDog.id === id);
    }
    return false;
  };

  const handleAddToDogList = () => {
    const storedDogList = localStorage.getItem('doglist');
    let dogList: Dog[] = storedDogList ? JSON.parse(storedDogList) : [];

    dogList.push(dog);
    localStorage.setItem('doglist', JSON.stringify(dogList));

    if (onAdd) {
      onAdd(dog); // Notify parent component of the addition
    }
  };

  const handleRemoveFromDogList = () => {
    const storedDogList = localStorage.getItem('doglist');
    let dogList: Dog[] = storedDogList ? JSON.parse(storedDogList) : [];

    dogList = dogList.filter((storedDog) => storedDog.id !== id);
    localStorage.setItem('doglist', JSON.stringify(dogList));

    if (onRemove) {
      onRemove(id); // Notify parent component of the removal
    }
  };

  const handleClick = () => {
    if (isAddedToList) {
      handleRemoveFromDogList();
    } else {
      handleAddToDogList();
    }
    setIsAddedToList(!isAddedToList);
  };

  useEffect(() => {
    setIsAddedToList(isDogInList());
  }, []);

  return (
    <div className='dog-card'>
      <img src={img} alt={name} className='dog-image' />
      <div className='dog-details'>
        <h2>{name}</h2>
        <p>Breed: {breed}</p>
        <p>Age: {age}</p>
        <p>Zip Code: {zip_code}</p>
        <button className='heart' onClick={handleClick}>
          {isAddedToList ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
};

export default DogCard;
