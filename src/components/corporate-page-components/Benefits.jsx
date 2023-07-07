import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import logo from '../../assets/corporate/whiteLogo.svg'
import utensils from '../../assets/corporate/utensils.svg'
import growth from '../../assets/corporate/growth.svg'
import dumbbell from '../../assets/corporate/gym.svg'
import schedule from '../../assets/corporate/schedule.svg'
import pay from '../../assets/corporate/pay.svg'
import whiteArrow from '../../assets/whiteArrow.svg'

const Benefits = () => {

    const [slide, setSlide] = useState(1)
    const [canClick, setCanClick] = useState(true)

    const setSlideHandler = (bool) => {

        setCanClick(false)

        bool & slide < 6 && setSlide(slide + 1)
        bool & slide === 6 && setSlide(1)

        !bool & slide > 1 && setSlide(slide - 1)
        !bool & slide === 1 && setSlide(6)

        let timeoutId = setTimeout(() => {
            setCanClick(true)
        }, 500)

    }


    return (
        <div className="w-full bg-[#297CA3] flex flex-col items-center gap-6 py-12 px-4 md:px-12">

            <h3 className="text-white text-6xl font-medium">Benefits</h3>
            <p className="text-white text-2xl text-center" >You're going to like it here.</p>

            <br />

            <div className="w-full sm:flex hidden flex-wrap justify-center gap-12 mt-2 ">

                <div className="flex flex-col items-center w-1/4">
                    <img className="w-[80px] h-[80px]" alt="alder security logo" src={logo} />
                    <p className="text-white text-3xl text-center">Culture</p>
                    <br />
                    <p className="text-white text-center">We're a team. Others say it, we live it. We work hard, but we play even harder.</p>
                </div>

                <div className="flex flex-col items-center w-1/4">
                    <img className="w-[80px] h-[80px]" alt="eating utensils icon" src={utensils} />
                    <p className="text-white text-3xl text-center">Free Lunch Friday</p>
                    <br />
                    <p className="text-white text-center">Every Friday lunch is on us.</p>
                </div>

                <div className="flex flex-col items-center w-1/4">
                    <img className="w-[80px] h-[80px]" alt="growth chart icon" src={growth} />
                    <p className="text-white text-3xl text-center">Growth Opportunity</p>
                    <br />
                    <p className="text-white text-center">We need leaders. We'll give you everything you need to start a career, not just another job.</p>
                </div>

                <div className="flex flex-col items-center w-1/4">
                    <img className="w-[80px] h-[80px]" alt="dumbbell" src={dumbbell} />
                    <p className="text-white text-3xl text-center">Free CrossFit</p>
                    <br />
                    <p className="text-white text-center">Feel free to enjoy our custom-built, state of the art CrossFit gym. It's easily one of Utah's best.</p>
                </div>

                <div className="flex flex-col items-center w-1/4">
                    <img className="w-[80px] h-[80px]" alt="calender icon" src={schedule} />
                    <p className="text-white text-3xl text-center">Flexible Schedule</p>
                    <br />
                    <p className="text-white text-center">If you're the right fit for our team, we're more than happy to work around your schedule.</p>
                </div>

                <div className="flex flex-col items-center w-1/4">
                    <img className="w-[80px] h-[80px]" alt="piggy bank icon" src={pay} />
                    <p className="text-white text-3xl text-center">Competitive Pay</p>
                    <br />
                    <p className="text-white text-center">We cherish our employees. As such, we always provide them with competitive pay.</p>
                </div>

            </div>

            <div className="w-full flex flex-col items-center sm:hidden">

                <AnimatePresence mode="wait" >
                    {slide === 1 ? (


                        <motion.div className="flex flex-col items-center gap-4 w-full h-[200px]"
                            key={1}
                            initial={{ x: -500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: .25, type: 'spring', bounce: .1 }}
                            exit={{ x: 500, opacity: 0 }}
                        >
                            <img className="w-[55px] h-[55px]" src={logo} />
                            <p className="text-white text-3xl text-center">Culture</p>
                            <p className="text-white text-center">We're a team. Others say it, we live it. We work hard, but we play even harder.</p>
                        </motion.div>
                    )

                        : null}

                    {slide === 2 ? (


                        <motion.div className="flex flex-col items-center gap-4 w-full h-[200px]"
                            key={2}
                            initial={{ x: -500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: .25, type: 'spring', bounce: .1 }}
                            exit={{ x: 500, opacity: 0 }}
                        >
                            <img className="w-[55px] h-[55px]" src={utensils} />
                            <p className="text-white text-3xl text-center">Free Lunch Friday</p>
                            <p className="text-white text-center">Every Friday lunch is on us.</p>
                        </motion.div>
                    )

                        : null}

                    {slide === 3 ? (

                        <motion.div className="flex flex-col items-center gap-4 w-full h-[200px]"
                            key={3}
                            initial={{ x: -500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: .25, type: 'spring', bounce: .1 }}
                            exit={{ x: 500, opacity: 0 }}
                        >
                            <img className="w-[55px] h-[55px]" src={growth} />
                            <p className="text-white text-3xl text-center">Growth Opportunity</p>
                            <p className="text-white text-center">We need leaders. We'll give you everything you need to start a career, not just another job.</p>
                        </motion.div>
                    )

                        : null}

                    {slide === 4 ? (

                        <motion.div className="flex flex-col items-center gap-4 w-full h-[200px]"
                            key={4}
                            initial={{ x: -500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: .25, type: 'spring', bounce: .1 }}
                            exit={{ x: 500, opacity: 0 }}
                        >
                            <img className="w-[55px] h-[55px]" src={dumbbell} />
                            <p className="text-white text-3xl text-center">Free CrossFit</p>
                            <p className="text-white text-center">Feel free to enjoy our custom-built, state of the art CrossFit gym. It's easily one of Utah's best.</p>
                        </motion.div>
                    )

                        : null}


                    {slide === 5 ? (

                        <motion.div className="flex flex-col items-center gap-4 w-full h-[200px]"
                            key={5}
                            initial={{ x: -500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: .25, type: 'spring', bounce: .1 }}
                            exit={{ x: 500, opacity: 0 }}
                        >
                            <img className="w-[55px] h-[55px]" src={schedule} />
                            <p className="text-white text-3xl text-center">Flexible Schedule</p>
                            <p className="text-white text-center">If you're the right fit for our team, we're more than happy to work around your schedule.</p>
                        </motion.div>
                    )

                        : null}


                    {slide === 6 ? (

                        <motion.div className="flex flex-col items-center gap-4 w-full h-[200px]"
                            key={6}
                            initial={{ x: -500, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: .25, type: 'spring', bounce: .1 }}
                            exit={{ x: 500, opacity: 0 }}
                        >
                            <img className="w-[55px] h-[55px]" src={pay} />
                            <p className="text-white text-3xl text-center">Competitive Pay</p>
                            <p className="text-white text-center">We cherish our employees. As such, we always provide them with competitive pay.</p>
                        </motion.div>
                    )

                        : null}
                </AnimatePresence>

                <br/>
                <br/>

                <div className="w-full flex items-center justify-between">
                    <button disabled={!canClick} onClick={() => setSlideHandler(false)} ><img className="rotate-180 w-8" src={whiteArrow} /></button>
                    <div className={` w-3 h-3 xs:w-4 xs:h-4 rounded-full border-[1px] ${slide === 1 ? 'bg-white' : 'bg-transparent'} `} />
                    <div className={` w-3 h-3 xs:w-4 xs:h-4 rounded-full border-[1px] ${slide === 2 ? 'bg-white' : 'bg-transparent'} `} />
                    <div className={` w-3 h-3 xs:w-4 xs:h-4 rounded-full border-[1px] ${slide === 3 ? 'bg-white' : 'bg-transparent'} `} />
                    <div className={` w-3 h-3 xs:w-4 xs:h-4 rounded-full border-[1px] ${slide === 4 ? 'bg-white' : 'bg-transparent'} `} />
                    <div className={` w-3 h-3 xs:w-4 xs:h-4 rounded-full border-[1px] ${slide === 5 ? 'bg-white' : 'bg-transparent'} `} />
                    <div className={` w-3 h-3 xs:w-4 xs:h-4 rounded-full border-[1px] ${slide === 6 ? 'bg-white' : 'bg-transparent'} `} />
                    <button disabled={!canClick} onClick={() => setSlideHandler(true)} ><img className="w-8" src={whiteArrow} /></button>
                </div>

            </div>


        </div>
    )
}

export default Benefits