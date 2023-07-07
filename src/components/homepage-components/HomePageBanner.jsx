import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import Family from '../../assets/family-front-door-Opt.jpg'
import play from '../../assets/play.svg'
import mobilePhoneGreen from '../../assets/mobilePhoneGreen.svg'
import MobileHomeBanner from '../../assets/index/alder-simple-Mobile.jpg'
import VideoModal from "../VideoModal"

const HomePageBanner = () => {


    let screenWidth = window.innerWidth


    let { scrollYProgress } = useScroll()
    let y = useTransform(scrollYProgress, [0, 1], ['0%', '150%'])

    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <motion.div className={`w-full`} style={{
                backgroundImage: `url(${screenWidth > 768 ? Family : MobileHomeBanner})`,
                height: '80vh',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                y,
            }}>

                <div className=" md:bg-gradient-to-r md:from-white md:to-transparent md:to-50% md:justify-normal justify-end pb-5 h-full w-full flex flex-col items-center pt-36 gap-3 ">

                    <div className=" md:ml-16 w-full md:w-3/4 flex flex-col items-center md:items-start md:mr-60 gap-5">

                        <h1 className=" font-medium text-white text-4xl md:text-7xl md:text-[#58585b]">Total Life Safety</h1>
                        <p className=" text-white md:text-[#58585b] font-medium text-[24px]">We protect it.</p>

                        <div className="flex flex-col items-center z-50 md:flex-row gap-2">

                            <button onClick={() => setShowModal(!showModal)} className="flex items-center justify-center gap-2 bg-[#168359] hover:bg-[#14734f] hover:scale-105 transition duration-100 h-10 w-48 rounded-3xl border-2 border-white">
                                <img alt="play button icon" src={play} />
                                <p className="text-white text-[15px]">Watch The Video</p>
                            </button>

                            <a href="tel:800-710-1289" className="flex items-center justify-center gap-2 bg-[#ffffff] hover:bg-[#e6e6e6] hover:scale-105 transition duration-100 h-10 w-48 rounded-3xl border-2 border-[#168359]">
                                <img alt="phone icon" src={mobilePhoneGreen} />
                                <p className="text-[#168359] text-[15px]">Call Now for a Quote</p>
                            </a>

                        </div>
                    </div>

                </div>

            </motion.div>

            <AnimatePresence mode="popLayout">
            {showModal ?
                <motion.div
                className="fixed top-0 left-0 right-0 bottom-0 z-[75] flex justify-center items-center"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                >
                <VideoModal showModal={showModal} setShowModal={setShowModal} />
                </motion.div>
                : null
            }
            </AnimatePresence>
        </>
    )
}

export default HomePageBanner