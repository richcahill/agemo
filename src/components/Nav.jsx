// Nav component
import Logo from '@/components/icons/Logo';
import Menu from '@/components/icons/Menu';

const Nav = () => {
  return (
    <nav className='w-full flex justify-center p-2 gap-2 items-stretch'>
      <div className='bg-white/10 flex justify-center items-center rounded-full h-10 w-10 cursor-pointer'>
        <Logo color='#fff' className='h-6 w-6' />
      </div>
      <div className='bg-white/10 h-10 w-10 flex justify-center items-center rounded-full cursor-pointer hover:'>
        <Menu className='h-3 w-3' />
      </div>
      <div className='bg-white/10 h-10 px-4 flex justify-center items-center rounded-full cursor-pointer italic text-white/40'>
        New Gem
      </div>
    </nav>
  );
};

export default Nav;