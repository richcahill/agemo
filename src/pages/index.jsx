import Head from 'next/head';
import Link from 'next/link';
import Logo from '@/components/icons/Logo';
import DotBackground from '@/components/DotBackground';

export default function Home() {
  return (
    <main className='flex h-screen flex-col items-center gap-4'>
      <Head>
        <title>Agemo</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <DotBackground />
      <div>
        <div className=' mt-4 py-2 px-4 rounded-full flex items-center  gap-3 bg-black/5 dark:bg-white/10'>
          <Logo color='#fff' className='h-7 w-7 fill-black dark:fill-white' />
          <div className='font-bold tracking-wider text-xl'>AGEMO</div>
        </div>
      </div>
      <div className='p-8 text-9xl font-medium container flex flex-col gap-2 tracking-tight'>
        <div className=''>Real Software</div>
        <div className='self-end'>Generated.</div>
      </div>
      <Link href='/gem/932oifjd8'>
        <div className='text-3xl rounded-full bg-black dark:bg-white px-8 pb-3 pt-2 text-white dark:text-black  opacity-90 hover:opacity-100 transition-opacity cursor-pointer mt-8'>
          create your first gem
        </div>
      </Link>
      <img src='/images/homeBackground.svg' className='w-full fixed bottom-0' />
      <img src='/images/layers.svg' className=' fixed bottom-0' />
    </main>
  );
}
