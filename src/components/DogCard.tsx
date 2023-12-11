import React, { useState, useEffect } from 'react';
import '../styles/dog-card.css';
import { FaRegHeart, FaHeart, FaDog, FaBirthdayCake } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';

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
  const [showAddedMessage, setShowAddedMessage] = useState<boolean>(false);

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

    setIsAddedToList(true);
    setShowAddedMessage(true);

    // Hide the added message after 1 second
    setTimeout(() => {
      setShowAddedMessage(false);
    }, 1000);
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
    <div
      className={`dog-card ${isAddedToList ? 'selected' : 'unselected'}`}
      onClick={handleClick}
    >
      <img src={img} alt={name} className='dog-image' />
      <div className='dog-fav'>
        <button className='dog-info heart' onClick={handleClick}>
          {isAddedToList ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      <div className='dog-details'>
        <p className={`popup-added ${showAddedMessage ? 'active' : ''}`}>
          Added to favorites!
        </p>
        <h2 className='dog-name'>{name}</h2>

        <div className='dog-stats'>
          <p className='dog-info breed-box'>
            <FaDog className='breed-icon icon' />
            {breed}
          </p>

          <p className='dog-info age-box'>
            <FaBirthdayCake className='age-icon icon' />
            {age} years
          </p>
          <p className='dog-info zip-box'>
            <FaMapLocationDot className='location-icon icon' />
            {zip_code}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DogCard;
