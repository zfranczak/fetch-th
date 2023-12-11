import { IoLogOutSharp } from 'react-icons/io5';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState<boolean>(false);
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
        setIsLoggedOut(true);
        setLogoutMessage(true);
        setTimeout(() => {
          setLogoutMessage(false);
          // Redirect to login after logout
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
