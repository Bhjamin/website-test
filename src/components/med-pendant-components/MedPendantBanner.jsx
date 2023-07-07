import pendantBanner from '../../assets/med-pendant/lifestyle_medical_pendant.jpg'
import { motion, useScroll, useTransform } from 'framer-motion'
import whitePhone from '../../assets/white-phone.svg'

const MedPendantBanner = () => {

    let { scrollYProgress } = useScroll()
    let y = useTransform(scrollYProgress, [0, 1], ['0%', '75%'])

    return(<>
        <motion.div className={`w-full bg-bottom`} style={{
            backgroundImage: `url(${pendantBanner})`,
            height: '60vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            y}}>
            
    
            <div className=" md:justify-normal justify-end pb-5 h-full w-full flex flex-col items-center pt-36 gap-3 bg-neutral-800/[.50]">
    
            <div className=" md:ml-16 w-full md:w-3/4 flex flex-col items-center md:items-start md:mr-60 gap-3">
    
                <h1 className=" font-medium text-center md:text-left text-white text-4xl md:text-7xl ">Medical Alert Systems</h1>
                <p className=" text-white font-medium text-[24px] text-center">Help us just a tap away.</p>
    
                <div className="flex flex-col items-center md:flex-row gap-2">
    
                    <a href="tel:800-710-1289" className="flex items-center justify-center gap-2 bg-[#168359] hover:bg-[#13724e] h-10 w-48 rounded-3xl border-2 z-10 border-white">
                        <img alt='phone icon' src={whitePhone}/>
                        <p className="text-white text-[15px]">Call Now for a Quote</p>
                    </a>
    
                </div>
            </div>
    
            </div>
    
        </motion.div>
        </>)
}

export default MedPendantBanner