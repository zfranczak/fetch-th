import { useEffect, useState } from 'react';
import DogCard from './DogCard';
import Nav from './Nav';

interface Dog {
  id: string;
  img: string;
  name: string;
  age: number;
  zip_code: string;
  breed: string;
}

const Favorites = () => {
  const [dogList, setDogList] = useState<Dog[]>([]);

  useEffect(() => {
    const storedDogList = localStorage.getItem('doglist');
    if (storedDogList) {
      setDogList(JSON.parse(storedDogList) as Dog[]);
    }
  }, []);

  const removeFromDogList = (id: string) => {
    const updatedDogList = dogList.filter((dog) => dog.id !== id);
    setDogList(updatedDogList);
    localStorage.setItem('doglist', JSON.stringify(updatedDogList));
  };

  return (
    <div>
      <Nav />
      <div className='favorites-container'>
        <h1>Favorites</h1>
        {dogList.map((dog) => (
          <DogCard key={dog.id} dog={dog} onRemove={removeFromDogList} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
