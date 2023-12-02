import { useEffect, useState, ChangeEvent } from 'react';
import { fetchDogBreeds } from '../utils/fetchBreeds';
import '../styles/breeds.css';

type FilterByBreedFunction = (breed: string) => void;

function Breeds({
  handleFilterByBreed,
}: {
  handleFilterByBreed: FilterByBreedFunction;
}) {
  const [breeds, setBreeds] = useState<string[]>([]);

  useEffect(() => {
    async function getBreeds() {
      try {
        const breedNames = await fetchDogBreeds();
        setBreeds(breedNames);
      } catch (error) {
        console.error('Error fetching breed names:', error);
      }
    }

    getBreeds();
  }, []);

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    handleFilterByBreed(selectedValue);
  };

  return (
    <div className='breeds-container'>
      <div className='breeds'>
        <select className='breeds-dropdown' onChange={handleSelectChange}>
          <option value=''>Breeds</option>
          {breeds && breeds.length > 0 ? (
            breeds.map((breed, index) => (
              <option key={index} value={breed}>
                {breed}
              </option>
            ))
          ) : (
            <option value='' disabled>
              No breeds available
            </option>
          )}
        </select>
      </div>
    </div>
  );
}

export default Breeds;
