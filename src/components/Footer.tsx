import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-section contact-info'>
          <h4>Contact Us</h4>
          <p>Email: zakfranczak@gmail.com</p>
          <p>Phone: +1234567890</p>
          <p>Address: 123 Street, City</p>
        </div>

        <div className='footer-section social-media'>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href='https://facebook.com'>
                <FaGithub />
              </a>
            </li>
            <li>
              <a href='https://twitter.com'>
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href='https://instagram.com'>
                <FaSquareXTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2023 YourWebsite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
