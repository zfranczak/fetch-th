import Nav from './Nav';
import '../styles/search.css';
import twodogs from '../assets/twodogs.jpg';
import { IoSearch } from 'react-icons/io5';

const Search = () => {
  return (
    <div className='container'>
      <Nav />
      <img className='login-bg' src={twodogs} alt='Two Dogs'></img>
      <div className='search-container'>
        <IoSearch />
        <input className='search' placeholder='Seach for dogs'></input>
      </div>
    </div>
  );
};

export default Search;
