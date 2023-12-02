export async function fetchDogBreeds() {
  try {
    const response = await fetch(
      'https://frontend-take-home-service.fetch.com/dogs/breeds',
      {
        method: 'GET',
        credentials: 'include',
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch breed names');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching breed names:', error);
    return [];
  }
}
