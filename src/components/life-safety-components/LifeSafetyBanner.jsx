import { motion, useScroll, useTransform } from "framer-motion"
import productGrid from '../../assets/sensor-grid-Opt.jpg'
import whitePhone from '../../assets/white-phone.svg'
import productGridMobile from '../../assets/life-safety/sensor-grid-mobile.jpg'

const LifeSafetyBanner = () => {

    let screenWidth = window.innerWidth

    let { scrollYProgress } = useScroll()
    let y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

    return(
        <>
        <motion.div id="banner" className={`w-full md:bg-center bg-300 bg-80-55 `} style={{
            backgroundImage: `url(${screenWidth > 768 ? productGrid : productGridMobile})`,
            height: '60vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            y
            }}>
            
    
            <div className=" md:justify-normal pb-5 h-full w-full flex flex-col items-center pt-36 gap-3">
    
            <div className=" md:ml-16 w-full md:w-3/4 flex flex-col items-center md:items-start md:mr-60 gap-3">
    
                <h1 className=" font-medium text-[#58585B] text-4xl md:text-7xl ">Life Safety</h1>
                <p className=" text-[#58585B] font-medium text-[24px] text-center">Never miss a thing.</p>
    
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

export default LifeSafetyBanner