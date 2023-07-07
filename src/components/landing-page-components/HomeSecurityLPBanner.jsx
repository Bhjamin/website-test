import { useState } from "react"
import SecurityHouse from '../../assets/Security-house-Opt.jpg'
import { AnimatePresence, motion } from "framer-motion"
import axios from "axios"
import loading from '../../assets/loading.svg'



const HomeSecurityLPBanner = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [error, setError] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const submitHandler = () => {

        setError([])

        const validPhoneNumber = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(phone)

        const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase())

        const formValid = null

        validPhoneNumber && validEmail && firstName.length > 1 && lastName.length > 1 && zipcode.length === 5 ? formValid = true : formValid = false

        if (formValid === false) {

            if (!validPhoneNumber) {
                setError(prevError => [...prevError, 'phone'])
            }
            if (!validEmail) {
                setError(prevError => [...prevError, 'email'])
            }
            if (firstName.length < 2) {
                setError(prevError => [...prevError, 'first'])
            }
            if (lastName.length < 2) {
                setError(prevError => [...prevError, 'last'])
            }
            if (zipcode.length !== 5) {
                setError(prevError => [...prevError, 'zip'])
            }

        } else {

            setIsLoading(true)

            const body = {

                first_name: firstName,
                last_name: lastName,
                phone: phone,
                email: email,
                postal_code: zipcode,
                last_page: window.location.pathname,
                last_page_full: window.location.href,
                atid: '1394',
                subid: '',
                source: 'Natural Intelligence Landing Page'
            }
            const config = {
                headers: {
                    'Access-Control-Allow-Origin': '*',

                    'Access-Control-Allow-Credentials': true,

                    'Content-Type': 'application/json'
                }
            }
            const paramSearch = new Proxy(new URLSearchParams(window.location.search), {

                get: (searchParams, prop) => searchParams.get(prop),

            });
            if (paramSearch.atid) {

                body.atid = paramSearch.atid;

            }
            if (paramSearch.subid) {

                body.atid = paramSearch.subid;

            }
            if (paramSearch.source) {

                body.source = paramSearch.source;

            }

            axios({ url: 'https://aldermarketing.com/forms/lead', method: 'post', data: body, config })
                .then((res) => {

                    console.log(res.data)

                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setPhone('')
                    setZipcode('')
                    setIsLoading(false)

                    window.location.href = '/thank-you'

                }).catch((err) => {

                    setIsLoading(false)
                    setError(prevError => [...prevError, 'axiosError'])
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setPhone('')
                    setZipcode('')
                    console.log(err)
                    setTimeout(() => {
                        setError([])
                    }, 10000)

                })

       }

    }

    return(
        <div className=" w-full bg-cover bg-center lg:h-[475px]" style={{
            backgroundImage: `url(${SecurityHouse})`
        }} >
            <div className="flex justify-between flex-col lg:flex-row items-center py-8 w-full h-full bg-white/[.65] px-4 sm:px-12">

            <div className=" w-full lg:w-[400px] h-full justify-end pb-8 lg:pb-20 flex flex-col items-center gap-8">
                <h1 className=" text-6xl text-center md:text-8xl lg:text-left font-medium text-[#2F3131]">
                    Total Life Safety
                </h1>
                <p className=" text-2xl text-center md:text-3xl md:text-left text-[#2F3131]">
                    You, your home, and everything in it. We protect it...
                </p>
            </div>

            <div className=" w-[95%] lg:w-[45%] rounded-xl bg-[#F3F3F4] p-4 flex flex-col items-center">

                <p className="text-[#58585B] mb-2 text-xl">Request a free quote and we'll contact you within 24 hours!</p>

                <AnimatePresence>
                    {

                        error.length === 1 ?

                            (<div className="w-full overflow-hidden max-w-3xl flex flex-col items-center md:flex-row justify-center gap-2 h-10">
                                {error.map((err) => {

                                    let errMessage = ''

                                    if(err === 'phone'){
                                        errMessage = 'Invalid phone number'
                                    }
                                    if(err === 'email'){
                                        errMessage = 'Invalid email address'
                                    }
                                    if(err === 'first'){
                                        errMessage = 'Please enter your first name'
                                    }
                                    if(err === 'last'){
                                        errMessage = 'Please enter your last name'
                                    }
                                    if(err === 'zip'){
                                        errMessage = 'Please enter your zip code'
                                    }
                                    if(err === 'axiosError'){
                                        errMessage = 'Something went wrong, please try again later'
                                    }

                                    return (

                                        <motion.p
                                        initial={{y: 100, opacity: 0}}
                                        transition={{duration: .75, type: 'spring', bounce: .20}}
                                        animate={{y: 0, opacity: 1}}
                                        exit={{y: 100, opacity: 0}}
                                        className="text-base sm:text-xl text-black font-medium"
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
                                        initial={{y: 100, opacity: 0}}
                                        transition={{duration: .75, type: 'spring', bounce: .20}}
                                        animate={{y: 0, opacity: 1}}
                                        exit={{y: 100, opacity: 0}}
                                        className="text-base sm:text-xl text-black font-medium"
                                        >
                                        Please fill out the form
                                        </motion.p>
                            </div>)

                            :

                            null

                    }
                </AnimatePresence>

                <div className="w-full px-4 flex flex-col items-center justify-center xs:flex-row xs:flex-wrap gap-2">

                    <input id="first" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" className={`bg-white ${error.includes('first') ? 'border-4 border-red-600' : 'border-2 border-[#757575]'} rounded-md p-2 w-full md:w-[30%]`} />
                    <label htmlFor="first" className=" absolute overflow-hidden w-[1px] h-[1px] -m-[1px] p-0 border-0">First Name</label>

                    <input id="last" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" className={`bg-white ${error.includes('last') ? 'border-4 border-red-600' : 'border-2 border-[#757575]'} rounded-md p-2 w-full md:w-[30%]`} />
                    <label htmlFor="last" className=" absolute overflow-hidden w-[1px] h-[1px] -m-[1px] p-0 border-0">Last Name</label>

                    <input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone" className={`bg-white ${error.includes('phone') ? 'border-4 border-red-600' : 'border-2 border-[#757575]'} rounded-md p-2 w-full md:w-[30%]`} />
                    <label htmlFor="phone" className=" absolute overflow-hidden w-[1px] h-[1px] -m-[1px] p-0 border-0">Phone Number</label>

                    <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className={`bg-white ${error.includes('email') ? 'border-4 border-red-600' : 'border-2 border-[#757575]'} rounded-md p-2 w-full md:w-[30%]`} />
                    <label htmlFor="email" className=" absolute overflow-hidden w-[1px] h-[1px] -m-[1px] p-0 border-0">Email</label>

                    <input id="zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} type="text" placeholder="Zip Code" className={`bg-white ${error.includes('zip') ? 'border-4 border-red-600' : 'border-2 border-[#757575]'} rounded-md p-2 w-full md:w-[30%]`} />
                    <label htmlFor="zipcode" className=" absolute overflow-hidden w-[1px] h-[1px] -m-[1px] p-0 border-0">Zip Code</label>

                </div>

                <br/>

                <p className="text-[#58585B] text-[10px] w-[90%] text-center">By clicking the "Request my quote" button, I consent for Alder, or one of its authorized marketers, to call or text me at the phone number provided above, using automated or other technologies, regarding current and future marketing offers. I understand that my consent is not required to make a purchase.</p>

                <br/>

                <button onClick={submitHandler} className="border-2 border-white text-white bg-[#0F5D7F] px-8 py-2 rounded-full shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-[2px] hover:bg-[#0D4F6D] transition duration-100">{
                        isLoading ?
                            <img alt="loading animation" src={loading} />
                            :
                            'Request my quote'
                    }</button>

                <p className="text-xs text-[#58585B] mt-4">No Obligation</p>

                <a className="text-[#58585B] mt-4 text-sm underline " href="/privacy">Privacy Policy | Licensing</a>

            </div>

            </div>
        </div>
    )
}

export default HomeSecurityLPBanner