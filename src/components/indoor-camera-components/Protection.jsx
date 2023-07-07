import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import indoorCamera from '../../assets/indoor-camera/eufyIndoorCamera.png'

const Protection = () => {


    const [seeReadMore, setSeeReadMore] = useState(false)


    return (
        <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row py-12 px-8 justify-between">

            <div className="flex flex-col w-full items-center lg:w-[55%] gap-4 lg:gap-8">

                <h1 className="text-[#58585B] text-4xl font-medium w-full text-center lg:text-left">Protects You, Your Family, and Your Privacy</h1>

                <img className=" w-[250px] h-[150px] sm:w-[425px] sm:h-[250px] flex lg:hidden" src={indoorCamera} alt="eufy indoor camera" />

                <p className="text-[#58585B] text-[13px] hidden lg:flex font-medium text-center md:text-left leading-7">Every eufy indoor camera is engineered to ensure your security data is kept private. Have peace of mind that you will have a
                    secure record of everything that happens around your home. When you use the camera, you can be confident that your
                    security data is kept private and secure. One of the ways this is achieved, is by using advanced encryption technology to
                    protect your data. All data transmitted from indoor camera is encrypted using industry-standard protocols, ensuring that it
                    cannot be intercepted or tampered with by third parties. This means that your security data, including video footage, is
                    protected from unauthorized access or theft.</p>

                <p className="text-[#58585B] text-[13px] font-medium text-center flex lg:hidden leading-7">
                Every eufy indoor camera is engineered to ensure your security data is kept private.
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

                <img className="w-full hidden lg:flex " src={indoorCamera} alt="eufy indoor camera" />

                <p className="text-[#58585B] font-medium hidden lg:flex">Eufy Indoor Camera</p>

            </div>

        </div>
    )
}

export default Protection