export async function getArticlesByLanguage(id) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/learning/language/${id.languageId}/article`, {
    next: { revalidate: 0 }, 
  });

  if (!data.ok) {
    throw new Error('Failed to fetch data');
  }
  return data.json();
}