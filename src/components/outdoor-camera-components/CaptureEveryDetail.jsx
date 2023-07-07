import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import outdoorCameras from '../../assets/outdoor-camera/outdoorCameras.png'

const CaptureEveryDetail = () => {


    const [seeReadMore, setSeeReadMore] = useState(false)


    return (
        <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row py-12 px-8 justify-between">

            <div className="flex flex-col w-full items-center lg:w-[55%] gap-4 lg:gap-8">

                <h1 className="text-[#58585B] text-4xl sm:text-5xl font-medium w-full text-center lg:text-left">Capture Every Detail</h1>

                <img className=" w-[275px] h-[175px] sm:w-[425px] sm:h-[250px] flex lg:hidden" src={outdoorCameras} alt="2 eufy outdoor security cameras" />

                <p className="text-[#58585B] text-[13px] hidden lg:flex font-medium text-center md:text-left leading-7">The eufy SoloCam is designed to capture every detail with clarity and precision. This is essential when it comes to monitoring
                    your home, as it ensures that you have a clear view of any potential threats or incidents. The camera captures high-definition
                    video footage at a resolution of 2k, providing you with crisp and clear images of everything that is happening in and around
                    your property. With its advanced image sensors and high-quality optics, the SoloCam is able to capture every detail with
                    exceptional clarity, making it easy to identify people, objects, and other important details. This level of detail is crucial for
                    providing you with a complete picture of what is happening, giving you the confidence and peace of mind to know that your
                    home is being monitored effectively.</p>

                <p className="text-[#58585B] text-[13px] font-medium text-center flex lg:hidden leading-7">
                    The eufy SoloCam is designed to capture every detail with clarity and precision.
                </p>

                <AnimatePresence mode='popLayout'>
                    {
                        seeReadMore ?
                            <motion.div className='w-full flex flex-col items-center z-0 gap-8'
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: .25 }}
                                exit={{ y: -100, opacity: 0 }}
                            >

                                <p className="text-[#58585B] text-[13px] font-medium text-center flex lg:hidden leading-7">
                                    This is essential when it comes to monitoring
                                    your home, as it ensures that you have a clear view of any potential threats or incidents. The camera captures high-definition
                                    video footage at a resolution of 2k, providing you with crisp and clear images of everything that is happening in and around
                                    your property. With its advanced image sensors and high-quality optics, the SoloCam is able to capture every detail with
                                    exceptional clarity, making it easy to identify people, objects, and other important details. This level of detail is crucial for
                                    providing you with a complete picture of what is happening, giving you the confidence and peace of mind to know that your
                                    home is being monitored effectively.
                                </p>

                                <button onClick={() => setSeeReadMore(!seeReadMore)} className="bg-[#297CA3] flex lg:hidden text-white px-4 py-2 rounded-full active:scale-105 active:shadow-2xl" >
                                Close
                                </button>

                            </motion.div>
                            : null
                    }
                </AnimatePresence>

                {

                    seeReadMore ? null
                        :

                        <button onClick={() => setSeeReadMore(!seeReadMore)} className="bg-[#297CA3] flex lg:hidden text-white px-4 py-2 rounded-full active:scale-105 active:shadow-2xl" >
                            Read More
                        </button>
                }

            </div>

            <div className=" w-full lg:w-[35%] flex flex-col items-center justify-center">

                <img className="w-full hidden lg:flex " src={outdoorCameras} alt="2 eufy outdoor security cameras" />

                <p className="text-[#58585B] font-medium hidden lg:flex">Eufy Outdoor Camera</p>

            </div>

        </div>
    )
}

export default CaptureEveryDetail