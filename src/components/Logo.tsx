import { PiDogFill } from 'react-icons/pi';

const Logo = () => {
  return (
    <a className='title-text'>
      <i>
        <PiDogFill className='logo-dog' />
      </i>
      <a className='logo-text'>DOGGIE DILEMA</a>
    </a>
  );
};

export default Logo;
