import VideoModal from '../VideoModal'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const ThreeSteps = () => {

    const [showModal, setShowModal] = useState(false)

    return(
        <>

        <div className=' w-full max-w-7xl bg-cover bg-center bg-no-repeat' style={{
            backgroundImage: 'url("https://res.cloudinary.com/alder/image/upload/q_auto,f_auto/c_scale,w_1350/v1592947685/kami-house-_5DIV0261.jpg")'
        }} >
            <div className='w-full h-full flex flex-col items-center justify-center gap-4 py-4 px-2 bg-[#132B40D9]/[.35]'>

            <h3 className='text-white text-2xl md:text-3xl text-center font-medium'>Ready to add outdoor security cameras to a custom-built Alder package?</h3>

            <p className='text-white text-center text-lg'>Get home security with video surveillance in three easy steps.</p>

            <br/>

            <div className='w-full flex flex-col items-center justify-evenly lg:flex-row'>

                <div className=' sm:w-2/3 lg:w-[300px] flex flex-col items-center'>
                    <p className='bg-[#297CA3] py-3 text-white text-center text-2xl w-full font-medium'>Consulation Call</p>

                    <p className='bg-white text-[#58585B] h-32 text-sm py-4 w-full pb-12 px-6 text-center '>Answer a few simple questions to get the best pricing and promotional offers on a totally personalized home security kit.</p>

                    <a href='tel:800.710.1289' className="flex relative bottom-5 items-center justify-center gap-2 bg-[#168359] hover:bg-[#14734f] hover:scale-105 transition duration-100 h-10 w-[90%] px-4 rounded-3xl border-2 border-white"><p className='text-white text-base sm:text-sm lg:text-lg'>Call for pricing 800.710.1289</p></a>

                </div>

                <div className=' sm:w-2/3 lg:w-[300px] flex flex-col items-center'>
                    <p className='bg-[#297CA3] py-3 text-white text-center text-2xl w-full font-medium'>Self Install</p>

                    <p className='bg-white text-[#58585B] h-32 text-sm py-4 w-full pb-12 px-6 text-center '>Your kit comes programmed and packaged in the exact order you'll install it. No tools needed.</p>

                    <button onClick={() => setShowModal(!showModal)} className="flex relative bottom-5 items-center justify-center gap-2 bg-[#168359] hover:bg-[#14734f] hover:scale-105 transition duration-100 h-10 w-[90%] px-4 rounded-3xl border-2 border-white"><p className='text-white text-base sm:text-sm lg:text-lg'>Installation Video</p></button>

                </div>

                <div className=' sm:w-2/3 lg:w-[300px] flex flex-col items-center'>
                    <p className='bg-[#297CA3] py-3 text-white text-center text-2xl w-full font-medium'>Good to go!</p>

                    <p className='bg-white text-[#58585B] h-32 text-sm py-4 w-full pb-12 px-6 text-center '>One last phone call activates your system. Our monitoring team has your back from now on.</p>

                    <a href='https://support.alder.com/?' className="flex relative bottom-5 items-center justify-center gap-2 bg-[#168359] hover:bg-[#14734f] hover:scale-105 transition duration-100 h-10 w-[90%] px-4 rounded-3xl border-2 border-white"><p className='text-white text-base sm:text-sm lg:text-lg'>Customer Support</p></a>

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

export default ThreeSteps