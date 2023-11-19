'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsFillHouseDashFill } from 'react-icons/bs';
import { FaBars } from 'react-icons/fa';
import { GoCommentDiscussion } from 'react-icons/go';
import { LuNewspaper } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';
import { VscOutput } from 'react-icons/vsc';
import NavLink from "./NavLink";
// import { LucideNewspaper } from 'lucide-react';



const user = {
  name: 'sajid aalam',
  email: 'somedummyemail&gmail.com',
  profile: '',
  medpoints: 100
}

const notifications = [
  'Review On Your Question',
  'Your Review Accepted',
  'Claim Your First Rewards'
]

const Header = () => {

  const pathname = usePathname()

  const [showLinks, setShowLinks] = useState(false);
  const [isScrolled, setIsScrolled] = useState(true);

  const handleToggle = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    (pathname === '/') ? setIsScrolled(false) : setIsScrolled(true);
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        (pathname === '/') ? setIsScrolled(false) : setIsScrolled(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return (
    <div className={`w-screen  bg-primary text-black  h-16 fixed top-0 left-0 z-100 flex items-center justify-between px-4 md:px-10 lg:px-20 xl:px-32 ${isScrolled ? 'border-b dark:border-white border-gray-800 shadow-sm' : ''} `}>
      <div className="w-full h-full flex items-center justify-between">

        <div className="sm:hidden">
          <button onClick={handleToggle}>
            <FaBars />
          </button>
        </div>

        <div>
          <Link href={'/'}>Ashik Jha</Link>
        </div>

        {/* RxCross2 */}
        <div className={`${showLinks ? 'w-screen ' : 'w-[0vw]'}  bg-primary text-black  flex  flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 absolute top-[0rem] left-0  z-100 sm:static h-screen sm:h-auto sm:w-auto sm:items-center transition-width ease duration-200`}>
          <div className={`${showLinks ? 'block sm:hidden' : 'hidden sm:hidden'} relative h-16 flex px-4`}>
            <div className=' w-max flex space-x-1 items-center px-1 text-2xl cursor-pointer' onClick={handleToggle}>
              <RxCross2 />
            </div>
          </div>

          <NavLink
            navlabel='home'
            navlink='/'
            showLinks={showLinks}
            handleToggle={handleToggle}
            icon={<VscOutput />}
          />
          <NavLink
            navlabel='courses'
            navlink='/courses'
            showLinks={showLinks}
            handleToggle={handleToggle}
            icon={<LuNewspaper />}
          />
          <NavLink
            navlabel='book'
            navlink='/book'
            showLinks={showLinks}
            handleToggle={handleToggle}
            icon={<GoCommentDiscussion />}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
