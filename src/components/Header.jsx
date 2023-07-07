import blueLogo from '../assets/blueLogo.svg'
import { useState, useEffect } from 'react'
import mobilePhone from '../assets/mobilePhone.svg'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'


const Header = ({ path = '/' }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [blankHeight, setBlankHeight] = useState(0)

    const animation1 = useAnimation()
    const animation2 = useAnimation()
    const animation3 = useAnimation()

    const toggleMenuHandler = () => {
        setIsMenuOpen(!isMenuOpen)

        {
            !isMenuOpen ?
                animation1.start({
                    rotate: 45,
                    y: 9
                }) :
                animation1.start({
                    rotate: 0,
                    y: 0
                })
        }

        {
            !isMenuOpen ?
                animation2.start({
                    opacity: 0
                }) :
                animation2.start({
                    transition: { delay: .10 },
                    opacity: 1
                })
        }

        {
            !isMenuOpen ?
                animation3.start({
                    rotate: -45,
                    y: -9
                }) :
                animation3.start({
                    rotate: 0,
                    y: 0
                })
        }

    }

    useEffect(() => {

        let windowheight = window.innerHeight
        
        setBlankHeight(windowheight - 512)
    
        }, [isMenuOpen])

    return (
        <div className="bg-white w-full h-16 lg:h-20 flex px-5 lg:px-0 justify-between lg:justify-evenly border-b-2 z-[100] border-gray-300 shadow-xl sticky top-0">


            <div className='flex items-center gap-6'>

                <a href='/'>
                    <img src={blueLogo} className='w-20 h-8 lg:w-28 lg:h-12' alt='alder logo' />
                </a>

                <div className='gap-3 items-center hidden lg:flex'>

                    <a href='/' className={` text-xs lg:text-base p-1 transition duration-200 hover:text-[#297CA3] hover:translate-y-[-2px] border-[#297CA3] ${path === '/' ? 'border-b-4 rounded' : 'border-0'
                        }`}>
                        Home
                    </a>

                    <a href='/home-security' className={`text-xs lg:text-base p-1 transition duration-200 hover:text-[#297CA3] hover:translate-y-[-2px] border-[#297CA3] ${path === '/home-security' ? 'border-b-4 rounded' : 'border-0'
                        }`}>
                        Home Security
                    </a>

                    <a href='/life-safety' className={`text-xs lg:text-base p-1 transition duration-200 hover:text-[#297CA3] hover:translate-y-[-2px] border-[#297CA3] ${path === '/life-safety' ? 'border-b-4 rounded' : 'border-0'
                        }`}>
                        Life Safety
                    </a>

                    <a href='/cameras' className={`text-xs lg:text-base p-1 transition duration-200 hover:text-[#297CA3] hover:translate-y-[-2px] border-[#297CA3] ${path === '/cameras' ? 'border-b-4 rounded' : 'border-0'
                        }`}>
                        Cameras
                    </a>

                    <a href='/verify-rep' className={`text-xs lg:text-base p-1 transition duration-200 hover:text-[#297CA3] hover:translate-y-[-2px] border-[#297CA3] ${path === '/verify-rep' ? 'border-b-4 rounded' : 'border-0'
                        }`}>
                        Verify Rep
                    </a>

                    <a href='https://account.alder.com/' className={`text-xs lg:text-base p-1 transition duration-200 hover:text-[#297CA3] hover:translate-y-[-2px] border-[#297CA3]`}>
                        My Account
                    </a>

                </div>

            </div>

            <br />

            <div className='flex items-center gap-5'>

                <a href="tel:800-710-1289">
                    <div className=' group flex items-center gap-2'>
                        <img src={mobilePhone} className='group-hover:animate-shaking-phone transition duration-150 scale-110 hover:scale-100' alt='phone icon' />
                        <p className='text-[#297CA3] font-sans font-medium hidden lg:flex '>800.710.1289</p>
                    </div>
                </a>

                <a href='https://support.alder.com/?' className='hidden lg:flex h-1/2 w-40 justify-center items-center text-white font-semibold bg-[#297CA3] rounded-3xl hover:bg-[#216FB8]  hover:scale-105 hover:translate-y-[-2px] transition duration-200 ease-in-out'>
                    Customer Support
                </a>

                <span onClick={toggleMenuHandler} className={`w-8 h-8 flex lg:hidden z-10 justify-center flex-col items-center gap-[6px]`}>
                    <motion.div animate={animation1} className='w-full h-[3px] bg-[#297CA3]'></motion.div>
                    <motion.div animate={animation2} className='w-full h-[3px] bg-[#297CA3]'></motion.div>
                    <motion.div animate={animation3} className='w-full h-[3px] bg-[#297CA3]'></motion.div>
                </span>

            </div>


            <AnimatePresence>
                {
                    isMenuOpen ?

                    <>
                        <motion.div className='flex lg:hidden flex-col items-center absolute px-4 top-16 right-0 left-0 w-full bg-white'
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: .50, type: "spring", bounce: 0.1 }}
                            exit={{ opacity: 0, y: -100 }}
                            >

                            <div className='w-4/5 pl-5 flex items-center h-14 border-b-2 border-gray-300 text-neutral-700'>
                                <a href='/home-security' className='w-2/3' onClick={toggleMenuHandler}>Home Security</a>
                            </div>

                            <div className='w-4/5 pl-5 flex items-center h-14 border-b-2 border-gray-300 text-neutral-700'>
                                <a href='/life-safety' className='w-2/3' onClick={toggleMenuHandler}>Life Safety</a>
                            </div>

                            <div className='w-4/5 pl-5 flex items-center h-14 border-b-2 border-gray-300 text-neutral-700'>
                                <a href='/cameras' className='w-2/3' onClick={toggleMenuHandler}>Cameras</a>
                            </div>

                            <div className='w-4/5 pl-5 flex items-center h-14 border-b-2 border-gray-300 text-neutral-700'>
                                <a href='/med-pendant' className='w-2/3' onClick={toggleMenuHandler}>Medical Alert</a>
                            </div>

                            <div className='w-4/5 pl-5 flex items-center h-14 border-b-2 bg-gray-200 border-white text-neutral-700'>
                                <a href='/verify-rep' className='w-2/3' onClick={toggleMenuHandler}>Verify Rep</a>
                            </div>

                            <div className='w-4/5 pl-5 flex items-center h-14 border-b-2 bg-gray-200 border-white text-neutral-700'>
                                <a href='https://support.alder.com/?' className='w-2/3' onClick={toggleMenuHandler}>Support</a>
                            </div>

                            <div className='w-4/5 pl-5 flex items-center h-14 border-b-2 bg-gray-200 border-white text-neutral-700'>
                                <a href='https://account.alder.com' className='w-2/3' onClick={toggleMenuHandler}>My Account</a>
                            </div>

                            <div className='w-4/5 pl-5 flex items-center h-14 text-neutral-700'>
                                <a href="tel:800-710-1289" className='flex items-center gap-2'>
                                    <img src={mobilePhone} className='hover:animate-shaking-phone transition duration-150 scale-105 hover:scale-100 ' />
                                    <p className='text-sky-600 font-sans font-medium'>800.710.1289</p>
                                </a>
                            </div>

                        </motion.div>
                        <motion.div className={`flex lg:hidden fixed bottom-0 left-0 bg-neutral-800/[.75] w-full`}
                        style={{height: blankHeight}}
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .50, type: "spring", bounce: 0.1 }}
                        exit={{ opacity: 0, y: 200 }}
                        onClick={toggleMenuHandler}>

                        </motion.div>
                        </>
                        : null}
            </AnimatePresence>


        </div>
        )
}

export default Header