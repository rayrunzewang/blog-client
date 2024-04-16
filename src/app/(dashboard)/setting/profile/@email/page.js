export default async function Email() {
  await new Promise((resolve) => setTimeout(resolve, 12000));
  return <p>google@gmail.com</p>;
}
