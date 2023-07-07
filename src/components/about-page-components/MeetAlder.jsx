import VideoModal from '../VideoModal'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const MeetAlder = () => {

    const [showModal, setShowModal] = useState(false)

    return (<div class="w-full md:h-[400px] flex bg-white">

        <div class="w-1/2 bg-[#297CA3] hidden md:flex flex-col justify-center px-12 lg:px-20 gap-6 ">

            <h2 class="text-white font-medium text-6xl" >Meet Alder</h2>
            <p class="text-white text-base">Alder's mission is to provide the very best in home security, home automation, and medical alert services. Every day we help hundreds of people keep their homes and families safe from burglary, fire, flood, and medical emergencies.</p>

        </div>

        <iframe class=" hidden md:flex w-1/2" src="https://www.youtube.com/embed/gJ1Su6C9268" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <div class=" w-full h-full flex md:hidden bg-center bg-cover " style={{
            backgroundImage: 'url("https://res.cloudinary.com/alder/image/upload/q_auto,f_auto/v1553207111/video-still.jpg")'
        }}>
            <div className='w-full h-full py-8 px-8 gap-6 flex flex-col items-center bg-neutral-800/[.50] '>

            <h3 class="text-white font-medium text-5xl sm:text-6xl text-center px-2 py-2 rounded-2xl bg-neutral-900/[.75] " >Meet Alder</h3>

            <p class="text-white text-center leading-7 ">Alder's mission is to provide the very best in home security, home automation, and medical alert services. Every day we help hundreds of people keep their homes and families safe from burglary, fire, flood, and medical emergencies.</p>

            <button onClick={() => setShowModal(!showModal)} className='bg-[#168359] hover:bg-[#14734f] hover:scale-105 transition duration-100 text-white border-2 border-white px-4 py-1 rounded-full shadow-xl '>Play Video</button>

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
                <VideoModal showModal={showModal} setShowModal={setShowModal} videoURL="https://www.youtube.com/embed/gJ1Su6C9268" />
                </motion.div>
                : null
            }
        </AnimatePresence>

    </div>)
}

export default MeetAlder