import Image from 'next/image';
export default function home() {
  return (
    <div>
      <h1>Welcome to Indian Bazaar Guy</h1>
      <p>Your one-stop shop for all your needs!</p>
      <p>Explore our wide range of products and enjoy a seamless shopping experience.</p>
      <Image src="/images/1.png" alt="" width={100} height={100} />
    </div>
  );
}