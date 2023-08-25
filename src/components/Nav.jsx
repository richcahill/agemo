// Nav component
import Logo from '@/components/icons/Logo';
import Menu from '@/components/icons/Menu';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className='w-full flex justify-center p-2 gap-2 items-stretch'>
      <Link href='/'>
        <div className='bg-black/5 dark:bg-white/10 flex justify-center items-center rounded-full h-10 w-10 cursor-pointer'>
          <Logo color='#fff' className='h-5 w-5 fill-black dark:fill-white' />
        </div>
      </Link>
      <div className='bg-black/5 dark:bg-white/10 h-10 w-10 flex justify-center items-center rounded-full cursor-pointer'>
        <Menu className='h-3 w-3 fill-black dark:fill-white' />
      </div>
      <div className='bg-black/5 dark:bg-white/10 h-10 px-4 flex justify-center items-center rounded-full cursor-pointer italic text-black/40 dark:text-white/40'>
        New Gem
      </div>
    </nav>
  );
};

export default Nav;
