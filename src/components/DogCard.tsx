// DogCard.tsx
import React from 'react';

interface DogCardProps {
  dog: Dog;
}

const DogCard: React.FC<DogCardProps> = ({ dog }) => {
  const handleAddToDogList = () => {
    const storedDogList = localStorage.getItem('doglist');
    let dogList: Dog[] = [];

    if (storedDogList) {
      dogList = JSON.parse(storedDogList);
    }

    // Add the dog to the dogList array
    dogList.push(dog);

    // Update the stored doglist in localStorage
    localStorage.setItem('doglist', JSON.stringify(dogList));
  };

  return (
    <div className='dog-card'>
      {/* Your dog card UI */}
      <button onClick={handleAddToDogList}>Add to Dog List</button>
    </div>
  );
};

export default DogCard;
