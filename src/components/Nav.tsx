import { Link } from 'react-router-dom';
import '../styles/nav.css';

const Nav = () => {
  return (
    <div className='container'>
      <div className='nav-links'>
        <div className='site-title'>
          <Link to='/'>
            <div className='title-text'>DOGGIE DILEMA</div>
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
