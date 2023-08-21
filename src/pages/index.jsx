import Nav from '@/components/Nav';
import Head from 'next/head';

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between`}>
      <Head>
        <title>Agemo</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Nav />
      <div className='flex-1 p-4 w-full'></div>
    </main>
  );
}
