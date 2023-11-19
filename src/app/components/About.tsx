import React from 'react'
import SectionTitle from './SectionTitle'

const About = () => {
    return (
        <div className=" grid items-center ">
            <SectionTitle>About Ashik Jha</SectionTitle>
            <div className='min-h-screen pt-10 flex flex-col md:flex-row md:justify-center items-center md:items-start gap-5'>
                <div className='w-full md:w-[50%]'>
                    <img src='/kk.png' className='w-full'/>
                </div>
                <div className='w-full md:w-[50%] text-sm'>
                    <p>I am Ashik Jha, a determined and high-achieving individual who proudly secured the top position in the Common Entrance Examination (CEE). <br/><br/>My journey to becoming a CEE topper reflects my unwavering commitment to academic excellence and my ability to rise to challenges. <br/><br/>The accomplishment in the CEE exam is not just a testament to my intellectual capabilities but also underscores my dedication to hard work and continuous learning. Excelling in such a competitive academic environment has fueled my passion for education, and I am motivated to continue striving for excellence in all my future endeavors.</p>
                </div>
            </div>
        </div>
    )
}

export default About
