import { useState } from 'react';
import Nav from './Nav';
import '../styles/search.css';
import twodogs from '../assets/twodogs.jpg';
import Breeds from './Breeds';
import { fetchDogData } from '../utils/dogAPIUtil';
import SearchResults from './SearchResults';

const Search = () => {
  const [selectedBreed, setSelectedBreed] = useState<string>('');
  const [searchResultData, setSearchResultData] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [nextPage, setNextPage] = useState<number>(0);
  const [isPrevVisible, setIsPrevVisible] = useState(false);
  const [isNextVisible, setIsNextVisible] = useState(false);

  let nextResults = '';

  const addNextResults = () => {
    nextResults = `&size=25&from=${nextPage}`;
  };

  const handleNextPageClick = () => {
    setNextPage(nextPage + 25);

    addNextResults();
    handleSearch(selectedBreed, nextResults);
    console.log(nextPage);
  };
  const handlePrevPageClick = () => {
    setNextPage(nextPage - 25);

    addNextResults();
    handleSearch(selectedBreed, nextResults);

    console.log(nextPage);
  };

  const handleSearch = (breed: string, nextResults: string) => {
    if (breed) {
      fetch(
        `https://frontend-take-home-service.fetch.com/dogs/search?breeds=${breed}${nextResults}`,
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
            const total = data.total;
            console.log('Total Number of Results', total);
            setTotal(total);
            console.log('Result IDs: ', resultIds);
            const fetchedDogData = await fetchDogData(resultIds);
            console.log('Fetched dog data:', fetchedDogData);
            setSearchResultData(fetchedDogData);
            if (total > 0) {
              setIsPrevVisible(nextPage >= 25);
              setIsNextVisible(total > nextPage + 25);
            } else {
              setIsPrevVisible(false);
              setIsNextVisible(false);
            }
          } else {
            setSearchResultData([]); // No data found, set an empty array
            setIsPrevVisible(false);
            setIsNextVisible(false);
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
          onClick={() => handleSearch(selectedBreed, nextResults)}
        >
          Search
        </button>
        <div className='search-results-container'>
          <h1>Search Results</h1>
          <p>Total number of results: {total}</p>
          <div className='pag-container'>
            <p
              className={`next25 ${isPrevVisible ? 'visible' : ''}`}
              onClick={handlePrevPageClick}
            >
              Previous 25
            </p>
            <p
              className={`next25 ${isNextVisible ? 'visible' : ''}`}
              onClick={handleNextPageClick}
            >
              Next 25
            </p>
          </div>
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
