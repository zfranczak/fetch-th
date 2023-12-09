import { useState } from 'react';
import Nav from './Nav';
import '../styles/search.css';
import twodogs from '../assets/twodogs.jpg';
import Breeds from './Breeds';
import { fetchDogData } from '../utils/dogAPIUtil';
import SearchResults from './SearchResults';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import Footer from './Footer';

const Search = () => {
  const [selectedBreed, setSelectedBreed] = useState<string>('');
  const [searchResultData, setSearchResultData] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [nextPage, setNextPage] = useState<number>(0);
  const [ascending, setAscending] = useState<string>('asc');
  const [isAscending, setIsAscending] = useState(true);

  let nextResults = '';

  const breedSort = `&sort=breed:${ascending}`;

  const handleAscDesc = () => {
    if (ascending === 'asc') {
      setAscending('desc');
      setIsAscending(!isAscending);
    } else {
      setAscending('asc');
      setIsAscending(!isAscending);
    }
    handleSearch();
  };

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

  const handleSearch = (breed: string = '', nextResults: string = '') => {
    const endpoint = breed
      ? `https://frontend-take-home-service.fetch.com/dogs/search?breeds=${breed}${nextResults}${breedSort}`
      : `https://frontend-take-home-service.fetch.com/dogs/search?${nextResults}${breedSort}`;

    fetch(endpoint, {
      method: 'GET',
      credentials: 'include',
    })
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
        } else {
          setSearchResultData([]); // No data found, set an empty array
        }
      })
      .catch((error) => {
        console.error('Error searching:', error);
        setSearchResultData([]); // Handle error by setting an empty array
      });
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
          <div className='sort'>
            <p>Sort by: </p>
            <button className='asc-desc-btn btn' onClick={handleAscDesc}>
              Breed {isAscending ? <FaArrowUp /> : <FaArrowDown />}
            </button>
          </div>

          {searchResultData.length > 0 && (
            <SearchResults
              dogs={searchResultData}
              onAdd={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
          )}
          <div className='pag-container'>
            <button className='next25 btn' onClick={handlePrevPageClick}>
              Previous 25
            </button>

            <button className='next25 btn' onClick={handleNextPageClick}>
              Next 25
            </button>
          </div>
        </div>
      </div>

      <img className='search-bg' src={twodogs} alt='Two Dogs' />
      <Footer />
    </div>
  );
};

export default Search;
