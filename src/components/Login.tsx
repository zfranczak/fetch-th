import '../styles/login.css';
import dogbones from '../assets/dogbones.jpg';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const response = await fetch(
        'https://frontend-take-home-service.fetch.com/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email }),
          credentials: 'include',
        }
      );

      if (response.ok) {
        console.log('Authentication successful!');
        navigate('/search');
      } else {
        setError('Invalid credentials. Please try again.');
        console.log('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error('An error occurred:', error);
    }
  };
  return (
    <div>
      <Logo />
      <div className='login-container'>
        <img className='login-bg' src={dogbones} alt='Dog Bones'></img>
        <div className='form-content'>
          <form onSubmit={handleSubmit}>
            <h1>Welcome back!</h1>
            <p>Please enter your name and email.</p>
            <label>Name</label>
            <input
              type='text'
              placeholder='Enter Name'
              name='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Email</label>
            <input
              type='text'
              placeholder='Enter Email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type='submit' className='btn login-btn'>
              Login
            </button>
            <label>
              <input type='checkbox' name='remember' /> Remember me
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
