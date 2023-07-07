import { AnimatePresence, motion, useInView, useAnimation } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import VideoModal from '../VideoModal'
import what from '../../assets/sales/what.svg'
import who from '../../assets/sales/who.svg'
import alderGrey from '../../assets/sales/gray-alder-logo.svg'
import alderDesktop from '../../assets/sales/alder-logo-desktop.svg'
import alderGreyDesktop from '../../assets/sales/gray-alder-logo-desktop.svg'
import alderLogoSales from '../../assets/sales/alder-logo-sales.svg'
import play from '../../assets/sales/play-sales.svg'
import startsHere from '../../assets/sales/starts-here.svg'
import goldLogo from '../../assets/sales/gold-logo.svg'
import silverLogo from '../../assets/sales/silver-logo.svg'
import applyNow from '../../assets/sales/apply-now.svg'
import axios from "axios"

const Sales = () => {

    const ref = useRef(null)
    const awardRef = useRef(null)
    const bestTeamRef = useRef(null)
    const applyNowRef = useRef(null)

    const inView = useInView(ref, { once: true })
    const awardsInView = useInView(awardRef)

    const [showModal, setShowModal] = useState(false)
    const [showModal2, setShowModal2] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [state, setState] = useState('')
    const [name2, setName2] = useState('')
    const [email2, setEmail2] = useState('')
    const [phone2, setPhone2] = useState('')
    const [state2, setState2] = useState('')
    const [managerNum, setManagerNum] = useState(0)
    const [twoYearNum, setTwoYearNum] = useState(0)
    const [firstYearNum, setFirstYearNum] = useState(0)
    const [textColor, setTextColor] = useState("white");
    const [yCordsPay, setYCordsPay] = useState(0)
    const [yCordsContact, setYCordsContact] = useState(0)
    const [error, setError] = useState([])
    const [error2, setError2] = useState([])
    const [formMessage, setFormMessage] = useState('')
    const [formMessage2, setFormMessage2] = useState('')

    const videoSections = [{ videoURL: 'https://res.cloudinary.com/alder/video/upload/q_auto/v1550770904/Alder_Year_End_Mashup_-_short.mp4', youtubeURL: 'https://www.youtube.com/embed/YlmdfiWoc44', svgURL: what, mobileURL: 'https://res.cloudinary.com/alder/image/upload/q_auto,f_auto/v1549928366/what.1.gif' }, { videoURL: 'https://res.cloudinary.com/alder/video/upload/q_auto/v1550770902/Liz_Nielsen_-_Rookie_Sales_Rep_-_short.mp4', youtubeURL: 'https://www.youtube.com/embed/veqoQpLDEas', svgURL: who, mobileURL: 'https://res.cloudinary.com/alder/image/upload/q_auto,f_auto/v1549932193/who.v2.gif' }]

    const increaseNums = () => {

        let i = 0
        let x = 0
        let z = 0

        function loop() {


            setManagerNum(i);
            i++;

            if (i < 165) {
                setTimeout(loop, 10);
            }
        }

        function loop2() {


            setTwoYearNum(x);
            x++;

            if (x < 85) {
                setTimeout(loop2, 20);
            }
        }

        function loop3() {


            setFirstYearNum(z);
            z++;

            if (z < 36) {
                setTimeout(loop3, 45);
            }
        }

        loop()
        loop2()
        loop3()
    };
    const showModalHandler = (i) => {
        i === 0 ? setShowModal(!showModal) : setShowModal2(!showModal2)
    }
    const scrollToAbout = () => {
        toggleMenuHandler()
        window.scroll({ top: 0, behavior: "smooth" })
    }
    const scrollToPay = () => {
        toggleMenuHandler()
        window.scrollTo({ top: yCordsPay, behavior: 'smooth' })
    };
    const scrollToContact = () => {
        toggleMenuHandler()
        window.scrollTo({ top: yCordsContact, behavior: 'smooth' })
    }

    useEffect(() => {

        const paySection = document.getElementById("pay")
        const contactSection = document.getElementById('contact');

        setYCordsPay(paySection.getBoundingClientRect().y)
        setYCordsContact(contactSection.getBoundingClientRect().y)

    }, [])
    useEffect(() => {

        inView && increaseNums()

    }, [inView])
    useEffect(() => {

        setTimeout(() => {
            setTextColor('white')
        }, 75)

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        }

        const observer = new IntersectionObserver((entries) => {
            const isVisible = entries[0].isIntersecting
            setTextColor(isVisible ? "[#58585B]" : "white");
        }, options)

        const observedElement = bestTeamRef.current;
        if (observedElement) {
            observer.observe(observedElement);
        }

        return () => {
            if (observedElement) {
                observer.unobserve(observedElement);
            }
        };

    }, [])
    useEffect(() => {

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        }

        const observer = new IntersectionObserver((entries) => {
            const isLastVisible = entries[0].isIntersecting
            setTextColor(isLastVisible ? "white" : "[#58585B]");
        }, options)

        const observedElement = applyNowRef.current;
        if (observedElement) {
            observer.observe(observedElement);
        }

        return () => {
            if (observedElement) {
                observer.unobserve(observedElement);
            }
        };

    }, [])

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


    const submitHandler = () => {

        setError([])

        const validPhoneNumber = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(phone)

        const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase())

        const formValid = null

        validPhoneNumber && validEmail && name.length > 4 && state.length > 1 ? formValid = true : formValid = false

        if (formValid === false) {

            if (!validPhoneNumber) {

                setError(prevError => [...prevError, 'phone'])
            }
            if (!validEmail) {

                setError(prevError => [...prevError, 'email'])
            }
            if (name.length < 5) {

                setError(prevError => [...prevError, 'name'])
            }
            if (state.length < 2) {

                setError(prevError => [...prevError, 'state'])
            }

        } else {

            const data = {
                name,
                email,
                phone,
                state
            }

            axios.post('http://localhost:5420/api/recruiting', data)
                .then((res) => {

                    res.data === 'success' ?
                        setFormMessage('Message sent successfully')
                        :
                        setFormMessage('Something went wrong, please try again later')

                }).catch((err) => {
                    console.log(err)
                })

            setName('')
            setState('')
            setEmail('')
            setPhone('')

        }

    }


    const submitHandler2 = () => {

        setError2([])

        const validPhoneNumber = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(phone2)

        const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email2).toLowerCase())

        let formValid = null

        validPhoneNumber && validEmail && name2.length > 4 && state2.length > 1 ? formValid = true : formValid = false

        if (formValid === false) {

            if (!validPhoneNumber) {

                setError2(prevError => [...prevError, 'phone'])
            }
            if (!validEmail) {

                setError2(prevError => [...prevError, 'email'])
            }
            if (name2.length < 5) {

                setError2(prevError => [...prevError, 'name'])
            }
            if (state2.length < 2) {

                setError2(prevError => [...prevError, 'state'])
            }

        } else {

            const data = {
                name: name2,
                email: email2,
                phone: phone2,
                state: state2
            }

            axios.post('http://localhost:5420/api/recruiting', data)
                .then((res) => {

                    res.data === 'success' ?
                        setFormMessage2('Message sent successfully')
                        :
                        setFormMessage2('Something went wrong, please try again later')

                }).catch((err) => {
                    console.log(err)
                })

            setName2('')
            setState2('')
            setEmail2('')
            setPhone2('')

        }

    }


    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const animation1 = useAnimation()
    const animation2 = useAnimation()
    const animation3 = useAnimation()

    return (<div className="w-full min-h-screen flex flex-col items-center relative">

        <div className="w-full fixed top-0 flex justify-between px-8 z-10">

            <a className="z-50" href="/">
                <img alt="alder logo" className=" w-[90px] md:w-[120px] md:flex hidden" src={textColor !== 'white' ? alderGreyDesktop : alderDesktop} />
                <img alt="alder logo" className="md:hidden flex" src={textColor !== 'white' ? alderGrey : alderLogoSales} />
            </a>

            <div className="flex justify-end md:justify-between items-center w-1/2 md:w-[400px]">

                <button onClick={scrollToAbout} className={`hidden md:flex text-${textColor} hover:scale-105 hover:shadow-xl shadow-black hover:-translate-y-[2px] active:shadow-none active:scale-100 transition duration-100 `}>About Alder</button>

                <button onClick={scrollToPay} className={`hidden md:flex text-${textColor} hover:scale-105 hover:shadow-xl shadow-black hover:-translate-y-[2px] active:shadow-none active:scale-100 transition duration-100 `}>Compensation</button>

                <button onClick={scrollToContact} className={`hidden md:flex border-4 px-3 py-[2px] rounded-2xl text-${textColor} border-${textColor} hover:scale-105 hover:shadow-xl shadow-black hover:-translate-y-[2px] active:shadow-none active:scale-100 transition duration-100`}>Apply Now</button>

                <span onClick={toggleMenuHandler} className={`w-8 h-8 flex md:hidden z-10 justify-center flex-col items-center gap-[6px]`}>
                    <motion.div animate={animation1} className={`w-full h-[3px] ${textColor !== 'white' ? 'bg-[#58585B]' : 'bg-white'} `}></motion.div>
                    <motion.div animate={animation2} className={`w-full h-[3px] ${textColor !== 'white' ? 'bg-[#58585B]' : 'bg-white'} `}></motion.div>
                    <motion.div animate={animation3} className={`w-full h-[3px] ${textColor !== 'white' ? 'bg-[#58585B]' : 'bg-white'} `}></motion.div>
                </span>

            </div>

            <AnimatePresence>
                {
                    isMenuOpen ?
                        <>
                            <motion.div className='flex md:hidden h-[50vh] flex-col justify-center items-center absolute px-4 pt-20 pb-4 top-0 right-0 left-0 w-full bg-[#297CA3] shadow-2xl'
                                initial={{ opacity: 0, y: -200 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: .50, type: "spring", bounce: 0.1 }}
                                exit={{ opacity: 0, y: -200 }}
                            >

                                <div className='w-4/5 flex items-center text-center h-16 border-b-2 border-[#58585B] text-white'>
                                    <button className='w-full' onClick={scrollToAbout}>About Alder</button>
                                </div>

                                <div className='w-4/5 flex items-center text-center h-16 border-b-2 border-[#58585B] text-white'>
                                    <button className='w-full' onClick={scrollToPay}>Compensation</button>
                                </div>

                                <div className='w-4/5 flex items-center text-center h-16 text-white'>
                                    <button className='w-full' onClick={scrollToContact}>Apply Now</button>
                                </div>



                            </motion.div>
                            <motion.div
                                onClick={toggleMenuHandler}
                                initial={{ opacity: 0, y: 200 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: .50, type: "spring", bounce: 0.1 }}
                                exit={{ opacity: 0, y: 200 }}
                                className="md:hidden w-full h-[50vh] fixed bottom-0 right-0 left-0 bg-neutral-800/[.75]">

                            </motion.div>
                        </>
                        : null}
            </AnimatePresence>

        </div>

        {videoSections.map((section, i) => {

            let screenWidth = window.innerWidth

            return (
                <section key={i} className="w-full min-h-[200vh] sticky top-0">
                    <div className="w-full h-screen sticky flex justify-center items-center top-0 bottom-0">
                        {
                            screenWidth > 1175 ?
                                <div className="sticky w-full -z-10 h-full">
                                    <video className="w-screen" playsInline autoPlay loop muted>
                                        <source src={section.videoURL} />
                                    </video>
                                </div>
                                :
                                <div className="w-full h-screen flex bg-center bg-cover bg-no-repeat" style={{
                                    backgroundImage: `url(${section.mobileURL})`
                                }}></div>
                        }
                        <div className="absolute w-full h-full z-10 flex flex-col gap-2 justify-center items-center px-4 bg-sky-950/[.5]">
                            <img className="w-[300px] h-[65px]" alt={i === 0 ? 'what is alder' : 'who is alder'} src={section.svgURL} />
                            <p className="text-[#4BB1E4] text-6xl font-medium">Is Alder?</p>
                            <button aria-label="open video modal" onClick={() => showModalHandler(i)} ><img alt="play button" src={play} /></button>

                        </div>
                        <AnimatePresence mode="popLayout">
                            {showModal ?
                                <motion.div
                                    className="fixed top-0 left-0 right-0 bottom-0 z-[75] flex justify-center items-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <VideoModal showModal={showModal} setShowModal={setShowModal} videoURL={videoSections[0].youtubeURL} />
                                </motion.div>
                                : null
                            }
                        </AnimatePresence>
                        <AnimatePresence mode="popLayout">
                            {showModal2 ?
                                <motion.div
                                    className="fixed top-0 left-0 right-0 bottom-0 z-[75] flex justify-center items-center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <VideoModal showModal={showModal2} setShowModal={setShowModal2} videoURL={videoSections[1].youtubeURL} />
                                </motion.div>
                                : null
                            }
                        </AnimatePresence>
                    </div>
                </section>
            )
        })}

        <section className="min-h-[200vh] w-full sticky top-0">
            <div className="w-full h-screen sticky top-0 bottom-0 bg-[#231F20] flex flex-col items-center justify-center gap-8">

                <h1 className="text-white text-4xl text-center sm:text-5xl font-bold" >The Opportunity</h1>
                <p className="text-white w-[90%] md:w-2/3 text-center text-xl">Alder is experiencing rapid growth in a vibrant industry. The investments we've made into our own infrastructure have allowed us to maintain a high level of competitiveness for both our sales reps and our customers. We're looking for hard working individuals with a desire to grow with us.</p>

            </div>
        </section>

        <section className="min-h-[200vh] w-full sticky top-0"
            style={{ 'boxShadow': '7px -13px 60px' }}
        >
            <div className="w-full h-screen sticky top-0 bottom-0 bg-[#231F20] flex flex-col items-center justify-center gap-4 px-4">

                <h2 className="text-white text-xl font-bold" >YOUR NEXT STEP</h2>
                <img alt="your next step starts here" src={startsHere} />

                <AnimatePresence>
                    {

                        error.length === 1 ?

                            (<div className="w-full overflow-hidden max-w-3xl flex flex-col items-center md:flex-row justify-center gap-2 h-10">
                                {error.map((err) => {

                                    let errMessage = ''

                                    if (err === 'phone') {
                                        errMessage = 'Invalid phone number'
                                    }
                                    if (err === 'email') {
                                        errMessage = 'Invalid email address'
                                    }
                                    if (err === 'name') {
                                        errMessage = 'Please enter your full name'
                                    }
                                    if (err === 'state') {
                                        errMessage = 'Please enter your state'
                                    }

                                    return (

                                        <motion.p
                                            initial={{ y: 100, opacity: 0 }}
                                            transition={{ duration: .75, type: 'spring', bounce: .20 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: 100, opacity: 0 }}
                                            className="text-xl text-white font-medium"
                                        >
                                            {errMessage}
                                        </motion.p>

                                    )
                                })}
                            </div>)

                            :

                            error.length > 1 ?

                                (<div className="w-full overflow-hidden max-w-3xl flex flex-col items-center md:flex-row justify-center gap-2 h-10">
                                    <motion.p
                                        initial={{ y: 100, opacity: 0 }}
                                        transition={{ duration: .75, type: 'spring', bounce: .20 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 100, opacity: 0 }}
                                        className="text-xl text-white font-medium"
                                    >
                                        Please fill out the form
                                    </motion.p>
                                </div>)

                                :

                                null

                    }
                    {
                        formMessage ?
                        (<div className="w-full overflow-hidden max-w-3xl flex flex-col items-center md:flex-row justify-center gap-2 h-10">
                                    <motion.p
                                        initial={{ y: 100, opacity: 0 }}
                                        transition={{ duration: .75, type: 'spring', bounce: .20 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 100, opacity: 0 }}
                                        className="text-xl text-white font-medium"
                                    >
                                        {formMessage}
                                    </motion.p>
                                </div>)
                        : null
                    }
                </AnimatePresence>

                <div className="w-full flex flex-col items-center gap-3">

                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" className={`py-3 px-4 ${error.includes('name') ? 'border-[3px] border-red-600' : 'border-0 '} bg-white rounded w-3/4 md:w-1/3 xl:w-1/5`} />

                    <div className="w-3/4 md:w-1/3 xl:w-1/5 flex flex-col">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className={`py-3 px-4 bg-white rounded-t w-full ${error.includes('email') ? 'border-[3px] border-red-600' : ' border-b border-black '} `} />

                        <div className="w-full flex">
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone" className={`py-3 px-4 ${error.includes('phone') ? 'border-[3px] border-red-600' : 'border-0 '} bg-white rounded-bl w-1/2`} />
                            <input value={state} onChange={(e) => setState(e.target.value)} type="text" placeholder="State" className={`py-3 px-4 ${error.includes('state') ? 'border-[3px] border-red-600' : ' border-l border-black '} bg-white rounded-br w-1/2 `} />
                        </div>
                    </div>

                    <button onClick={submitHandler} className="w-3/4 md:w-1/3 xl:w-1/5 mt-2 border-[3px] rounded border-[#276E8E] py-2 hover:scale-105 hover:shadow-2xl transition duration-75 group"><p className="text-white font-medium group-hover:-translate-y-1 group-hover:scale-105 transition duration-200">Get Started</p></button>

                </div>

            </div>
        </section>

        <section id="pay" className="min-h-[200vh] w-full sticky top-0"
            style={{ 'boxShadow': '7px -13px 60px' }}
        >
            <div className="w-full h-screen sticky top-0 bottom-0 bg-[#58595B] flex flex-col items-center justify-center gap-4">

                <p className="text-white text-2xl w-3/4 md:w-1/2 text-center mb-6">We've created a model that pays our sales team more than any of our competitors.</p>

                <div ref={ref} className="w-full h-[250px] flex justify-center gap-4 md:gap-12 items-end">

                    {inView ?
                        (
                            <motion.div
                                className=" w-[75px] xs:w-[100px] md:w-[150px] bg-[#297CA3]"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 100, opacity: 1 }}
                                transition={{ duration: 1.5, ease: 'easeOut', delay: .25 }}
                            ><p className="text-white w-full text-center text-base xs:text-xl md:text-3xl font-bold py-4">${firstYearNum}K+</p></motion.div>
                        ) : null}

                    {inView ?
                        (
                            <motion.div
                                className=" w-[75px] xs:w-[100px] md:w-[150px] bg-[#297CA3]"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 150, opacity: 1 }}
                                transition={{ duration: 1.5, ease: 'easeOut', delay: .50 }}
                            ><p className="text-white w-full text-center text-base xs:text-xl md:text-3xl font-bold py-4">${twoYearNum}K+</p></motion.div>
                        ) : null}

                    {inView ?
                        (
                            <motion.div
                                className=" w-[75px] xs:w-[100px] md:w-[150px] bg-[#297CA3]"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 250, opacity: 1 }}
                                transition={{ duration: 1.5, ease: 'easeOut', delay: .75 }}
                            ><p className="text-white w-full text-center text-base xs:text-xl md:text-3xl font-bold py-4">${managerNum}K+</p></motion.div>
                        ) : null}
                </div>

                <div className="w-full flex justify-center gap-4 md:gap-12 items-end">
                    <p className="text-white text-sm xs:text-xl font-medium text-center w-[75px] xs:w-[100px] md:w-[150px]">First Year Rep</p>

                    <p className="text-white text-sm xs:text-xl font-medium text-center w-[75px] xs:w-[100px] md:w-[150px]">+2 Year Rep</p>

                    <p className="text-white text-sm xs:text-xl font-medium text-center w-[75px] xs:w-[100px] md:w-[150px]">Sales Manager</p>
                </div>

            </div>
        </section>

        <section className="min-h-[200vh] w-full sticky top-0">
            <div className="w-full h-screen sticky top-0 bottom-0 bg-white flex flex-col items-center justify-center gap-8">
                <div className="w-full flex flex-col items-center md:flex-row justify-center gap-8 ">

                    <div className="px-4 w-full xs:w-[300px]">
                        <p className="text-black text-2xl">Our teams are the best</p>
                        <p className="text-black text-3xl xs:text-4xl font-bold">and we aren't the only ones who think so</p>
                    </div>

                    <div ref={awardRef} className="flex justify-center gap-12">
                        {
                            awardsInView ?
                                <>
                                    <motion.img
                                        src={goldLogo}
                                        initial={{ y: 800, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 2, type: 'spring' }}
                                        exit={{ y: -800, opacity: 0 }}
                                        className=" w-[100px] h-[150px] xs:w-[150px] xs:h-[200px]" />
                                    <motion.img src={silverLogo}
                                        initial={{ y: 800, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 2, delay: .25, type: 'spring' }}
                                        exit={{ y: -800, opacity: 0 }}
                                        className=" w-[100px] h-[150px] xs:w-[150px] xs:h-[200px]"
                                    />
                                </>
                                : null
                        }
                    </div>

                </div>
                <span ref={bestTeamRef} className="absolute left-0 bottom-0" />
            </div>
        </section>


        <section id="contact" className="min-h-[200vh] w-full sticky top-0"
            style={{ 'boxShadow': '7px -13px 60px' }}
        >
            <div className="w-full h-screen sticky top-0 bottom-0 bg-[#231F20] flex flex-col items-center justify-center gap-4 px-4">

                <h2 className="text-white text-xl font-bold" >YOU ARE READY</h2>
                <img alt="are you ready, apply now" src={applyNow} />

                <AnimatePresence>
                    {

                        error2.length === 1 ?

                            (<div className="w-full overflow-hidden max-w-3xl flex flex-col items-center md:flex-row justify-center gap-2 h-10">
                                {error2.map((err) => {

                                    let errMessage = ''

                                    if (err === 'phone') {
                                        errMessage = 'Invalid phone number'
                                    }
                                    if (err === 'email') {
                                        errMessage = 'Invalid email address'
                                    }
                                    if (err === 'name') {
                                        errMessage = 'Please enter your full name'
                                    }
                                    if (err === 'state') {
                                        errMessage = 'Please enter your state'
                                    }

                                    return (

                                        <motion.p
                                            initial={{ y: 100, opacity: 0 }}
                                            transition={{ duration: .75, type: 'spring', bounce: .20 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: 100, opacity: 0 }}
                                            className="text-xl text-white font-medium"
                                        >
                                            {errMessage}
                                        </motion.p>

                                    )
                                })}
                            </div>)

                            :

                            error2.length > 1 ?

                                (<div className="w-full overflow-hidden max-w-3xl flex flex-col items-center md:flex-row justify-center gap-2 h-10">
                                    <motion.p
                                        initial={{ y: 100, opacity: 0 }}
                                        transition={{ duration: .75, type: 'spring', bounce: .20 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 100, opacity: 0 }}
                                        className="text-xl text-white font-medium"
                                    >
                                        Please fill out the form
                                    </motion.p>
                                </div>)

                                :

                                null

                    }
                    {
                        formMessage2 ?
                        (<div className="w-full overflow-hidden max-w-3xl flex flex-col items-center md:flex-row justify-center gap-2 h-10">
                                    <motion.p
                                        initial={{ y: 100, opacity: 0 }}
                                        transition={{ duration: .75, type: 'spring', bounce: .20 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 100, opacity: 0 }}
                                        className="text-xl text-white font-medium"
                                    >
                                        {formMessage2}
                                    </motion.p>
                                </div>)
                        : null
                    }
                </AnimatePresence>

                <div className="w-full flex flex-col items-center gap-3">

                    <input value={name2} onChange={(e) => setName2(e.target.value)} type="text" placeholder="Full Name" className={`py-3 px-4 ${error2.includes('name') ? 'border-[3px] border-red-600' : 'border-0 '} bg-white rounded w-3/4 md:w-1/3 xl:w-1/5`} />

                    <div className="w-3/4 md:w-1/3 xl:w-1/5 flex flex-col">
                        <input value={email2} onChange={(e) => setEmail2(e.target.value)} type="text" placeholder="Email" className={`py-3 px-4 bg-white rounded-t w-full ${error2.includes('email') ? 'border-[3px] border-red-600' : ' border-b border-black '} `} />

                        <div className="w-full flex">
                            <input value={phone2} onChange={(e) => setPhone2(e.target.value)} type="text" placeholder="Phone" className={`py-3 px-4 ${error2.includes('phone') ? 'border-[3px] border-red-600' : 'border-0 '} bg-white rounded-bl w-1/2`} />
                            <input value={state2} onChange={(e) => setState2(e.target.value)} type="text" placeholder="State" className={`py-3 px-4 ${error2.includes('state') ? 'border-[3px] border-red-600' : ' border-l border-black '} bg-white rounded-br w-1/2 `} />
                        </div>
                    </div>

                    <button onClick={submitHandler2} className="w-3/4 md:w-1/3 xl:w-1/5 mt-2 border-[3px] rounded border-[#276E8E] py-2 hover:scale-105 hover:shadow-2xl transition duration-75 group"><p className="text-white font-medium group-hover:-translate-y-1 group-hover:scale-105 transition duration-200">Learn More</p></button>

                </div>
                <span ref={applyNowRef} className="absolute left-0 bottom-0" />
            </div>
        </section>


        <a href="/" className={`text-${textColor} text-lg hidden md:flex fixed left-10 bottom-24 -rotate-90 tracking-[.20em]`}>ALDER.COM</a>

    </div>)
}


export default Sales