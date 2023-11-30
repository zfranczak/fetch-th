import '../styles/login.css';
import dogbones from '../assets/dogbones.jpg';
import Logo from './Logo';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const handleLogin = async (name: string, email: string) => {
    try {
      const response = await fetch(
        'https://frontend-take-home-service.fetch.com/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email }),
        }
      );

      if (response.ok) {
        const authData = await response.json();
        const { fetchAccessToken } = authData;

        // Store the token securely in local storage
        localStorage.setItem('fetchAccessToken', fetchAccessToken);
        console.log('Authentication successful!');
        history.push('/search');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await handleLogin(name, email);
    } catch (error) {
      console.error('Login failed:', error);
      setError('An error occurred. Please try again.');
    }
  };
  return (
    <div>
      <Logo />
      <div className='login-container'>
        <img className='login-bg' src={dogbones} alt='Dog Bones'></img>
        <div className='form-content'>
          <form>
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
