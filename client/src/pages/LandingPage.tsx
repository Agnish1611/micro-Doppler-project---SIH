import Navbar from '@/components/Navbar';
import BgVideo from '../assets/videos/cover-video.mp4';
import { Button } from '@/components/ui/button';
import Arrow from '../assets/images/arrow.png';
import Drone from '../assets/images/drone.png';
import Radar from '../assets/images/radar.png';
import Shield from '../assets/images/shield.png';
import Radar2 from '../assets/images/radar2.png';

const features = [
    {
        img: Drone,
        title: 'Accurate Drone-Bird Classification',
        desc: 'Utilizes micro-Doppler signatures to reliably distinguish drones from birds, enhancing airspace security.'
    },
    {
        img: Radar,
        title: 'Advanced Radar Technology',
        desc: 'Leverages Joint Time-Frequency Analysis for precise identification, even in challenging environments.'
    },
    {
        img: Shield,
        title: 'Enhanced Situational Awareness',
        desc: 'Improves safety and surveillance by providing clear, actionable insights through innovative radar detection methods.'
    },
]

const innovations = [
    {
        title: 'Seamless integrations',
        desc: 'Combines micro-Doppler radar with advanced signal processing, enabling accurate and reliable differentiation between drones and birds in real-time.',
        line: true
    },
    {
        title: 'Simplified Detection',
        desc: 'Converts complex radar data into clear, actionable insights, making it easier for operators to enhance security and make informed decisions.',
        line: true
    },
    {
        title: 'Intuitive Design',
        desc: ' Designed for ease of use and adaptability, this system sets a new standard in airspace monitoring, ensuring that advanced technology is both accessible and effective.'
    },
]

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
        <section className='h-screen w-screen'>
            <div className="bg-black text-white h-screen flex items-center justify-center p-20 font-montserrat">
                <div className="flex flex-col md:flex-row">
                    { features.map((feature, i) => {
                        return (
                            <div key={i} className="flex flex-col items-center justify-center gap-4">
                                <img src={feature.img} alt="Drone" className="w-[500px]" />
                                <h3 className="text-4xl font-medium text-center  max-w-[250px] mb-5">{feature.title}</h3>
                                <p className="text-center text-md text-gray-400  max-w-[300px]">{feature.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
        <section className='h-screen w-screen p-10'>
            <div className="flex items-center justify-around h-full p-10">
                <div className="text-left basis-1/2 pl-10">
                    <h1 className="text-7xl max-w-[400px] font-semibold leading-tight font-montserrat text-black mb-5">Innovation that flows</h1>
                    <img src={Radar2} className='h-[300px]' />
                </div>
                <div className="flex flex-col items-center justify-center space-y-6 basis-1/2">
                    {innovations.map((item, i) => {
                        return (
                            <div key={i} className={`${item.line && 'border-b-2 border-black'} py-10 font-montserrat`}>
                                <div className='text-4xl mb-5 font-medium'>{item.title}</div>
                                <div className='text-sm'>{item.desc}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    </div>
  )
}

export default LandingPage