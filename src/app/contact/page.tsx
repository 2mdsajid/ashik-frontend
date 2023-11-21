import ContactForm from "./ContactForm"

export const metadata = {
  title: 'Ashik | Contact',
  openGraph: {
    title: 'Ashik | Contact',
    description: 'contact page to get in touch',
  },
}
const page = async () => {

  return (
    <div className='min-h-[94vh] py-10 px-4 md:px-10 lg:px-20 xl:px-32'>
      <ContactForm />
    </div>
  )
}

export default page
