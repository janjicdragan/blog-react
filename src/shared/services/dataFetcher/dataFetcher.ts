export async function fetchData<T>(method: string, url: string): Promise<T> {
  try {
    const options: RequestInit = {
      method: method,
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Failed to fetch data, status: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
