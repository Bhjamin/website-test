import flood from '../assets/productFlood.svg'
import app from '../assets/productApp.svg'
import door from '../assets/productDoor.svg'
import fire from '../assets/productFire.svg'
import keyfob from '../assets/productFob.svg'
import panel from '../assets/productPanel.svg'
import motion from '../assets/productMotion.svg'
 

const ProductHeader = ({path = "/"}) => {


    return(<div className="w-full min-h-[100px] bg-[#297CA3] flex flex-wrap flex-row gap-0 lg:gap-8 px-2 py-2 items-center justify-evenly">

        <a href='/products/panel' className={`flex flex-col w-[115px] px-5 py-2 hover:shadow-lg hover:shadow-black hover:scale-105 hover:-translate-y-1 transition duration-150 rounded-xl justify-center items-center ${path === '/products/panel' ? "bg-[#195C85] shadow-black shadow-2xl" : "bg-transparent"} `}>
            <img alt='security panel icon' src={panel} />
            <p className='text-white text-xs'>Panel</p>
        </a>
        
        <a href='/products/fire' className={`flex flex-col w-[115px] px-5 py-2 hover:shadow-lg hover:shadow-black hover:scale-105 hover:-translate-y-1 transition duration-150 rounded-xl justify-center items-center ${path === '/products/fire' ? "bg-[#195C85] shadow-black shadow-2xl" : "bg-transparent"} `}>
            <img alt='smoke detector icon' src={fire} />
            <p className='text-white text-xs'>Fire</p>
        </a>

        <a href='/products/keyfob' className={`flex flex-col w-[115px] px-5 py-2 hover:shadow-lg hover:shadow-black hover:scale-105 hover:-translate-y-1 transition duration-150 rounded-xl justify-center items-center ${path === '/products/keyfob' ? "bg-[#195C85] shadow-black shadow-2xl" : "bg-transparent"} `}>
            <img alt='home security keyfob icon' src={keyfob} />
            <p className='text-white text-xs'>Keyfob</p>
        </a>

        <a href='/products/motion-sensors' className={`flex w-[115px] flex-col px-5 py-2 hover:shadow-lg hover:shadow-black hover:scale-105 hover:-translate-y-1 transition duration-150 rounded-xl justify-center items-center ${path === '/products/motion-sensors' ? "bg-[#195C85] shadow-black shadow-2xl" : "bg-transparent"} `}>
            <img alt='motion sensor icon' src={motion} />
            <p className='text-white text-xs'>Motion</p>
        </a>

        <a href='/products/flood' className={`flex flex-col w-[115px] px-5 py-2 hover:shadow-lg hover:shadow-black hover:scale-105 hover:-translate-y-1 transition duration-150 rounded-xl justify-center items-center ${path === '/products/flood' ? "bg-[#195C85] shadow-black shadow-2xl" : "bg-transparent"} `}>
            <img alt='flood sensor icon' src={flood} />
            <p className='text-white text-xs'>Flood</p>
        </a>

        <a href='/products/door' className={`flex flex-col w-[115px] px-5 py-2 hover:shadow-lg hover:shadow-black hover:scale-105 hover:-translate-y-1 transition duration-150 rounded-xl justify-center items-center ${path === '/products/door' ? "bg-[#195C85] shadow-black shadow-2xl" : "bg-transparent"} `}>
            <img alt='door sensor icon' src={door} />
            <p className='text-white text-xs'>Door/Window</p>
        </a>

        <a href='/products/app' className={`flex flex-col w-[115px] px-5 py-2 hover:shadow-lg hover:shadow-black hover:scale-105 hover:-translate-y-1 transition duration-150 rounded-xl justify-center items-center ${path === '/products/app' ? "bg-[#195C85] shadow-black shadow-2xl" : "bg-transparent"} `}>
            <img alt='smart phone icon' src={app} />
            <p className='text-white text-xs text-center'>Mobile App</p>
        </a>

    </div>)
}

export default ProductHeader