import Link from 'next/link';
import { FaFacebookF, FaTelegram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className={`bg-blue-900 text-white w-full  flex flex-col justify-center mx-auto pb-5`}>
            <div className={`flex flex-col md:flex-row md:justify-center my-5`}>
                <div className='w-[70%] mx-auto md:w-[30%]  flex-col gap-4 items-center md:items-start flex mb-10 md:mb-0'>
                    <h1 className='text-3xl lg:text-4xl font-bold'>CONCEPTUAL CEE</h1>
                    {/* <p className='w-full py-5 text-lg'>Welcome to Medlocus, a platform designed to help students excel in their studies through comprehensive MCQ practice.</p>
                     */}
                    <div className='items-center md:items-start flex flex-col'>
                        <div className='flex gap-3'>
                            <Link href={''} className='flex items-center gap-1 text-lg'>
                                <FaFacebookF />
                            </Link>
                            <Link href={''} className='flex items-center gap-1 text-lg'>
                                <FaYoutube />
                            </Link>
                            <Link href={''} className='flex items-center gap-1 text-lg'>
                                <FaTelegram />
                            </Link>
                        </div>
                        <p>emailll@gmail.com</p>
                    </div>
                </div>

                <div className='w-[70%] md:w-max mx-auto flex flex-col items-center md:items-start mb-10 md:mb-0'>
                    <h1 className='text-2xl font-semibold'>Useful Links</h1>
                    <Link className='hover:underline' href={'/contact'} >Contact</Link>
                    <Link className='hover:underline' href={'/courses'} >Courses</Link>
                    <Link className='hover:underline' href={'/book'} >Book</Link>
                </div>
            </div>

            <div className="w-full h-full flex items-center justify-center">
                <h1 className="text-sm md:text-xl ">
                    &copy; 2023 conceptual cee. All rights reserved.
                </h1>
            </div>
        </footer>
    )
}

export default Footer
