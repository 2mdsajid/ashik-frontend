import React from 'react'

type TSectionTitleProps = {
    children: React.ReactNode
    desc?: string
}

const SectionTitle = (props: TSectionTitleProps) => {
    return (
        <div>
            <h1 className='text-4xl pt-14 pb-4 text-center font-semibold tracking-tight font-pt-serif'>
                {props.children}
            </h1>
            {props.desc && <p className='text-xl py-2 text-center font-normal max-w-3xl mx-auto'>
                {props.desc}
            </p>}
        </div>
    )
}

export default SectionTitle
