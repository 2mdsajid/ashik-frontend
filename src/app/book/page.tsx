import BookForm from "./BookForm"

export const metadata = {
    title: 'Ashik | Book',
    openGraph: {
        title: 'Ashik | Book',
        description: 'Book page to get in touch',
    },
}
const page = async () => {

    return (
        <div className='min-h-[94vh] py-10 px-4 md:px-10 lg:px-20 xl:px-32'>
            <BookForm />
        </div>
    )
}

export default page
