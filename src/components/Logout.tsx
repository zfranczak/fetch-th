import { IoLogOutSharp } from 'react-icons/io5';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [logoutMessage, setLogoutMessage] = useState<boolean>(false);
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      const response = await fetch(
        'https://frontend-take-home-service.fetch.com/auth/logout',
        {
          method: 'post',
          credentials: 'include',
        }
      );

      console.log('Response status:', response.status);

      if (response.ok) {
        setLogoutMessage(true);
        setTimeout(() => {
          setLogoutMessage(false);

          navigate('/');
        }, 2000);
      } else {
        throw new Error('Failed to logout');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className='logout'>
      <div className='logout-container link' onClick={logoutUser}>
        <IoLogOutSharp onClick={logoutUser} />
        Logout
      </div>
      {logoutMessage && (
        <p className='success-message'>
          Logout successful! Redirecting to login...
        </p>
      )}
    </div>
  );
};

export default Logout;
