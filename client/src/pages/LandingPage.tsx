import Navbar from '@/components/Navbar';
import BgVideo from '../assets/videos/cover-video.mp4';
import { Button } from '@/components/ui/button';

function LandingPage() {
  return (
    <div className='overflow-x-hidden'>
        <Navbar />
        <section>
            <video autoPlay muted loop className='h-screen w-screen object-cover'>
                <source src={BgVideo} type="video/mp4" />
            </video>
            <div className='flex flex-col font-montserrat gap-10 absolute top-10 p-32 left-0'>
                <div className='font-semibold text-[75px] leading-[65px] text-black'>Transforming<br />Airspace<br />Security</div>
                <div className='max-w-[500px] text-md font-medium text-black'>Revolutionizing airspace security with precise drone and bird detection technology.</div>
                <Button className='w-fit px-7 text-sm'>GET STARTED</Button>
            </div>
        </section>
        <section className='h-screen w-screen p-10'>
            <div className='border-black border-2 rounded-3xl h-full'></div>
        </section>
    </div>
  )
}

export default LandingPage