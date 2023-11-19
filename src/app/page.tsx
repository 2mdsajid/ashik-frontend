import About from './components/About'
import Footer from './components/Footer'
import History from './components/History'
import Testimonials from './components/Testimonials'
import Work from './components/Work'

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="">
        <Testimonials />
      </section>
      <section className='pt-10 px-4 md:px-10 lg:px-20 xl:px-32'>
        <History />
      </section>
      <section className='pt-10 px-4 md:px-10 lg:px-20 xl:px-32'>
        <About />
      </section>
      <section className='pt-10 px-4 md:px-10 lg:px-20 xl:px-32'>
        <Work />
      </section>
      <Footer />
      {/* <p className='text-4xl font-bold'>ashik jha</p> */}
    </div>
  )
}
