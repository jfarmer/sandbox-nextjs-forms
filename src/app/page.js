import Image from 'next/image'
import styles from './page.module.css'

export default function Page({ params }) {
  async function increment() {
    'use server';
    return 0;
  }

  return (
    <form action={increment}>
      {count}
      <button type="submit">Like</button>
    </form>
  );
}
