import { useState } from "react"
import { AnimatePresence, motion, useAnimation } from "framer-motion"
import arrow from '../../assets/up-arrow.svg'
import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'

const FAQ = () => {

    const spinAnimation1 = useAnimation()
    const spinAnimation2 = useAnimation()
    const spinAnimation3 = useAnimation()
    const spinAnimation4 = useAnimation()
    const spinAnimation5 = useAnimation()

    const [showAll, setShowAll] = useState(false)
    const [showFirst, setShowFirst] = useState(false)
    const [showSecond, setShowSecond] = useState(false)
    const [showThird, setShowThird] = useState(false)
    const [showFourth, setShowFourth] = useState(false)
    const [showFifth, setShowFifth] = useState(false)

    const showFirstToggler = () => {
        showFirst ? 
        spinAnimation1.start({
            rotate: 90
        }) :
        spinAnimation1.start({
            rotate: 180
        })
        setShowFirst(!showFirst)
    }
    
    const showSecondToggler = () => {
        showSecond ? 
        spinAnimation2.start({
            rotate: 90
        }) :
        spinAnimation2.start({
            rotate: 180
        })
        setShowSecond(!showSecond)
    }
    
    const showThirdToggler = () => {
        showThird ? 
        spinAnimation3.start({
            rotate: 90
        }) :
        spinAnimation3.start({
            rotate: 180
        })
        setShowThird(!showThird)
    }

    const showFourthToggler = () => {
        showFourth ? 
        spinAnimation4.start({
            rotate: 90
        }) :
        spinAnimation4.start({
            rotate: 180
        })
        setShowFourth(!showFourth)
    }

    const showFifthToggler = () => {
        showFifth ? 
        spinAnimation5.start({
            rotate: 90
        }) :
        spinAnimation5.start({
            rotate: 180
        })
        setShowFifth(!showFifth)
    }

    return(
        <div className=" bg-[#F1F1F2] w-full max-w-6xl py-6 my-8 flex flex-col gap-8 items-center ">

            <h3 className="text-[#58585B] text-xl w-[90%] lg:text-4xl font-medium lg:w-1/2 text-center ">More Helpful FAQs for Finding the
            Best Security Cameras for your Home.</h3>

            <button onClick={() => setShowAll(!showAll)} className="w-1/3 h-10 flex justify-center"><img alt="dropdown arrow" className={` ${showAll ? 'rotate-0' : 'rotate-180'} transition duration-100 `} src={arrow} /></button>

            <AnimatePresence mode="popLayout">
            {
                showAll ? 

                <motion.div 
                initial={{y: -100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                exit={{y: -100, opacity: 0}}
                className="w-4/5 bg-[#F1F1F2] flex flex-col items-center"
                >

                    <div className="w-full py-8 border-y-[1px] flex flex-col border-[#7c7c7c]">
                        <button onClick={showFirstToggler} className="w-full flex flex-row justify-between items-center">
                            <p className="text-[#58585B] text-base md:text-2xl font-medium">Top features to consider when choosing home security cameras</p>
                            <motion.img animate={spinAnimation1} src={ showFirst ? minus : plus } />
                        </button>
                        <AnimatePresence mode="popLayout">
                        {
                            showFirst ?
                            
                            <motion.div className="flex flex-col w-full gap-6" 
                            initial={{y: -100, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            exit={{y: -100, opacity: 0}}
                            >
                            <br/>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[#58585B] text-lg font-medium ">Night Vision</h3>
                                    <p className="text-[#58585B] text-sm ">Night vision functionality is a standard feature among most home security cameras on the market today. It’s what makes a security camera useful for 24/7 video surveillance. Better-quality security cameras will offer more advanced forms of night vision recording to provide the clearest and most detailed nighttime recordings for the most credible home security video archive possible.</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[#58585B] text-lg font-medium ">Motion Detection</h3>
                                    <p className="text-[#58585B] text-sm ">Motion sensors built into modern home security cameras will activate video recording and send out mobile alerts whenever someone enters the field of view. Most homeowners prefer a more high-tech version of motion detection to avoid getting constant pointless notifications each time a random object moves in front of their security camera lens. Security cameras equipped with smart motion detection will have AI, facial recognition, or at least basic IFTTT settings to distinguish between people and things. That means users only get helpful alerts and video recordings of events that matter.</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[#58585B] text-lg font-medium ">HD Resolution</h3>
                                    <p className="text-[#58585B] text-sm ">Because blurry and pixelated video images are unhelpful, any home security camera worth using will include HD image resolution. In fact, some wired security cameras capture recordings in 4K/8MP. But, to capture the convenience and near-unlimited installation options of a totally wireless device, Alder offers totally wireless home security cameras with 1080p HD resolution to blend maximum battery life with great image quality. We find that to be the best of both worlds.</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[#58585B] text-lg font-medium ">Two-Way Audio</h3>
                                    <p className="text-[#58585B] text-sm ">While keeping watchful eyes on what’s outside your home, you can also engage in two-way voice communication with anyone in range. It’s just like talking to someone face-to-face, but you’re within the comfort and safety of your abode. Say goodbye to the uncertainty of surprise doorbell rings or suspicious sounds outside. Say hello to increased peace of mind.</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[#58585B] text-lg font-medium ">Wide-Angle Lens</h3>
                                    <p className="text-[#58585B] text-sm ">For more coverage with fewer cameras, look for home security cameras equipped with a wide-angle lens. Any security camera with a field of view of 80 degrees or greater fits into the category of wide-angle. Wide-angle security cameras cover broad areas such as an entire room or large section of a yard.</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[#58585B] text-lg font-medium ">All wireless</h3>
                                    <p className="text-[#58585B] text-sm ">Don’t get confused by the word ‘wireless’ if you open the box and find the security camera you bought came tethered to a power cord. The term ‘wireless’ technically refers to the method of transmitting the video stream to a storage repository like a DVR or hard drive. Alder takes the confusion out of the equation by only offering totally wire-free security cameras, which means they transmit wirelessly over WiFi and get powered by rechargeable batteries, so no power cable needed.</p>
                                </div>

                            </motion.div>
                            
                            : null
                        }
                        </AnimatePresence>
                    </div>

                    <div className="w-full py-8 border-b-[1px] flex flex-col border-[#7c7c7c]">
                        <button onClick={showSecondToggler} className="w-full flex flex-row justify-between items-center">
                            <p className="text-[#58585B] text-base md:text-2xl font-medium">Where should outdoor home security cameras be placed?</p>
                            <motion.img animate={spinAnimation2} src={ showSecond ? minus : plus } />
                        </button>
                        <AnimatePresence mode="popLayout">
                        {
                            showSecond ?
                            
                            <motion.div className="flex flex-col w-full gap-6" 
                            initial={{y: -100, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            exit={{y: -100, opacity: 0}}
                            >
                            <br/>
                            <p className="text-[#58585B] text-sm ">Totally wireless outdoor security cameras give you almost unlimited options for installing them around your property. It’s recommended to install them about 10 feet off the ground to monitor your driveways, doorways, and backyards. And keep in mind, wide angle cameras mean more coverage with fewer devices. But for total coverage, consider creating concentric rings of surveillance by mounting one ring of cameras around the perimeter of your house pointing outward, and another ring further out—like around your property line if possible—pointing back in. Some wireless camera owners have even been known to install them in trees around their yard.</p>
                            </motion.div>
                            
                            : null
                        }
                        </AnimatePresence>
                    </div>

                    <div className="w-full py-8 border-b-[1px] flex flex-col border-[#7c7c7c]">
                        <button onClick={showThirdToggler} className="w-full flex flex-row justify-between items-center">
                            <p className="text-[#58585B] text-base md:text-2xl font-medium">Where should security cameras be installed inside the home?</p>
                            <motion.img animate={spinAnimation3} src={ showThird ? minus : plus } />
                        </button>
                        <AnimatePresence mode="popLayout">
                        {
                            showThird ?
                            
                            <motion.div className="flex flex-col w-full gap-6" 
                            initial={{y: -100, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            exit={{y: -100, opacity: 0}}
                            >
                            <br/>
                            <p className="text-[#58585B] text-sm ">For security purposes, indoor cameras should be installed where they’ll have a clear view of the places where an intruder is most likely to enter. That is the front door, back door, and any first-floor windows that are easy to access from the outside. Place wide angle cameras somewhere that puts their full range to use, like covering an entire living room, for example. And use more narrowly focused cameras to cover corridors, hallways, and entryways. Where possible, place indoor cameras up high and out of reach to prevent any tampering.</p>
                            </motion.div>
                            
                            : null
                        }
                        </AnimatePresence>
                    </div>
                    
                    <div className="w-full py-8 border-b-[1px] flex flex-col border-[#7c7c7c]">
                        <button onClick={showFourthToggler} className="w-full flex flex-row justify-between items-center">
                            <p className="text-[#58585B] text-base md:text-2xl font-medium">How do home security cameras deter crime?</p>
                            <motion.img animate={spinAnimation4} src={ showFourth ? minus : plus } />
                        </button>
                        <AnimatePresence mode="popLayout">
                        {
                            showFourth ?
                            
                            <motion.div className="flex flex-col w-full gap-6" 
                            initial={{y: -100, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            exit={{y: -100, opacity: 0}}
                            >
                            <br/>
                            <div className="flex flex-col w-full gap-5">

                            <p className="text-[#58585B] text-sm ">Several studies have confirmed that burglary is a crime of opportunity rather than a mastermind scheme ingeniously plotted out by a dedicated professional. Most of the time, burglars enter homes hoping to be in and out in under five minutes with an armload of cash, jewelry, electronics, and car keys—anything that can be sold off quickly for an easy payday. And based on testimony taken from a panel of former burglars who were polled by an insurance company, home security cameras are the biggest deterrent to their attempts, followed by barking dogs.</p>

                            <p className="text-[#58585B] text-sm ">
                            So, considering how many people take no home security measures at all, how many sleep with open windows and unlocked doors, and how many will broadcast on social media when they’re gone for vacation, fortifying your home with the outward appearance of a negative opportunity for would-be burglars among so many easier targets is one of the significant crime deterring influences of home security cameras.
                            </p>

                            <p className="text-[#58585B] text-sm ">
                            Then, if a burglar is ever bold enough to break into your home despite your surveillance camera coverage, your security footage provides police with reliable evidence to help them solve the crime. For example, security video helps verify where the thief went in your home, at what time, and in what order they progressed from points A to B to C. Plus, the security footage corroborates other types of evidence, like the time stamp on the alarm and suspect descriptions from available witnesses, all of which create an accurate pattern of facts that helps police align their investigative steps with the evidence on hand.   
                            </p>

                            </div>
                            </motion.div>
                            
                            : null
                        }
                        </AnimatePresence>
                    </div>
                    
                    <div className="w-full py-8 border-b-[1px] flex flex-col border-[#7c7c7c]">
                        <button onClick={showFifthToggler} className="w-full flex flex-row justify-between items-center">
                            <p className="text-[#58585B] text-base md:text-2xl font-medium">How do home security cameras survive in severe weather?</p>
                            <motion.img animate={spinAnimation5} src={ showFifth ? minus : plus } />
                        </button>
                        <AnimatePresence mode="popLayout">
                        {
                            showFifth ?
                            
                            <motion.div className="flex flex-col w-full gap-6" 
                            initial={{y: -100, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            exit={{y: -100, opacity: 0}}
                            >
                            <br/>
                            <p className="text-[#58585B] text-sm ">Because in most locations, weather can swing to extremes on both ends of the spectrum, the most reliable home security cameras are those that can withstand wind, water, dust, heat, cold, and flying debris. That’s why Alder selects security cameras with an IP65 rating. That means water droplets falling from above, jets of water blasted from any angle, and even outright submersion won’t compromise your security camera’s ability to function. Also considered in the rating is the potential for dust</p>
                            </motion.div>
                            
                            : null
                        }
                        </AnimatePresence>
                    </div>

                </motion.div>
                : null
            }
            </AnimatePresence>

        </div>
    )
}

export default FAQ