import { useState } from 'react';
import Nav from './Nav';
import '../styles/search.css';
import Breeds from './Breeds';
import { fetchDogData } from '../utils/dogAPIUtil';
import SearchResults from './SearchResults';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Search = () => {
  const [selectedBreed, setSelectedBreed] = useState<string>('');
  const [searchResultData, setSearchResultData] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [nextPage, setNextPage] = useState<number>(0);
  const [ascending, setAscending] = useState<string>('asc');
  const [isAscending, setIsAscending] = useState(true);
  const [breedSortActive, setBreedSortActive] = useState(true);
  const [ageSortActive, setAgeSortActive] = useState(false);
  const [ageMin, setAgeMin] = useState<number>(0);
  const [ageMax, setAgeMax] = useState<number>(15);

  let nextResults = '';

  const breedSort = `&sort=breed:${ascending}`;
  const ageSort = `&sort=age:${ascending}`;

  const handleBreedSortClick = () => {
    setBreedSortActive(true);
    setAgeSortActive(false);
    const newIsAscending = !isAscending;
    setIsAscending(newIsAscending);
    setAscending(newIsAscending ? 'asc' : 'desc');
    handleSearch(selectedBreed, nextResults);
  };

  const handleAgeSortClick = () => {
    setAgeSortActive(true);
    setBreedSortActive(false);
    const newIsAscending = !isAscending;
    setIsAscending(newIsAscending);
    setAscending(newIsAscending ? 'asc' : 'desc');
    handleSearch(selectedBreed, nextResults);
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
    const ageFilters = `&ageMin=${ageMin}&ageMax=${ageMax}`;

    let endpoint = `https://frontend-take-home-service.fetch.com/dogs/search?${nextResults}${ageFilters}`;

    if (breedSortActive) {
      endpoint += `${breedSort}`;
    } else if (ageSortActive) {
      endpoint += `${ageSort}`;
    }

    if (breed) {
      endpoint += `&breeds=${breed}`;
    }
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
          setSearchResultData([]);
        }
      })
      .catch((error) => {
        console.error('Error searching:', error);
        setSearchResultData([]);
      });
  };

  return (
    <div className='container'>
      <Nav />
      <div className='main'>
        <div className='content'>
          <div className='background-image' />
          <div className='search-container'>
            <div className='search-head'>
              <h1 className='head-text'>FIND YOUR PERFECT DOG</h1>
              <h2 className='head-text'>
                Let Doggie Dilema match you with your perfect dog!
              </h2>
              <p className='head-text'>
                All you need to do is search through out database of dogs,
                select your favorites, and then we will generate a match for
                you!
              </p>
            </div>
            <div className='filters'>
              <Breeds handleFilterByBreed={setSelectedBreed} />
              <select
                value={ageMin}
                onChange={(e) => setAgeMin(parseInt(e.target.value))}
              >
                {Array.from({ length: 21 }, (_, i) => (
                  <option key={i} value={i}>
                    Age Minimum: {i}
                  </option>
                ))}
              </select>
              <select
                value={ageMax}
                onChange={(e) => setAgeMax(parseInt(e.target.value))}
              >
                {Array.from({ length: 21 }, (_, i) => (
                  <option key={i} value={i}>
                    Age Maximum: {i}
                  </option>
                ))}
              </select>
            </div>
            <button
              className='search-btn btn'
              onClick={() => handleSearch(selectedBreed, nextResults)}
            >
              Search
            </button>
            <button className='search-btn btn'>
              <Link to='/favorites' className='link-button'>
                Go To My Favorites
              </Link>
            </button>
          </div>
          <div
            className='search-results-container'
            style={{ display: searchResultData.length ? 'block' : 'none' }}
          >
            <h1>Search Results</h1>
            <p>Total number of results: {total}</p>
            <div className='sort'>
              <p>Sort by: </p>
              <button
                className={`asc-desc-btn btn ${
                  breedSortActive ? 'active' : ''
                }`}
                onClick={handleBreedSortClick}
              >
                Breed{' '}
                {breedSortActive ? (
                  isAscending ? (
                    <FaArrowUp />
                  ) : (
                    <FaArrowDown />
                  )
                ) : null}
              </button>
              <button
                className={`asc-desc-btn btn ${ageSortActive ? 'active' : ''}`}
                onClick={handleAgeSortClick}
              >
                Age{' '}
                {ageSortActive ? (
                  isAscending ? (
                    <FaArrowUp />
                  ) : (
                    <FaArrowDown />
                  )
                ) : null}
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

        <div className='foot'>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Search;
