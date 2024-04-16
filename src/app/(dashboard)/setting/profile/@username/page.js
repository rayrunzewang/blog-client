export default async function Username() {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return <p>user1</p>;
}
