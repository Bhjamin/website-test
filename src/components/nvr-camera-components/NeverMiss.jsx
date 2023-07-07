import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import alderNvr from "../../assets/Group35.png"

const NeverMiss = () => {


    const [seeReadMore, setSeeReadMore] = useState(false)


    return (
        <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row py-12 px-8 justify-between">

            <div className="flex flex-col w-full items-center lg:w-[55%] gap-4 lg:gap-8">

                <h1 className="text-[#58585B] text-3xl xs:text-4xl font-medium w-full text-center lg:text-left">Never miss an important moment around your home</h1>

                <img className=" w-[250px] h-[150px] sm:w-[425px] sm:h-[250px] flex lg:hidden" alt="Alder NVR cameras" src={alderNvr} />

                <p className="text-[#58585B] text-[13px] hidden lg:flex font-medium text-center md:text-left leading-7">With the increasing need for home security, monitoring your property remotely has become more convenient and accessible
                    than ever before. Thanks to modern technology, it is now possible to view your NVR cameras from your mobile device,
                    whether it’s an iOS or Android smartphone or even your computer. With the help of a mobile app, you can access and
                    monitor your home cameras from anywhere in the world. This means that you can keep an eye on your property, loved ones,
                    and pets, even when you’re away from home. With features such as live streaming, playback, and alerts, viewing your NVR
                    cameras from your mobile device is a reliable and ecient way to ensure the safety and security of your home.</p>

                <p className="text-[#58585B] text-[13px] w-full sm:w-3/4 font-medium text-center flex lg:hidden leading-7">
                    With the increasing need for home security, monitoring your property remotely has become more convenient and accessible
                    than ever before.
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
                                    Have peace of mind that you will have a
                                    secure record of everything that happens around your home. When you use the camera, you can be confident that your
                                    security data is kept private and secure. One of the ways this is achieved, is by using advanced encryption technology to
                                    protect your data. All data transmitted from indoor camera is encrypted using industry-standard protocols, ensuring that it
                                    cannot be intercepted or tampered with by third parties. This means that your security data, including video footage, is
                                    protected from unauthorized access or theft.
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

                <img className="w-full hidden lg:flex " alt="Alder NVR cameras" src={alderNvr} />

                <p className="text-[#58585B] font-medium hidden lg:flex">Alder NVR</p>

            </div>

        </div>
    )
}

export default NeverMiss