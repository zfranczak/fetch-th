import React, { useEffect, useState } from 'react';
import DogCard from './DogCard';
import '../styles/search-results.css';

interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

interface SearchResultsProps {
  dogs: Dog[];
  onAdd: (dog: Dog) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ dogs }) => {
  const [dogList, setDogList] = useState<Dog[]>([]);

  useEffect(() => {
    const storedDogList = localStorage.getItem('doglist');
    if (storedDogList) {
      setDogList(JSON.parse(storedDogList) as Dog[]); // Parsing as Dog[]
    }
  }, []);

  const removeFromDogList = (id: string) => {
    const updatedDogList = dogList.filter((dog) => dog.id !== id);
    setDogList(updatedDogList);
    localStorage.setItem('doglist', JSON.stringify(updatedDogList));
  };

  const addToDogList = (dog: Dog) => {
    const updatedDogList = [...dogList, dog];
    setDogList(updatedDogList);
    localStorage.setItem('doglist', JSON.stringify(updatedDogList));
  };
  return (
    <div className='search-results'>
      {dogs.map((dog) => (
        <DogCard
          key={dog.id}
          dog={dog}
          onRemove={removeFromDogList}
          onAdd={addToDogList}
        />
      ))}
    </div>
  );
};

export default SearchResults;
