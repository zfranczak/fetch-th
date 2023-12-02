interface DogData {
  img: string;
  name: string;
  age: number;
  breed: string;
  zip_code: string;
  id: string;
}

export const fetchDogData = async (resultIds: string[]): Promise<DogData[]> => {
  try {
    const response = await fetch(
      `https://frontend-take-home-service.fetch.com/dogs`,
      {
        method: 'POST',
        body: JSON.stringify(resultIds),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }
    );

    if (!response.ok) {
      throw new Error(
        `Fetch request failed: ${response.status} - ${response.statusText}`
      );
    }

    const data: DogData[] = await response.json();
    console.log('Fetched dog data:', data);
    return data;
  } catch (error) {
    console.error('Error fetching dog data:', error);
    return [];
  }
};
