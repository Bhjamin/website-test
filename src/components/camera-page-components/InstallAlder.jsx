
import VideoModal from '../VideoModal'
import play from '../../assets/play.svg'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const InstallAlder = () => {

    const [showModal, setShowModal] = useState(false)

    return(
        <>
        <div className='w-full max-w-7xl bg-cover bg-no-repeat bg-bottom h-[475px]' style={{
            backgroundImage: 'url("https://res.cloudinary.com/alder/image/upload/q_auto,f_auto/v1564758932/Screen_Shot_2019-03-29_at_11.25.00_AM.png")'
        }} >
            <div className='w-full h-full flex flex-col items-center justify-center gap-4 p-2 bg-[#24586ED9]/[.50]'>

            <h3 className=' text-center text-4xl md:text-5xl text-white font-medium'>Install Alder in 30 minutes.</h3>

            <p className='text-white text-lg font-medium'>Watch how simple it is.</p>

            <button onClick={() => setShowModal(!showModal)} className="flex items-center justify-center gap-2 bg-[#168359] hover:bg-[#14734f] hover:scale-105 transition duration-100 h-10 w-48 rounded-3xl border-2 border-white">
                     <img alt='play button icon' src={play} />
                     <p className="text-white text-[15px]">Watch The Video</p>
            </button>

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

export default InstallAlder