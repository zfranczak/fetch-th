import { Link } from 'react-router-dom';
import '../styles/nav.css';
import { PiDogFill } from 'react-icons/pi';

const Nav = () => {
  return (
    <div className='container'>
      <div className='nav-links'>
        <div className='site-title'>
          <Link to='/'>
            <a className='title-text'>
              <i>
                <PiDogFill className='logo-dog' />
              </i>
              <a className='logo-text'>DOGGIE DILEMA</a>
            </a>
          </Link>
        </div>
        <ul className='nav-locations'>
          <li className='link'>
            <Link to='/search'>Search</Link>
          </li>
          <li className='link'>
            <Link to='/favorites'>Favorites</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
