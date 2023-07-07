import { motion, useScroll, useTransform } from "framer-motion"
import SecurityHouse from '../../assets/Security-house-Opt.jpg'
import whitePhone from '../../assets/white-phone.svg'

const HomeSecurityBanner = () => {


    let { scrollYProgress } = useScroll()
    let y = useTransform(scrollYProgress, [0, 1], ['0%', '150%'])


    return(
        <>
        <motion.div className={`w-full bg-center `} style={{
            backgroundImage: `url(${SecurityHouse})`,
            height: '60vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            y}}>
            
    
            <div className=" md:justify-normal justify-end pb-5 h-full w-full flex flex-col items-center pt-36 gap-3 bg-neutral-800/[.30]">
    
            <div className=" md:ml-16 w-full md:w-3/4 flex flex-col items-center md:items-start md:mr-60 gap-3">
    
                <h1 className=" font-medium text-white text-4xl md:text-7xl ">Home Security</h1>
                <p className=" text-white font-medium text-[24px] text-center">Protection from home intrusion</p>
    
                <div className="flex flex-col items-center md:flex-row gap-2">
    
                    <a href="tel:800-710-1289" className="flex items-center justify-center gap-2 bg-[#168359] hover:bg-[#13724e] h-10 w-48 rounded-3xl border-2 z-10 border-white">
                        <img alt="phone icon" src={whitePhone}/>
                        <p className="text-white text-[15px]">Call Now for a Quote</p>
                    </a>
    
                </div>
            </div>
    
            </div>
    
        </motion.div>
        </>
    )
}

export default HomeSecurityBanner