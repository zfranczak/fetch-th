import React from 'react';
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
}

const SearchResults: React.FC<SearchResultsProps> = ({ dogs }) => {
  return (
    <div className='search-results'>
      {dogs.map((dog) => (
        <DogCard key={dog.id} dog={dog} />
      ))}
    </div>
  );
};

export default SearchResults;
