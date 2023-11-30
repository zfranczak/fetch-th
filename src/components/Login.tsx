import '../styles/login.css';
import dogbones from '../assets/dogbones.jpg';
import Logo from './Logo';

function Login() {
  return (
    <div>
      <Logo />
      <div className='login-container'>
        <img className='login-bg' src={dogbones} alt='Dog Bones'></img>
        <div className='form-content'>
          <form>
            <label>Name</label>
            <input type='text' placeholder='Enter Name' name='name' required />

            <label>Email</label>
            <input
              type='text'
              placeholder='Enter Email'
              name='email'
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
