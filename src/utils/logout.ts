export async function logout() {
  try {
    const response = await fetch(
      'https://frontend-take-home-service.fetch.com/auth/logout',
      {
        method: 'post',
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
