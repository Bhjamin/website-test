import VideoModal from '../VideoModal'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import yiCamera from '../../assets/yicameralone.jpg'

const GettingStarted = () => {

    const [showModal, setShowModal] = useState(false)

    return(
        <>

        <div className=' w-full bg-cover bg-center bg-no-repeat' style={{
            backgroundImage: `url(${yiCamera})`,
            backgroundPosition: "0% 67%",
            backgroundSize: "114%"
        }} >
            <div className='w-full h-full flex flex-col items-center justify-center gap-4 py-6 px-2 bg-gradient-to-t from-slate-700 to-slate-400/[.75] '>

            <h3 className='text-white text-2xl md:text-3xl text-center px-4 py-1 rounded-2xl shadow-xl bg-gradient-to-t from-slate-700 to-slate-200/[.50] w-4/5 font-medium'>Getting Started</h3>

            <br/>

            <div className='w-full flex flex-col items-center justify-evenly lg:flex-row'>

                <div className=' sm:w-2/3 lg:w-[300px] flex flex-col items-center'>
                    <p className='bg-[#297CA3] py-3 text-white text-center text-2xl w-full font-medium'>Request a Quote</p>

                    <p className='bg-white text-[#58585B] h-32 text-sm py-4 w-full pb-12 px-6 text-center '>Our home security professionals help you get exactly what you need and always give you the best price.</p>

                    <a href='tel:800.710.1289' className="flex relative bottom-5 items-center justify-center gap-2 bg-[#168359] hover:bg-[#14734f] hover:scale-105 transition duration-100 h-10 w-[90%] px-4 rounded-3xl border-2 border-white"><p className='text-white text-base sm:text-sm lg:text-lg'>Call for pricing 800.710.1289</p></a>

                </div>

                <div className=' sm:w-2/3 lg:w-[300px] flex flex-col items-center'>
                    <p className='bg-[#297CA3] py-3 text-white text-center text-2xl w-full font-medium'>Self Install</p>

                    <p className='bg-white text-[#58585B] h-32 text-sm py-4 w-full pb-12 px-6 text-center '>When your package arrives, follow the setup instructions. It take less than 10 minutes.</p>

                    <button onClick={() => setShowModal(!showModal)} className="flex relative bottom-5 items-center justify-center gap-2 bg-[#168359] hover:bg-[#14734f] hover:scale-105 transition duration-100 h-10 w-[90%] px-4 rounded-3xl border-2 border-white"><p className='text-white text-base sm:text-sm lg:text-lg'>Installation Video</p></button>

                </div>

                <div className=' sm:w-2/3 lg:w-[300px] flex flex-col items-center'>
                    <p className='bg-[#297CA3] py-3 text-white text-center text-2xl w-full font-medium'>24/7 Monitoring</p>

                    <p className='bg-white text-[#58585B] h-32 text-sm py-4 w-full pb-12 px-6 text-center '>You will have 24/7 monitoring and support. If you ever need help, just call.</p>

                    <a href='https://support.alder.com/' className="flex relative bottom-5 items-center justify-center gap-2 bg-[#168359] hover:bg-[#14734f] hover:scale-105 transition duration-100 h-10 w-[90%] px-4 rounded-3xl border-2 border-white"><p className='text-white text-base sm:text-sm lg:text-lg'>Customer Support</p></a>

                </div>

            </div>

            </div>
        </div>


        <AnimatePresence mode="popLayout">
            {showModal ?
                <motion.div
                className="fixed top-0 left-0 right-0 bottom-0 z-[75] flex justify-center items-center"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                >
                <VideoModal showModal={showModal} setShowModal={setShowModal} videoURL="https://www.youtube.com/embed/3MTkM5_70uk" />
                </motion.div>
                : null
            }
        </AnimatePresence>
        
        </>
    )
}

export default GettingStarted