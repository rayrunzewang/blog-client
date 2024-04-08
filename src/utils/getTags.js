export async function getTags() {
  const data = await fetch(`http://localhost:3000/api/tags`);

  if (!data.ok) {
    throw new Error('Failed to fetch data');
  }

  return data.json();
}