export async function getArticle(id) {
  const data = await fetch(`https://learning-hub-study-note-taking-api.onrender.com/learning/article/${id}`, {
    headers: {
      'Cache-Control': 'no-cache' 
  }
});

  // if (!data.ok) {
  //   throw new Error('Failed to fetch data');
  // }

  return data.json();
}