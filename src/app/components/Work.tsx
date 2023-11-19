import React from 'react'
import SectionTitle from './SectionTitle'
import { FaUserDoctor } from 'react-icons/fa6';

const WORK = [
    {
        'institution': 'Software Engineer',
        'role': 'Tech Innovations Ltd.',
        'description': 'Developing cutting-edge applications for emerging technologies.',
    },
    {
        'institution': 'Data Analyst Intern',
        'role': 'Data Insights Inc.',
        'description': 'Analyzing and interpreting complex datasets to derive valuable insights.',
    },
    {
        'institution': 'Research Assistant',
        'role': 'Institute of Technology Research',
        'description': 'Assisting in ongoing research projects related to artificial intelligence.',
    },
    {
        'institution': 'Intern, Electrical Engineering',
        'role': 'EcoPower Solutions',
        'description': 'Contributing to the design and implementation of renewable energy systems.',
    },
];


const Work = () => {
    return (
        <div className=" grid place-items-center ">
            <SectionTitle>Experiences</SectionTitle>
            <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 auto-cols-max gap-4 place-items-center">
                {WORK.map((elem, index) => (
                    <div className="w-[90%] mb-8 sm:mb-0 " key={index}>
                        <div key={index} className="w-full flex flex-col items-start gap-2 p-5 bg-accent2 dark:bg-dark-accent3 cursor-pointer shadow-md transition ease-in-out duration-500 hover:bg-second hover:scale-105 hover:shadow-2xl hover:border-black rounded-xl ">
                            <p className='text-5xl'>{<FaUserDoctor />}</p>
                            <h3 className="mb-1.5 text-xl font-bold">{elem.institution}</h3>
                            <p className="text-sm font-light leading-normal ">{elem.role}</p>
                            <p className="text-sm  leading-normal text-blue-500 font-semibold">{elem.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work
