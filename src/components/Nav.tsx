import { Link, useLocation } from 'react-router-dom';
import '../styles/nav.css';
import Logout from './Logout';
import { useEffect, useState } from 'react';

const Nav = () => {
  const [currentPage, setCurrentPage] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
    console.log(currentPage);
  }, [location]);

  return (
    <div className='container'>
      <div className='nav-links'>
        <div className='site-title'>
          <Link to='/'>
            <div className='title-text'>DOGGIE DILEMMA</div>
          </Link>
        </div>
        <ul className='nav-locations'>
          <li
            className={`link ${currentPage === '/search' ? 'active-link' : ''}`}
          >
            <Link to='/search'>Search</Link>
          </li>
          <li
            className={`link ${
              currentPage === '/favorites' ? 'active-link' : ''
            }`}
          >
            <Link to='/favorites'>Favorites</Link>
          </li>
          <li>
            <Logout />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
