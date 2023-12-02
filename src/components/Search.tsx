import { useState } from 'react';
import Nav from './Nav';
import '../styles/search.css';
import twodogs from '../assets/twodogs.jpg';
import Breeds from './Breeds';
import { fetchDogData } from '../utils/dogAPIUtil';
import SearchResults from './SearchResults';

const Search = () => {
  const [selectedBreed, setSelectedBreed] = useState('');
  const [searchResultData, setSearchResultData] = useState<any[]>([]);

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
        .then(async (data) => {
          console.log('Search response data:', data);

          if (data && data.resultIds) {
            const resultIds = data.resultIds;
            console.log('Result IDs: ', resultIds);
            const fetchedDogData = await fetchDogData(resultIds);
            console.log('Fetched dog data:', fetchedDogData);
            setSearchResultData(fetchedDogData);
          } else {
            setSearchResultData([]); // No data found, set an empty array
          }
        })
        .catch((error) => {
          console.error('Error searching:', error);
          setSearchResultData([]); // Handle error by setting an empty array
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
        <div className='search-results-container'>
          <h1>Search Results</h1>
          {searchResultData.length > 0 && (
            <SearchResults dogs={searchResultData} />
          )}
        </div>
      </div>

      <img className='search-bg' src={twodogs} alt='Two Dogs' />
    </div>
  );
};

export default Search;
