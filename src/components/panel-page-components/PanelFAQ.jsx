import { useState } from "react"
import { AnimatePresence, motion, useAnimation } from "framer-motion"
import arrow from '../../assets/up-arrow.svg'
import plus from '../../assets/plus.svg'
import minus from '../../assets/minus.svg'

const PanelFAQ = () => {

    const spinAnimation1 = useAnimation()
    const spinAnimation2 = useAnimation()
    const spinAnimation3 = useAnimation()
    const spinAnimation4 = useAnimation()
    const spinAnimation5 = useAnimation()
    const spinAnimation6 = useAnimation()

    const [showAll, setShowAll] = useState(false)
    const [showFirst, setShowFirst] = useState(false)
    const [showSecond, setShowSecond] = useState(false)
    const [showThird, setShowThird] = useState(false)
    const [showFourth, setShowFourth] = useState(false)
    const [showFifth, setShowFifth] = useState(false)
    const [showSixth, setShowSixth] = useState(false)

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

    const showSixthToggler = () => {
        showSixth ? 
        spinAnimation6.start({
            rotate: 90
        }) :
        spinAnimation6.start({
            rotate: 180
        })
        setShowSixth(!showSixth)
    }

    return(
        <div className=" bg-[#F1F1F2] w-full max-w-6xl py-6 my-8 flex flex-col gap-8 items-center ">

            <h3 className="text-[#58585B] text-xl w-[90%] lg:text-4xl font-medium lg:w-1/2 text-center ">Frequently asked questions.</h3>

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
                            <p className="text-[#58585B] text-base md:text-2xl font-medium">Will I actually be able to install an alarm system myself?</p>
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

                                    <p className="text-[#58585B] text-sm ">Yes! Our equipment is cutting edge and designed so that setting it up is as easy as sticking a magnet on your fridge. We have customers of all ages setup systems on their own. *Also, with our Simple system, you’ll be able to quickly fix issues yourself rather than taking work off for a technician visit.*</p>

                            </motion.div>
                            
                            : null
                        }
                        </AnimatePresence>
                    </div>

                    <div className="w-full py-8 border-b-[1px] flex flex-col border-[#7c7c7c]">
                        <button onClick={showSecondToggler} className="w-full flex flex-row justify-between items-center">
                            <p className="text-[#58585B] text-base md:text-2xl font-medium">Will I have to drill in screws to mount the panel/sensors?</p>
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
                            <p className="text-[#58585B] text-sm ">All the sensors have adhesive mounting, and the panel has a table mount so that you don’t have to drill anything.</p>
                            </motion.div>
                            
                            : null
                        }
                        </AnimatePresence>
                    </div>

                    <div className="w-full py-8 border-b-[1px] flex flex-col border-[#7c7c7c]">
                        <button onClick={showThirdToggler} className="w-full flex flex-row justify-between items-center">
                            <p className="text-[#58585B] text-base md:text-2xl font-medium">Can my system be disabled from the outside of my house?</p>
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
                            <p className="text-[#58585B] text-sm ">Our system uses a cellular network which can’t be tapped or disabled outside of the house. Even if someone breaks in, they won’t be able to stop any alarm signals from being sent to the Monitoring Center. Unlike other landline systems in use today</p>
                            </motion.div>
                            
                            : null
                        }
                        </AnimatePresence>
                    </div>
                    
                    <div className="w-full py-8 border-b-[1px] flex flex-col border-[#7c7c7c]">
                        <button onClick={showFourthToggler} className="w-full flex flex-row justify-between items-center">
                            <p className="text-[#58585B] text-base md:text-2xl font-medium">If my house loses power will I no longer be protected?</p>
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
                            

                            <p className="text-[#58585B] text-sm ">No, our panels have built in back up batteries that will last longer than almost all power outages. Your protection will never skip a beat</p>

                            
                            </motion.div>
                            
                            : null
                        }
                        </AnimatePresence>
                    </div>
                    
                    <div className="w-full py-8 border-b-[1px] flex flex-col border-[#7c7c7c]">
                        <button onClick={showFifthToggler} className="w-full flex flex-row justify-between items-center">
                            <p className="text-[#58585B] text-base md:text-2xl font-medium">Will one panel be able to cover my whole property?</p>
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
                            <p className="text-[#58585B] text-sm ">The sensors can be up to 100 feet from the panel allowing protection of your entire property, including an outside shed.</p>
                            </motion.div>
                            
                            : null
                        }
                        </AnimatePresence>
                    </div>

                    <div className="w-full py-8 border-b-[1px] flex flex-col border-[#7c7c7c]">
                        <button onClick={showSixthToggler} className="w-full flex flex-row justify-between items-center">
                            <p className="text-[#58585B] text-base md:text-2xl font-medium">What happens if a sensor dies or is out of range of the panel?</p>
                            <motion.img animate={spinAnimation6} src={ showSixth ? minus : plus } />
                        </button>
                        <AnimatePresence mode="popLayout">
                        {
                            showSixth ?
                            
                            <motion.div className="flex flex-col w-full gap-6" 
                            initial={{y: -100, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            exit={{y: -100, opacity: 0}}
                            >
                            <br/>

                                    <p className="text-[#58585B] text-sm ">The panel frequently pings all the sensors to make sure they are powered and within range. If a sensor does not respond, the panel will make sure you know. You can also call technical support team to fix any issue you encounter within a few minutes.</p>

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

export default PanelFAQ