import React from 'react'
import SectionTitle from './SectionTitle'
import { FaUserDoctor } from "react-icons/fa6";


const FEATURES = [
    {
        'title': 'PhD in Neuroscience',
        'loc': 'Brain Research Institute',
        'yr': '2025',
        'description': 'Research on neural networks',
    },
    {
        'title': 'Master\'s in Computer Science',
        'loc': 'Tech University',
        'yr': '2023',
        'description': 'Thesis on machine learning algorithms',
    },
    {
        'title': 'Bachelor\'s in Electrical Engineering',
        'loc': 'ElectroTech College',
        'yr': '2020',
        'description': 'Project on renewable energy systems',
    },
    {
        'title': 'High School Diploma',
        'loc': 'City High School',
        'yr': '2016',
        'description': 'Top student in mathematics',
    },
];


const History = () => {
    return (
        <div className=" grid place-items-center ">
            <SectionTitle>Featured As</SectionTitle>
            <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 auto-rown-max gap-4 place-items-center">
                {FEATURES.map((elem, index) => (
                    <div className="w-full mb-8 sm:mb-0 " key={index}>
                        <div key={index} className="w-full flex  items-start gap-4 p-5 bg-accent2 dark:bg-dark-accent3 cursor-pointer shadow-md transition ease-in-out duration-500 hover:bg-second hover:scale-105 hover:shadow-2xl hover:border-black rounded-xl ">
                            <div className="text-3xl">
                                <p>{<FaUserDoctor />}</p>
                            </div>
                            <div className='flex flex-col items-start'>
                                <h3 className="mb-1.5 text-xl font-bold">{elem.title}</h3>
                                <p className="text-sm font-light leading-normal ">{elem.loc}</p>
                                <p className="text-sm font-light leading-normal ">{elem.yr}</p>
                                <p className="text-sm  leading-normal text-blue-500 font-semibold">{elem.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default History
