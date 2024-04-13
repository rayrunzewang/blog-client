export async function getLanguages() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/learning/language`, {
    next: { revalidate: 10 }, 
  });

  if (!data.ok) {
    throw new Error('Failed to fetch data');
  }

  return data.json();
}