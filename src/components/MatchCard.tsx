import '../styles/match-card.css';

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
          <h2>{name}</h2>
          <p>Breed: {breed}</p>
          <p>Age: {age}</p>
          <p>Zip Code: {zip_code}</p>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
