export async function getLanguages() {
  const data = await fetch(`${process.env.API_BASE_URL}/learning/language`, {
    headers: {
      'Cache-Control': 'no-cache' 
  }
});

  if (!data.ok) {
    throw new Error('Failed to fetch data');
  }

  return data.json();
}