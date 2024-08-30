import Navbar from '@/components/Navbar';
import BgVideo from '../assets/videos/cover-video.mp4';
import { Button } from '@/components/ui/button';
import Arrow from '../assets/images/arrow.png';

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
                <Button className='w-fit px-10 py-5 text-sm'>GET STARTED</Button>
            </div>
        </section>
        <section className='h-screen w-screen p-10'>
            <div className="flex items-center justify-around h-full p-10 border-2 border-black rounded-3xl">
                <div className="text-left basis-1/2">
                    <h1 className="text-7xl max-w-[400px] font-semibold leading-tight font-montserrat text-black">"Drone Detection Doesn’t Have to be Complicated"</h1>
                </div>
                <div className="flex flex-col items-center gap-10 justify-center space-y-6 basis-1/2">
                    <img src={Arrow} className='h-[200px] w-[500px] hover:scale-105 transition-all duration-300 cursor-pointer' />
                    <p className="text-sm max-w-[400px] font-medium font-montserrat leading-relaxed text-black">
                        By focusing on the unique micro-Doppler signatures produced by drones and birds, our solution captures the subtle differences in movement (e.g., drone propellers vs. bird wings). This ensures that the system can accurately differentiate between the two, even when they have similar sizes or fly at similar altitudes.
                    </p>
                    
                    <Button className='font-montserrat px-10 py-5'>LEARN MORE</Button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default LandingPage