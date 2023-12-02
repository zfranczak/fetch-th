import { fetchDogData } from '../utils/dogAPIUtil';

const testFetchById = async () => {
  const knownId = 'NXGFTIcBOvEgQ5OCx8A1';

  try {
    const fetchedData = await fetchDogData([knownId]);
    console.log('Fetched data:', fetchedData);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

testFetchById();

/* should return
[
    {
        "img": "https://frontend-take-home.fetch.com/dog-images/n02110627-affenpinscher/n02110627_10225.jpg",
        "name": "Yolanda",
        "age": 13,
        "breed": "Affenpinscher",
        "zip_code": "21056",
        "id": "NXGFTIcBOvEgQ5OCx8A1"
    }
]
*/
