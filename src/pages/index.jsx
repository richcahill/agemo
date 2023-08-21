import Nav from '@/components/Nav';
import Head from 'next/head';

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center gap-4`}>
      <Head>
        <title>Agemo</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Nav />
      <div className='flex-1 p-4 pb-0 w-full h-64 bg-white/5 relative overflow-scroll'>
        <div className='w-full h-full bg-white/5 p-4 rounded-t-3xl'>
          <div className='text-sm uppercase tracking-wide'>SCOPE</div>
        </div>
      </div>
    </main>
  );
}
