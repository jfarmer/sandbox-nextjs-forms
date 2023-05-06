import kv from "@vercel/kv";

export default function Page({ params }) {
  async function increment() {
    'use server';

    await kv.incr('count');
  }

  return (
    <form action={increment}>
      <button type="submit">Like</button>
    </form>
  );
}
