'use client'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import Autoplay from "swiper";
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from '../../components/ui/button';

const testimonials: TypeTestimonialDisplayProps[] = [
    {
        "quote": "For the daily test which comprised of the best questions from the topics, Solution of CEE 2021, and important MCQs. They all helped me a lot for my preparation and finally getting 4th rank in CEE 2022. Thank you MedLocus for helping me and many aspirants selflessly♥♥ ",
        "author": "Gunjan Jha",
        "about": "CEE-UG 2022 | RANK 4",
        "image": "gunjan.jpg"
    },
    {
        "quote": "I'm very thankful to MedLocus, as I've developed my confidence through the exam conducted by MedLocus. Finally I've got IOM, all these are because of your love, support & help. I'm very very thankful to MedLocus😊 Thanks for helping ❤❤ ",
        "author": "Dilip Sharma",
        "about": "CEE-UG 2022 | RANK 22",
        "image": "dilip.jpg"
    }
]


export type TypeTestimonialDisplayProps = {
    quote: string
    author: string
    about: string
    image: string
}


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
                // autoplay={{
                //     delay: 2000, // Set the delay (in milliseconds) between each slide change
                //     disableOnInteraction: false, // Allow the autoplay to continue even when the user interacts with the Swiper
                // }}
            >
                <div className="swipper-wrapper  ">
                    {testimonials.map((t, i) => {
                        return <SwiperSlide className='w-full' key={i}>
                            <img src='/ss.png' className='w-screen'/>
                            {/* <div className='border bg-white'>
                                <Button />
                            </div> */}
                        </SwiperSlide>
                    })}
                </div>
            </Swiper>

        </div>
    )
}

export default Testimonials
