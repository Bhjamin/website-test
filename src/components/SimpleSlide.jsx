import kid from '../assets/simple-kid.jpg'
import simple2 from '../assets/simple-2.jpg'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'


const SimpleSlide = () => {


    const [slide, setSlide] = useState(1)


    return (<div className='w-full flex h-auto flex-col-reverse justify-evenly lg:flex-row md:items-center px-5 py-10'>

        <div className=' w-full lg:w-1/2 flex flex-col lg:gap-10 items-center lg:justify-between'>

            <h3 className='text-[#58585B] text-2xl sm:text-5xl font-medium text-center relative bottom-12 sm:bottom-20 z-10 lg:static '>{slide === 1 ? 'Award Winning Simplicity' : slide === 2 ? 'Self Install' : 'Convenient Control'}</h3>

            <div className='flex flex-col w-5/6 gap-10 items-center text-center'>

                <div className='w-full flex flex-col items-center hover:scale-110 transition duration-100'>
                    <h3 onMouseOver={() => setSlide(1)} className={` ${slide === 1 ? 'text-[#297CA3]' : 'text-black'} text-2xl lg:text-3xl `}>Step 1 Plug in and setup panel</h3>
                    <p className={` ${slide === 1 ? 'flex' : 'hidden'} text-[#58585B] `}>When your package arrives, follow the setup instructions. It takes less than 10 mins.</p>
                </div>

                <div className='w-full flex flex-col items-center hover:scale-110 transition duration-100'>
                    <h3 onMouseOver={() => setSlide(2)} className={` ${slide === 2 ? 'text-[#297CA3]' : 'text-black'} text-2xl lg:text-3xl `}>Step 2 Place sensors and yard sign</h3>
                    <p className={` ${slide === 2 ? 'flex' : 'hidden'} text-[#58585B] `}>Place the sensors in their designated locations, place the Alder sign in front of your home.</p>
                </div>

                <div className='w-full flex flex-col items-center hover:scale-110 transition duration-100'>
                    <h3 onMouseOver={() => setSlide(3)} className={` ${slide === 3 ? 'text-[#297CA3]' : 'text-black'} text-2xl lg:text-3xl `}>Step 3 Download the app</h3>
                    <p className={` ${slide === 3 ? 'flex' : 'hidden'} text-[#58585B] `}>You will have 24/7 monitoring and support. If you ever need help, just call.</p>
                </div>

            </div>

            <br className=' block lg:hidden' />

            <div className='flex flex-row gap-5'>
                <span onClick={() => setSlide(1)} className={`w-3 h-3 rounded-full ${slide === 1 ? 'bg-[#297CA3]' : 'bg-zinc-300'} `} />
                <span onClick={() => setSlide(2)} className={`w-3 h-3 rounded-full ${slide === 2 ? 'bg-[#297CA3]' : 'bg-zinc-300'}`} />
                <span onClick={() => setSlide(3)} className={`w-3 h-3 rounded-full ${slide === 3 ? 'bg-[#297CA3]' : 'bg-zinc-300'}`} />
            </div>

        </div>


        <AnimatePresence mode='popLayout'>
            {slide === 1 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='relative lg:h-[350px] lg:w-[550px] xl:h-[400px] xl:w-[600px] 2xl:h-[475px] 2xl:w-[650px]'
                >
                    <motion.img
                        src={kid}
                        alt="a child using alder security panel "
                        className='w-full h-full'
                    />
                    <div className='absolute lg:static inset-0 bg-gradient-to-t to-50% from-white to-transparent' />
                </motion.div>
            ) : null}
        </AnimatePresence>
        <AnimatePresence mode='popLayout'>
            {slide === 2 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='relative lg:h-[350px] lg:w-[550px] xl:h-[400px] xl:w-[600px] 2xl:h-[475px] 2xl:w-[650px]'
                >
                    <motion.img
                        src={simple2}
                        alt="Person placing sensor in a corner"
                        className='w-full h-full'
                    />
                    <div className='absolute lg:static inset-0 bg-gradient-to-t to-50% from-white to-transparent' />
                </motion.div>
            ) : null}
        </AnimatePresence>
        <AnimatePresence mode='popLayout'>
            {slide === 3 ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='relative lg:h-[350px] lg:w-[550px] xl:h-[400px] xl:w-[600px] 2xl:h-[475px] 2xl:w-[650px]'
                >
                    <motion.img
                        src='https://res.cloudinary.com/alder/image/upload/c_scale,w_1379/v1566238547/Ryan-Hatch-_37-of-214_-alder.jpg'
                        alt="person using the alder security app"
                        className='w-full h-full'
                    />
                    <div className='absolute lg:static inset-0 bg-gradient-to-t to-50% from-white to-transparent  ' />
                </motion.div>
            ) : null}
        </AnimatePresence>


    </div>)
}

export default SimpleSlide