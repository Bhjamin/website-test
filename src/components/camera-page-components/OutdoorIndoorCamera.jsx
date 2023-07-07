
import arrow from '../../assets/up-arrow.svg'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import outdoorCamera from '../../assets/cameras/Rectangle27.png'
import indoorCamera from '../../assets/cameras/Rectangle28.png'
import NVRcamera from '../../assets/Group35.png'

const OutdoorIndoorCamera = () => {


    const [seeMoreOutdoor, setSeeMoreOutdoor] = useState(false)
    const [seeMoreIndoor, setSeeMoreIndoor] = useState(false)
    const [seeMoreNvr, setSeeMoreNvr] = useState(false)
    const [seeMoreAdvantages, setSeeMoreAdvantages] = useState(false)


    const OutdoorToggleHandler = () => {

        setSeeMoreOutdoor(!seeMoreOutdoor)

    }

    const IndoorToggleHandler = () => {

        setSeeMoreIndoor(!seeMoreIndoor)

    }

    const NvrToggleHandler = () => {

        setSeeMoreNvr(!seeMoreNvr)

    }

    const AdvantageToggleHandler = () => {

        setSeeMoreAdvantages(!seeMoreAdvantages)

    }



    return (
        <div className="flex w-full flex-col items-center gap-6 my-4">

            <div className="flex flex-col items-center w-full max-w-6xl">

                <div className=" w-full flex flex-col z-20 md:flex-row">

                    <div className="bg-right bg-cover sm:w-full h-60 md:h-96 md:w-1/2" style={{
                        backgroundImage: `url(${outdoorCamera})`
                    }} />

                    <div className="bg-[#F3F3F3] w-full md:w-1/2 md:h-96 flex flex-col items-center text-center md:items-start md:text-left justify-center gap-5 py-4 px-4 md:px-12">

                        <h3 className=" text-5xl text-[#58585B] font-semibold ">Outdoor Camera</h3>

                        <p className=" text-[#58585B] text-[14px] lg:text-[16px] leading-7">The power never stops with SoloCam S40. Just 2 hours* of direct sunlight
                            each day is enough to continuously power SoloCam S40, so you never have to
                            worry about changing the battery. And when night rolls up or a rain shower
                            strikes, the built-in battery keeps the juice flowing.
                        </p>

                        <a href="/outdoor-camera" className="bg-[#168359] w-[200px] hover:bg-[#14734f] hover:scale-105 transition duration-100 sm:w-[250px] text-xs lg:text-base lg:w-[325px] shadow-xl text-white text-center font-medium border-2 border-white rounded-full inline-block px-6 py-1 ">See how the outdoor camera works</a>

                    </div>

                </div>

                <div className="w-full bg-[#E8E8E8] min-h-[64px] flex flex-col gap-4 items-center py-4 px-4 md:px-12 justify-center ">

                    <button onClick={OutdoorToggleHandler} className='flex gap-2 z-50 items-center hover:scale-105 transition duration-100'><p className='text-[#58585B]'>The advantage of outdoor security cameras</p> <img alt="dropdown arrow" className={` ${seeMoreOutdoor ? 'rotate-0' : 'rotate-180'} transition duration-200  `} src={arrow} /> </button>


                    <AnimatePresence mode='popLayout'>
                        {
                            seeMoreOutdoor ?
                                <motion.div className='w-full flex flex-col items-center z-0 bg-[#E8E8E8] gap-8'
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: .25 }}
                                    exit={{ y: -100, opacity: 0 }}
                                >

                                    <p className='text-[#58585B] w-full md:w-2/3 leading-9'>The power never stops with SoloCam S40. Just 2 hours* of direct sunlight each day is enough to continuously power
                                        SoloCam S40, so you never have to worry about changing the battery. And when night rolls up or a rain shower strikes, the
                                        built-in battery keeps the juice flowing. The 2k high-definition video that the SoloCam captures allows you to see
                                        everything in great detail, from facial features to license plates, and everything in between. This means that you’ll be able
                                        to identify any potential threats or suspicious activity with ease, even in low-light conditions, thanks to the camera’s
                                        advanced night vision capabilities. Overall, the clarity of the SoloCam’s 2k high-definition video is a key feature that sets it
                                        apart from other outdoor cameras on the market. With its ability to capture every detail, you can be confident that you’ll
                                        have a complete and accurate picture of what’s happening around your home, ensuring that you’re always one step ahead
                                        of potential threats.</p>

                                    <p className='text-[#58585B] w-full md:w-2/3'>Was this helpful? Learn more about our outdoor security camera, <a href='/outdoor-camera' className='text-[#297CA3] underline '>here.</a></p>

                                </motion.div>
                                : null
                        }
                    </AnimatePresence>


                </div>

            </div>

            <div className="flex flex-col items-center w-full max-w-6xl">

                <div className=" w-full flex flex-col z-20 md:flex-row">

                    <div className=" bg-cover bg-right sm:w-full h-60 md:h-96 md:w-1/2" style={{
                        backgroundImage: `url(${indoorCamera})`
                    }} />

                    <div className="bg-[#F3F3F3] w-full md:w-1/2 md:h-96 flex flex-col items-center text-center md:items-start md:text-left justify-center gap-5 py-4 px-4 md:px-12">

                        <h3 className=" text-5xl text-[#58585B] font-semibold ">Indoor Camera</h3>

                        <p className=" text-[#58585B] text-[14px] lg:text-[16px] leading-7">The indoor camera is engineered to ensure your security data is kept private.
                            Have peace of mind that you will have a secure record of everything that
                            happens around your home. The built-in AI notifies you of excessive noise
                            levels so you know when your little one needs some attention.</p>

                        <a href="/indoor-camera" className="bg-[#168359] w-[200px] hover:bg-[#14734f] hover:scale-105 transition duration-100 sm:w-[250px] text-xs lg:text-base lg:w-[325px] shadow-xl text-white text-center font-medium border-2 border-white rounded-full inline-block px-6 py-1 ">Learn about the Indoor camera</a>

                    </div>

                </div>

                <div className="w-full bg-[#E8E8E8] min-h-[64px] flex flex-col gap-4 items-center py-4 px-4 md:px-12 justify-center ">

                    <button onClick={IndoorToggleHandler} className='flex gap-2 z-50 items-center hover:scale-105 transition duration-100'><p className='text-[#58585B]'>The advantage of indoor security cameras</p> <img alt="dropdown arrow" className={` ${seeMoreIndoor ? 'rotate-0' : 'rotate-180'} transition duration-200  `} src={arrow} /> </button>


                    <AnimatePresence mode='popLayout'>
                        {
                            seeMoreIndoor ?
                                <motion.div className='w-full flex flex-col items-center z-0 bg-[#E8E8E8] gap-8'
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: .25 }}
                                    exit={{ y: -100, opacity: 0 }}
                                >

                                    <p className='text-[#58585B] w-full md:w-2/3 leading-9'>The 2K Indoor Cam is a versatile and powerful home security camera designed specifically for indoor surveillance. With its
                                        advanced features and capabilities, it provides an extra layer of protection and peace of mind for your home. One of the
                                        standout features of the camera is its human and pet AI. This advanced artificial intelligence technology enables the camera
                                        to intelligently detect and distinguish between humans and pets, ensuring that you receive accurate notifications and alerts.
                                        This is particularly useful in busy households with pets, as it prevents false alarms triggered by pet movements while still
                                        keeping a vigilant eye on potential human activity. Whether you’re at work, running errands, or even sleeping, the camera’s
                                        human and pet AI ensures that you stay informed about any relevant activity happening inside your home. The camera is
                                        designed to seamlessly integrate with popular voice assistants (Amazon Alexa or Google Assistant), further enhancing its
                                        convenience and usability.
                                    </p>

                                    <p className='text-[#58585B] w-full md:w-2/3'>Was this helpful? Learn more about our indoor security camera, <a href='/indoor-camera' className='text-[#297CA3] underline '>here.</a></p>

                                </motion.div>
                                : null
                        }
                    </AnimatePresence>

                </div>

            </div>

            <div className="flex flex-col items-center w-full max-w-6xl">

                <div className=" w-full flex flex-col z-20 md:flex-row">

                    <div className="bg-center bg-cover sm:w-full h-60 md:h-96 md:w-1/2" style={{
                        backgroundImage: `url(${NVRcamera})`
                    }} />

                    <div className="bg-[#F3F3F3] w-full md:w-1/2 md:h-96 flex flex-col items-center text-center md:items-start md:text-left justify-center gap-5 py-4 px-4 md:px-12">

                        <h3 className=" text-5xl text-[#58585B] font-semibold ">NVR Camera</h3>

                        <p className=" text-[#58585B] text-[14px] lg:text-[16px] leading-7">Defend your property and deter intruders with red and blue flashing lights,
                            spotlights and sirens. With 2K video, you see amazing details, close ups and
                            ultra-wide angles. Use premium 2-way audio to talk to visitors or warn-off unwelcome people. Full color night vision lets you see people, objects and activity, turns night into day.
                        </p>

                        <a href="/nvr-camera" className="bg-[#168359] w-[200px] hover:bg-[#14734f] hover:scale-105 transition duration-100 sm:w-[250px] text-xs lg:text-base lg:w-[325px] shadow-xl text-white text-center font-medium border-2 border-white rounded-full inline-block px-6 py-1 ">Learn about the NVR camera</a>

                    </div>

                </div>

                <div className="w-full bg-[#E8E8E8] min-h-[64px] flex flex-col gap-4 items-center py-4 px-4 md:px-12 justify-center ">

                    <button onClick={NvrToggleHandler} className='flex gap-2 z-50 items-center hover:scale-105 transition duration-100'><p className='text-[#58585B]'>The advantage of NVR security cameras</p> <img alt="dropdown arrow" className={` ${seeMoreNvr ? 'rotate-0' : 'rotate-180'} transition duration-200  `} src={arrow} /> </button>


                    <AnimatePresence mode='popLayout'>
                        {
                            seeMoreNvr ?
                                <motion.div className='w-full flex flex-col items-center z-0 bg-[#E8E8E8] gap-8'
                                    initial={{ y: -100, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: .25 }}
                                    exit={{ y: -100, opacity: 0 }}
                                >

                                    <p className='text-[#58585B] w-full md:w-2/3 leading-9'>Our 2K professional outdoor camera system lets you view your world in more detail than ever before with real-time 4MP
                                        QHD recording. The NVR’s power over ethernet ports make setup quick and easy, with one cable installation per camera
                                        that provides both power and HD video. Wide 120° angle lenses provide extensive video coverage from every camera.
                                        Intelligent AI technology knows the difference between a person and vehicles for more reliable monitoring and fewer false
                                        alarms. Personalize how you get notified & create custom activity zones to ensure you only get accurate alerts for what
                                        matters most and see what’s happening with 2K incredible video from anywhere, total peace of mind in the palm of your
                                        hand. Know what’s happening on smart devices through the free Homeguardsafe app with this QHD 2K security system to
                                        suit homes, offices, small businesses and retail stores.</p>

                                    <p className='text-[#58585B] w-full md:w-2/3'>Was this helpful? Learn more about your NVR security camera, <a href='/nvr-camera' className='text-[#297CA3] underline '>here.</a></p>

                                </motion.div>
                                : null
                        }
                    </AnimatePresence>


                </div>

            </div>

            <div className="w-full max-w-6xl bg-[#E8E8E8] min-h-[64px] flex flex-col gap-4 items-center py-4 px-4 md:px-12 justify-center ">

                <button onClick={AdvantageToggleHandler} className='flex gap-2 z-50 items-center hover:scale-105 transition duration-100'><p className='text-[#58585B]'>The advantages of video surveillance cameras for home security</p> <img alt="dropdown arrow" className={` ${seeMoreAdvantages ? 'rotate-0' : 'rotate-180'} transition duration-200  `} src={arrow} /> </button>


                <AnimatePresence mode='popLayout'>
                    {
                        seeMoreAdvantages ?
                            <motion.div className='w-full flex flex-col items-center z-0 bg-[#E8E8E8] gap-8'
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: .25 }}
                                exit={{ y: -100, opacity: 0 }}
                            >

                                <p className='text-[#58585B] w-full md:w-2/3 leading-9'>Looking for an easy way to monitor doorways from inside or outside? Keep tabs on pets while you're at work during the day? Or check up on kids playing in the back yard while you're busy inside?</p>

                                <p className='text-[#58585B] w-full md:w-2/3 leading-9'>
                                    The crystal-clear imaging of modern home security cameras puts you right in front of the action whether you’re at home or miles away. And the best value for money spent on security cameras comes from using them as the eyes of a complete home security system. The cameras we pair with our home security packages all come with high-resolution video to capture every detail, a wide-angle lens to put entire rooms on the viewscreen, and infrared night vision to make 'round-the-clock protection almost effortless. All our cameras transmit a video feed over Wi-Fi, plus they’re battery-powered for the hassle-free experience of totally wireless engineering and as many installation options as possible. And for renters who don’t have permission to hang security cameras outside their home, you could even point an indoor camera out a front window for an improvised outdoor security camera. It works great!
                                </p>

                            </motion.div>
                            : null
                    }
                </AnimatePresence>

            </div>

        </div>
    )
}

export default OutdoorIndoorCamera