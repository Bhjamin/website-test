import panel from '../assets/AlulaPanel.png'
import smoke from '../assets/Smoke Detector.png'
import keyfob from '../assets/Key Fob.png'
import camera from '../assets/Eufy Outdoor Camera.png'
import medpendant from '../assets/Medical Pendant.png'
import doorSensor from '../assets/DoorWindow Sensor.png'
import doorbell from '../assets/Eufy Doorbell Camera.png'

const ProductMenu = ({ bg_color = "bg-white" }) => {


    return (
        <div className={`w-full h-auto ${bg_color} flex justify-center`}>

            <div className='max-w-6xl h-auto py-10 px-2 md:px-10 flex flex-wrap justify-center gap-10'>

                <a href='/products/panel' className='w-1/3 max-w-[175px] flex flex-col justify-center items-center hover:scale-110 rounded-md hover:shadow-md transition duration-100 '>
                    <img className='  max-w-[100px] md:max-w-[175px] md:max-h-[100px]' alt="home security panel" src={panel} />
                    <p className='text-center'>Touchscreen Panel</p>
                </a>

                <a href='/products/fire' className='w-1/3 max-w-[175px] flex flex-col justify-center items-center hover:scale-110 rounded-md hover:shadow-md transition duration-100 '>
                    <img className=' max-w-[65px] md:max-w-[150px] md:max-h-[75px]' alt="fire alarm" src={smoke} />
                    <p className='text-center'>Smoke Detector</p>
                </a>

                <a href='/products/keyfob' className='w-1/3 max-w-[175px] flex flex-col justify-center items-center hover:scale-110 rounded-md hover:shadow-md transition duration-100 '>
                    <img className=' max-w-[100px] md:max-w-[175px] md:max-h-[100px]' alt="key remote to security system" src={keyfob} />
                    <p className='text-center'>Key Remote</p>
                </a>

                <a href='/cameras' className='w-1/3 max-w-[175px] flex flex-col justify-center items-center hover:scale-110 transition rounded-md hover:shadow-md duration-100 '>
                    <img className=' max-w-[100px] md:max-w-[175px] md:max-h-[100px]' alt="security camera" src={camera} />
                    <p className='text-center'>Outdoor/Indoor Cameras</p>
                </a>

                <a href='/med-pendant' className='w-1/3 max-w-[175px] flex flex-col justify-center items-center hover:scale-110 transition rounded-md hover:shadow-md duration-100 '>
                    <img className=' max-w-[100px] md:max-w-[175px] md:max-h-[100px]' alt='medical emergency pendant' src={medpendant} /> 
                    <p className='text-center'>Medical Button</p>
                </a>

                <a href='/products/door' className='w-1/3 max-w-[175px] flex flex-col justify-center items-center hover:scale-110 rounded-md hover:shadow-md transition duration-100 '>
                    <img className=' max-w-[100px] md:max-w-[175px] md:max-h-[100px]' alt='door and window sensor' src={doorSensor} />
                    <p className='text-center'>Door/Window Sensors</p>
                </a>

                <div className='w-1/3 max-w-[175px] flex flex-col justify-center items-center hover:scale-110 rounded-md hover:shadow-md transition duration-100 '>
                    <img className=' max-w-[50px] max-h-[75px] md:max-w-[175px] md:max-h-[100px]' alt="home security doorbell" src={doorbell} />
                    <p className='text-center'>Doorbell</p>
                </div>

            </div>

        </div>
    )
}

export default ProductMenu