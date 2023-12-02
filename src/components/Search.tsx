import { useState } from 'react';
import Nav from './Nav';
import '../styles/search.css';
import twodogs from '../assets/twodogs.jpg';
import Breeds from './Breeds';

const Search = () => {
  const [selectedBreed, setSelectedBreed] = useState('');

  const handleSearch = (breed: string) => {
    if (breed) {
      fetch(
        `https://frontend-take-home-service.fetch.com/dogs/search?breeds=${breed}`,
        {
          method: 'GET',
          credentials: 'include',
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          return response.json();
        })
        .then((data) => {
          console.log('Search response data:', data);
        })
        .catch((error) => {
          console.error('Error searching:', error);
        });
    } else {
      console.log('Please select a breed');
    }
  };

  return (
    <div className='container'>
      <Nav />

      <div className='search-container'>
        <div className='search-head'>
          <h1>Find Your Perfect Dog</h1>
          <h2>Select from the filters below...</h2>
        </div>
        <div className='filters'>
          <Breeds handleFilterByBreed={setSelectedBreed} />
        </div>
        <button
          className='search-btn'
          onClick={() => handleSearch(selectedBreed)}
        >
          Search
        </button>
      </div>

      <img className='search-bg' src={twodogs} alt='Two Dogs' />
    </div>
  );
};

export default Search;
