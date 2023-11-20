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
import { FaBook } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { PiChalkboardTeacher } from "react-icons/pi";

import { RiContactsFill } from "react-icons/ri";

import { CgMenuBoxed } from "react-icons/cg";

import NavLink from "./NavLink";
import { Button } from '@/components/ui/button';
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

  const handleToggle = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className={`w-screen  bg-primary text-black  h-16 fixed top-0 left-0 z-100 flex items-center justify-between px-4 pr-8 md:px-10 lg:px-20 xl:px-32 border-b dark:border-white border-gray-800 shadow-sm `}>
      <div className="w-full h-full flex items-center justify-between">

        <div>
          <Link href={'/'} className='text-xl font-semibold uppercase'>Ashik</Link>
        </div>

        <div className="sm:hidden text-3xl">
          <button onClick={handleToggle}>
            <CgMenuBoxed />
          </button>
        </div>

        {/* RxCross2 */}
        <div className={`${showLinks ? 'w-screen ' : 'w-[0vw]'}  bg-primary text-black  flex  flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 absolute top-[0rem] left-0  z-100 sm:static h-screen sm:h-auto sm:w-auto sm:items-center transition-width ease duration-200`}>
          <div className={`${showLinks ? 'block sm:hidden' : 'hidden sm:hidden'} relative h-16 flex px-4`}>
            <div className=' w-max flex space-x-1 items-center px-1 text-2xl cursor-pointer absolute right-[2rem] top-[2rem]' onClick={handleToggle}>
              <RxCross2 />
            </div>
          </div>

          <NavLink
            navlabel='Home'
            navlink='/'
            showLinks={showLinks}
            handleToggle={handleToggle}
            icon={<IoMdHome />}
          />
          <NavLink
            navlabel='Courses'
            navlink='/courses'
            showLinks={showLinks}
            handleToggle={handleToggle}
            icon={<PiChalkboardTeacher />}
          />
          <NavLink
            navlabel='Book'
            navlink='/book'
            showLinks={showLinks}
            handleToggle={handleToggle}
            icon={<FaBook />}
          />
          <div className={`${showLinks ? 'block sm:hidden px-4 sm:px-0' : 'hidden'} absolute bottom-20`}>
            <Button asChild className='bg-blue-600 hover:bg-blue-500'>
            <Link href={'/contact'} className='flex gap-2 items-center'><span className='text-xl'><RiContactsFill /></span><span>Contact</span></Link>
            </Button>
          </div>

        </div>

        <div className="sm:block hidden">
          <Button asChild className='bg-blue-600 hover:bg-blue-500 '>
            <Link href={'/contact'} className='flex gap-2 items-center'><span><RiContactsFill /></span><span>Contact</span></Link>
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Header;
