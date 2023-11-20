'use client'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import Autoplay from "swiper";
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '@components/ui/button';
import Link from 'next/link';

const testimonials = [
    {
        "desc": "CONCEPTUAL CEE BOOK",
        "label": "Buy",
        "href": "/book",
        "image": "gunjan.jpg"
    },
    {
        "desc": "ONLINE CLASSES FOR CEE",
        "label": "View Course",
        "href": "/courses",
        "image": "dilip.jpg"
    }
]


const Testimonials = () => {

    return (
        <div>
            <Swiper
                modules={[Autoplay, Navigation, A11y, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000, // Set the delay (in milliseconds) between each slide change
                    disableOnInteraction: false, // Allow the autoplay to continue even when the user interacts with the Swiper
                }}
            >
                <div className="swipper-wrapper  ">
                    {testimonials.map((t, i) => {
                        return <SwiperSlide className='w-full' key={i}>
                            <div className='w-screen lg:h-[80vh] relative'>
                                <img src='/ss.png' className='w-screen z-10' />
                                <div className='absolute z-100 top-20 md:top-[20vh] lg:top-[30vh] left-10 md:left-20 flex flex-col gap-5'>
                                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                                        {t.desc}
                                    </h1>
                                    <div className='flex gap-3 md:gap-5'>
                                        <Button asChild variant={'secondary'} className='md:text-xl lg:text-2xl xl:text-3xl md:p-6 lg:p-8 '>
                                            <Link href={'/contact'}>Contact</Link>
                                        </Button>
                                        <Button asChild variant={'secondary'} className='md:text-xl lg:text-2xl xl:text-3xl md:p-6 lg:p-8 '>
                                            <Link href={t.href}>{t.label}</Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                </div>
            </Swiper>

        </div>
    )
}

export default Testimonials
