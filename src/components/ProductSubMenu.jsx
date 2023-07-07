import flood from '../assets/flood.png'
import app from '../assets/app.png'
import door from '../assets/DoorWindow Sensor.png'
import fire from '../assets/Smoke Detector.png'
import keyfob from '../assets/Key Fob.png'
import panel from '../assets/AlulaPanel.png'
import motion from '../assets/Motions Sensor.png'
 


const ProductSubMenu = ({path = "/"}) => {


    return(<div className="w-full min-h-[100px] bg-[#297CA3] flex flex-wrap flex-row gap-0 lg:gap-8 px-2 py-2 items-center justify-evenly">

        <a href='/products/panel' className={`flex flex-col w-[115px] px-5 py-2 hover:shadow-lg hover:shadow-black hover:scale-105 hover:-translate-y-1 transition duration-150 rounded-xl justify-center items-center ${path === '/products/panel' ? "bg-[#195C85] shadow-black shadow-2xl" : "bg-transparent"} `}>
            <img alt='alder security panel' className='max-h-[75px]' src={panel} />
            <p className='text-white text-xs'>Panel</p>
        </a>
        
        <a href='/products/fire' className={`flex flex-col w-[115px] px-5 py-2 hover:shadow-lg hover:shadow-black hover:scale-105 hover:-translate-y-1 transition duration-150 rounded-xl justify-center items-center ${path === '/products/fire' ? "bg-[#195C85] shadow-black shadow-2xl" : "bg-transparent"} `}>
            <img alt='smoke detector' className='max-h-[65px]' src={fire} />
            <p className='text-white text-xs'>Fire</p>
        </a>

        <a href='/products/keyfob' className={`flex flex-col w-[115px] px-5 py-2 hover:shadow-lg hover:shadow-black hover:scale-105 hover:-translate-y-1 transition duration-150 rounded-xl justify-center items-center ${path === '/products/keyfob' ? "bg-[#195C85] shadow-black shadow-2xl" : "bg-transparent"} `}>
            <img alt='security keyfob' className='max-h-[75px]' src={keyfob} />
            <p className='text-white text-xs'>Keyfob</p>
        </a>

        <a href='/products/motion-sensors' className={`flex w-[115px] flex-col px-5 py-2 hover:shadow-lg hover:shadow-black hover:scale-105 hover:-translate-y-1 transition duration-150 rounded-xl justify-center items-center ${path === '/products/motion-sensors' ? "bg-[#195C85] shadow-black shadow-2xl" : "bg-transparent"} `}>
            <img alt='motion sensor' className='max-h-[75px]' src={motion} />
            <p className='text-white text-xs'>Motion</p>
        </a>

        <a href='/products/flood' className={`flex flex-col w-[115px] px-5 py-2 hover:shadow-lg hover:shadow-black hover:scale-105 hover:-translate-y-1 transition duration-150 rounded-xl justify-center items-center ${path === '/products/flood' ? "bg-[#195C85] shadow-black shadow-2xl" : "bg-transparent"} `}>
            <img alt='flood detector' className='max-h-[65px]' src={flood} />
            <p className='text-white text-xs'>Flood</p>
        </a>

        <a href='/products/door' className={`flex flex-col w-[115px] px-5 py-2 group hover:shadow-lg hover:shadow-black hover:scale-105 hover:-translate-y-1 transition duration-150 rounded-xl justify-center items-center ${path === '/products/door' ? "bg-[#195C85] shadow-black shadow-2xl" : "bg-transparent"} `}>
            <img alt='door sensor' className='max-h-[75px]' src={door} />
            <p className='text-white text-xs'>Door/Window</p>
        </a>

        <a href='/products/app' className={`flex flex-col w-[115px] px-5 py-2 hover:shadow-lg hover:shadow-black hover:scale-105 hover:-translate-y-1 transition duration-150 rounded-xl justify-center items-center ${path === '/products/app' ? "bg-[#195C85] shadow-black shadow-2xl" : "bg-transparent"} `}>
            <img alt='alder mobile app' className='max-h-[75px]' src={app} />
            <p className='text-white text-xs text-center'>Mobile App</p>
        </a>

    </div>)
}

export default ProductSubMenu