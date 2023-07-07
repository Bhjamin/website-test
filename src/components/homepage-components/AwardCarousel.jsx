import { AnimatePresence, motion } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import UBLogo from '../../assets/UBLogo.svg'
import stevieSilver from '../../assets/stevie-silver.svg'
import stevie from '../../assets/stevie.svg'
import utah100 from '../../assets/utah100.svg'
import BCLogo from '../../assets/BCLogo.svg'
import fast50 from '../../assets/fast50.svg'
import goldstar from '../../assets/goldstar.svg'
import starOutline from '../../assets/index/goldstarOutline.svg'
import bestCompanyLogo from '../../assets/bestCompanyLogo.svg'



const AwardCarousel = () => {


    const [logo, setLogo] = useState(1)
    const [canClick, setCanClick] = useState(true)

    const switchLogoHandler = () => {
            setCanClick(false);
            setLogo((prevLogo) => (prevLogo === 4 ? 1 : prevLogo + 1))
            let timeoutId = setTimeout(() => {
                setCanClick(true)
            }, 1000)
    }

    const clickToLogoHandler = (num) => {
            setCanClick(false)
            setLogo(num)
            let timeoutId = setTimeout(() => {
                setCanClick(true)
            }, 1000)
    }

    useEffect(() => {

        const intervalId = setInterval(switchLogoHandler, 5000)

        return () => {
            clearInterval(intervalId)
        }

    }, [logo])

    return (
        <div className="w-full pt-2 gap-5 bg-white flex flex-col justify-center items-center overflow-x-hidden py-1 ">



            <div className="w-full h-[400px] md:h-[375px] flex justify-center px-2">
                <AnimatePresence mode="popLayout">
                    {
                        logo === 1 ?

                            <motion.div
                                className="flex items-center w-2/3 justify-evenly flex-col md:flex-row "
                                key="stevie"
                                initial={{ x: 1000, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                                exit={{ x: -1000, opacity: 0 }}
                            >

                                <img className="m-4 min-h-[100px]" src={stevieSilver} alt="stevie silver award" />

                                <div className=" w-full md:w-2/3 flex flex-col items-center gap-3 ">
                                    <h3 className=" text-xl text-center md:text-left md:text-3xl text-[#58585B]">2018 Consumer Product of the Year</h3>
                                    <p className="text-center text-[#58585B] text-base md:text-xl" >"Consumers need products like this with such easy installation and user-friendly interface!"</p>
                                </div>

                            </motion.div>

                            : null
                    }

                    {
                        logo === 2 ?

                            <motion.div
                                className="flex items-center w-2/3 justify-evenly flex-col md:flex-row"
                                key="UBUtah"
                                initial={{ x: 1000, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                                exit={{ x: -1000, opacity: 0 }}
                            >

                                <img className="m-4 min-h-[100px]" src={fast50} alt="fast 50 award" />

                                <div className=" w-full md:w-2/3 flex flex-col items-center gap-3 ">
                                    <h3 className=" text-xl text-center md:text-left md:text-3xl text-[#58585B]">11th Fastest Growing Company in Utah</h3>
                                    <p className="text-center text-[#58585B] text-base md:text-xl" >Utah Business named Alder the 11th fastest growing company in Utah in 2016</p>
                                </div>

                            </motion.div>

                            : null
                    }

                    {
                        logo === 3 ?

                            <motion.div
                                className="flex items-center w-2/3 justify-evenly flex-col md:flex-row "
                                key="UT100"
                                initial={{ x: 1000, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                                exit={{ x: -1000, opacity: 0 }}
                            >

                                <img className="m-4 min-h-[100px]" src={utah100} alt="utah 100 award" />

                                <div className=" w-full md:w-2/3 flex flex-col items-center gap-3 ">
                                    <h3 className=" text-xl text-center md:text-left md:text-3xl text-[#58585B]">10th Fastest Growing Company in Utah</h3>
                                    <p className="text-center text-[#58585B] text-base md:text-xl" >MountainWest Capital Network named Alder the 10th fastest growing company in Utah in 2016.</p>
                                </div>

                            </motion.div>

                            : null
                    }

                    {
                        logo === 4 ?

                            <motion.div
                                className="flex items-center w-2/3 justify-evenly flex-col md:flex-row "
                                key="BCUtah"
                                initial={{ x: 1000, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                                exit={{ x: -1000, opacity: 0 }}
                            >

                                <img className="m-4 min-h-[100px]" src={BCLogo} alt="best company logo" />

                                <div className=" w-full md:w-2/3 flex flex-col items-center gap-3 ">
                                    <div className="flex fle-row gap-1">
                                        <img src={goldstar} alt="gold star" />
                                        <img src={goldstar} alt="gold star" />
                                        <img src={goldstar} alt="gold star" />
                                        <img src={goldstar} alt="gold star" />
                                        <img src={starOutline} alt="gold star outline" />
                                    </div>
                                    <p className="text-center text-[#58585B] text-sm md:text-xl" >“When comparing services offered with other companies we found that they extended greater opportunities and services at a fair rate. Overall the service has been exactly what we were looking for. Everyone that I’ve spoken with has been knowledgeable and willing to serve.”</p>
                                </div>

                            </motion.div>

                            : null
                    }
                </AnimatePresence>
            </div>

            <div className=" bg-[#F3F3F3] w-full flex justify-evenly shadow-2xl py-4 z-10 ">

                <button disabled={!canClick} onClick={() => clickToLogoHandler(1)} > <img alt="american business awards logo" src={stevie} className={`max-w-[65px] sm:max-w-[100px] md:max-h-[75px] md:max-w-[200px] hover:grayscale-0 ${logo === 1 ? 'grayscale-0' : 'grayscale'} `} /> </button>

                <button disabled={!canClick} onClick={() => clickToLogoHandler(2)}> <img alt="utah business logo" src={UBLogo} className={`max-w-[50px] sm:max-w-[100px] md:max-h-[75px] md:max-w-[200px] hover:grayscale-0 ${logo === 2 ? 'grayscale-0' : 'grayscale'}  `} /> </button>

                <button disabled={!canClick} onClick={() => clickToLogoHandler(3)}> <img alt="moutain west capital network logo" src={utah100} className={`max-w-[50px] sm:max-w-[100px] md:max-h-[75px] md:max-w-[200px] hover:grayscale-0 ${logo === 3 ? 'grayscale-0' : 'grayscale'} `} /> </button>

                <button disabled={!canClick} onClick={() => clickToLogoHandler(4)}> <img alt="best company logo" src={bestCompanyLogo} className={`max-w-[65px] sm:max-w-[100px] md:max-h-[75px] md:max-w-[200px] hover:grayscale-0 ${logo === 4 ? 'grayscale-0' : 'grayscale'} `} /> </button>

            </div>

        </div>
    )
}

export default AwardCarousel