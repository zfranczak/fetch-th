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
              <a href='https://github.com/zfranczak' target='_blank'>
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/zachary-franczak/'
                target='_blank'
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href='https://twitter.com/zakfranczak' target='_blank'>
                <FaSquareXTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2023 Doggie Dilemma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
