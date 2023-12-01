import { PiDogFill } from 'react-icons/pi';

const Logo = () => {
  return (
    <div className='title-text'>
      <i>
        <PiDogFill className='logo-dog' />
      </i>
      <a className='logo-text'>DOGGIE DILEMA</a>
    </div>
  );
};

export default Logo;
