import CourseForm from "./CourseForm"
import BookForm from "./CourseForm"

export const metadata = {
    title: 'Ashik | Courses',
    openGraph: {
        title: 'Ashik | Courses',
        description: 'Courses page to get in touch',
    },
}
const page = async () => {

    return (
        <div className='min-h-[94vh] py-10 px-4 md:px-10 lg:px-20 xl:px-32 '>
            <CourseForm />
        </div>
    )
}

export default page
