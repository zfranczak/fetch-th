/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import Nav from './Nav';
import '../styles/search.css';
import Breeds from './Breeds';
import { fetchDogData } from '../utils/dogAPIUtil';
import SearchResults from './SearchResults';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import React from 'react';

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
  // const [pageNumber, setPageNumber] = useState<number>(1);
  const [isBorderActive, setIsBorderActive] = useState<boolean>(false);

  let nextResults = '';

  const breedSort = `&sort=breed:${ascending}`;
  const ageSort = `&sort=age:${ascending}`;

  const handleBreedSortClick = () => {
    setBreedSortActive(true);
    setAgeSortActive(false);
    const newIsAscending = !isAscending;
    setIsAscending(newIsAscending);
    setAscending(newIsAscending ? 'asc' : 'desc');
    setIsBorderActive(true);
  };

  const handleAgeSortClick = () => {
    setAgeSortActive(true);
    setBreedSortActive(false);
    const newIsAscending = !isAscending;
    setIsAscending(newIsAscending);
    setAscending(newIsAscending ? 'asc' : 'desc');
    setIsBorderActive(true);
  };

  const addNextResults = () => {
    nextResults = `&size=25&from=${nextPage}`;
  };

  const handleNextPageClick = () => {
    setNextPage(nextPage + 25);
    addNextResults();
  };
  const handlePrevPageClick = () => {
    setNextPage(nextPage - 25);
    addNextResults();
  };

  useEffect(() => {
    const ageFilters = `&ageMin=${ageMin}&ageMax=${ageMax}`;
    const addNextResults = `&size=25&from=${nextPage}`;
    let endpoint = `https://frontend-take-home-service.fetch.com/dogs/search?${addNextResults}${ageFilters}`;

    if (breedSortActive) {
      endpoint += `${breedSort}`;
    } else if (ageSortActive) {
      endpoint += `${ageSort}`;
    }

    if (selectedBreed) {
      endpoint += `&breeds=${selectedBreed}`;
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
        if (data && data.resultIds) {
          const resultIds = data.resultIds;
          const total = data.total;
          setTotal(total);
          const fetchedDogData = await fetchDogData(resultIds);
          setSearchResultData(fetchedDogData);
        } else {
          setSearchResultData([]);
        }
      })
      .catch((error) => {
        console.error('Error searching:', error);
        setSearchResultData([]);
      });
  }, [
    selectedBreed,
    nextPage,
    nextResults,
    breedSortActive,
    ageSortActive,
    isAscending,
    ageMin,
    ageMax,
  ]);

  useEffect(() => {
    setNextPage(0);
  }, [selectedBreed]);

  useEffect(() => {
    if (breedSortActive || ageSortActive) {
      setIsBorderActive(true);
    } else {
      setIsBorderActive(false);
    }
  }, [breedSortActive, ageSortActive]);

  return (
    <div className='container'>
      <Nav />
      <div className='main'>
        <div className='content'>
          <div className='background-image' />
          <div className='search-container'>
            <div className='search-head'>
              <h1 className='head-text'>FIND YOUR PERFECT DOG</h1>
              <h2 className='subtext head-text'>
                Let Doggie Dilemma match you with your perfect dog!
              </h2>
              <p className='head-text'>
                Embark on a playful journey through our delightful database of
                dogs, pick your favorites, and watch the magic happen! Head over
                to 'Favorites' and watch the magic unfold. Your ideal furry
                companion awaits! Get ready to fetch your perfect match!
              </p>
            </div>
            <div className='filters'>
              <Breeds handleFilterByBreed={setSelectedBreed} />
              <select
                value={ageMin}
                onChange={(e) => setAgeMin(parseInt(e.target.value))}
                className='dropdown'
              >
                {Array.from({ length: 16 }, (_, i) => (
                  <option key={i} value={i}>
                    Age Minimum: {i}
                  </option>
                ))}
              </select>
              <select
                value={ageMax}
                onChange={(e) => setAgeMax(parseInt(e.target.value))}
                className='dropdown'
              >
                {Array.from({ length: 16 }, (_, i) => (
                  <option key={i} value={i}>
                    Age Maximum: {i}
                  </option>
                ))}
              </select>
            </div>

            <Link to='/favorites' className='link-button'>
              <button className='search-btn'>Go To My Favorites</button>
            </Link>
          </div>
          <div
            className='search-results-container'
            style={{ display: searchResultData.length ? 'block' : 'none' }}
          >
            <h1>SEARCH RESULTS</h1>
            <p>Total number of results: {total}</p>
            <div className='sort'>
              <p>SORT BY: </p>

              <button
                className={`asc-desc-btn btn ${
                  breedSortActive ? 'active' : ''
                }`}
                style={{
                  background:
                    breedSortActive && isBorderActive ? 'green' : 'none',
                }}
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
                style={{
                  background:
                    ageSortActive && isBorderActive ? 'green' : 'none',
                }}
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
            <Pagination
              nextPage={nextPage}
              total={total}
              handlePrevPageClick={handlePrevPageClick}
              handleNextPageClick={handleNextPageClick}
              // pageNumber={pageNumber}
            />
            {searchResultData.length > 0 && (
              <SearchResults
                dogs={searchResultData}
                onAdd={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            )}
            <Pagination
              nextPage={nextPage}
              total={total}
              handlePrevPageClick={handlePrevPageClick}
              handleNextPageClick={handleNextPageClick}
              // pageNumber={pageNumber}
            />
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
