import '../styles/match-card.css';
import { FaDog, FaBirthdayCake } from 'react-icons/fa';
import { FaMapLocationDot } from 'react-icons/fa6';

interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

interface MatchCardProps {
  dog: Dog;
}

const MatchCard: React.FC<MatchCardProps> = ({ dog }) => {
  const { id, img, name, age, zip_code, breed } = dog;
  console.log(id);
  return (
    <div className='match-card'>
      <h1>Your Perfect Match!</h1>
      <div className='match-container'>
        <img src={img} alt={name} className='match-image' />
        <div className='match-details'>
          <h2 className='match-name'>{name}</h2>
          <div className='match-stats'>
            <p className='match-info'>
              <FaDog className='breed-icon icon' />
              {breed}
            </p>
            <p className='match-info'>
              <FaBirthdayCake className='age-icon icon' />
              {age} years
            </p>
            <p className='match-info'>
              <FaMapLocationDot className='location-icon icon' />
              {zip_code}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
