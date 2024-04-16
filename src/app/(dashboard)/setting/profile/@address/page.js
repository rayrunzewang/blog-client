export default async function Address() {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  return <p>29 S Wharf Promenade, South Wharf VIC 3006</p>;
}
