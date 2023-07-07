import { useState } from "react"
import VideoModal from '../VideoModal'
import play from '../../assets/play.svg'
import whitePhone from '../../assets/white-phone.svg'
import { AnimatePresence, motion } from "framer-motion"


const AlderSimple = () => {

    const [showModal, setShowModal] = useState(false)

    return(
        <div className="w-full max-w-7xl bg-cover bg-center h-[500px]" style={{
            backgroundImage: 'url(https://res.cloudinary.com/alder/image/upload/q_auto,f_auto/v1547764880/screenshot.png)'
        }}>
            <div className="w-full h-full bg-[#24586ed9]/[.5] flex flex-col justify-center items-center px-4 gap-6">

                <h2 className="text-white text-4xl text-center md:text-6xl font-medium">See Alder Simple in action</h2>

                <p className="text-white font-medium text-center">DIY installation has never been more simple</p>

                <div className="flex flex-col xs:flex-row gap-4">

                    <button onClick={() => setShowModal(!showModal)} className="flex gap-2 items-center text-white border-2 border-white px-4 py-2 rounded-full hover:scale-105 hover:-translate-y-[2px] transition duration-100"><img alt="play button" src={play}/> Watch The Video</button>

                    <a href="tel:800-710-1289" className="flex items-center justify-center gap-2 bg-[#168359] hover:bg-[#13724e] h-10 w-48 rounded-3xl border-2 z-10 hover:scale-105 hover:-translate-y-[2px] transition duration-100 border-white">
                        <img alt="phone icon" src={whitePhone}/>
                        <p className="text-white text-[15px]">Contact Us</p>
                    </a>

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
                <VideoModal showModal={showModal} setShowModal={setShowModal} videoURL="https://www.youtube.com/embed/3MTkM5_70uk"/>
                </motion.div>
                : null
            }
            </AnimatePresence>

        </div>
    )
}

export default AlderSimple