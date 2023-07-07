import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import loading from '../../assets/loading.svg'
import axios from "axios"

const RequestQuoteFormLP = ({ bg_color, font = '', button_color = 'bg-[#168359] hover:bg-[#14734f]' }) => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        console.log(error)
    }, [error])

    const submitHandler = () => {

        setError([])

        const validPhoneNumber = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(phone)

        const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase())

        const formValid = null

        validPhoneNumber && validEmail && firstName.length > 1 && lastName.length > 1 ? formValid = true : formValid = false

        if (formValid === false) {

            if (!validPhoneNumber) {
                console.log('invalid phone number')
                setError(prevError => [...prevError, 'phone'])
            }
            if (!validEmail) {
                console.log('invalid email')
                setError(prevError => [...prevError, 'email'])
            }
            if (firstName.length < 2) {
                console.log('invalid first name')
                setError(prevError => [...prevError, 'first'])
            }
            if (lastName.length < 2) {
                console.log('invalid last name')
                setError(prevError => [...prevError, 'last'])
            }

        } else {

            setIsLoading(true)

            const body = {

                first_name: firstName,
                last_name: lastName,
                phone: phone,
                email: email,
                last_page: window.location.pathname,
                last_page_full: window.location.href,
                atid: '1395',
                subid: '',
                source: 'NVR Landing Page'
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
                    setIsLoading(false)

                    window.location.href = '/thank-you'

                }).catch((err) => {

                    setIsLoading(false)
                    setError(prevError => [...prevError, 'axiosError'])
                    setFirstName('')
                    setLastName('')
                    setEmail('')
                    setPhone('')
                    console.log(err)
                    setTimeout(() => {
                        setError([])
                    }, 10000)

                })

       }

    }

    return (
        <div className={`w-full ${bg_color} flex justify-center py-4 px-8`}>
            <div className=" max-w-6xl w-full flex flex-col items-center">


                <h2 className={`text-black ${font} text-center text-2xl py-2 md:text-[32px]`}>Request a free quote and we'll contact you within 24 hours!</h2>

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
                                    if(err === 'axiosError'){
                                        errMessage = 'Something went wrong, please try again later'
                                    }

                                    return (

                                        <motion.p
                                        initial={{y: 100, opacity: 0}}
                                        transition={{duration: .75, type: 'spring', bounce: .20}}
                                        animate={{y: 0, opacity: 1}}
                                        exit={{y: 100, opacity: 0}}
                                        className="text-xl text-black font-medium"
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
                                        className="text-xl text-black font-medium"
                                        >
                                        Please fill out the form
                                        </motion.p>
                            </div>)

                            :

                            null

                    }
                </AnimatePresence>

                <div className=" w-5/6 flex flex-col items-center md:flex-row justify-center gap-2 m-2 ">
                    <input id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" className={`bg-white ${error.includes('first') ? 'border-4 border-red-600' : 'border-2 border-[#757575]'} rounded-md p-3 w-full md:w-1/4`} />
                    <label htmlFor="firstname" className=" absolute overflow-hidden w-[1px] h-[1px] -m-[1px] p-0 border-0">First Name</label>

                    <input id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" className={`bg-white ${error.includes('last') ? 'border-4 border-red-600' : 'border-2 border-[#757575]'} rounded-md p-3 w-full md:w-1/4`} />
                    <label htmlFor="lastname" className=" absolute overflow-hidden w-[1px] h-[1px] -m-[1px] p-0 border-0">Last Name</label>

                    <input id="phoneNumber" value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone" className={`bg-white ${error.includes('phone') ? 'border-4 border-red-600' : 'border-2 border-[#757575]'} rounded-md p-3 w-full md:w-1/4`} />
                    <label htmlFor="phoneNumber" className=" absolute overflow-hidden w-[1px] h-[1px] -m-[1px] p-0 border-0">Phone Number</label>

                    <input id="emailAddress" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className={`bg-white ${error.includes('email') ? 'border-4 border-red-600' : 'border-2 border-[#757575]'} rounded-md p-3 w-full md:w-1/4`} />
                    <label htmlFor="emailAddress" className=" absolute overflow-hidden w-[1px] h-[1px] -m-[1px] p-0 border-0">Email</label>
                </div>

                <p className="text-black text-[10px] font-medium text-center w-3/4">By clicking the "Submit" button, I consent for Alder, or one of its authorized marketers, to call or text me at the phone number provided above, using automated or other technologies, regarding current and future marketing offers. I understand that my consent is not required to make a purchase.</p>

                <br />

                <button onClick={submitHandler} className={`text-white text-base flex items-center justify-center gap-2 ${button_color} hover:scale-105 transition duration-100 h-10 w-48 rounded-3xl shadow-lg border-2 border-white`}>
                    {
                        isLoading ?
                        <img alt="loading animation" src={loading} />
                        :
                        "Submit"
                    }
                </button>

                <p className="text-black font-medium text-xs m-2">No Obligation</p>

                <a className="text-black text-sm underline " href="/privacy">Privacy Policy | Licensing</a>


            </div>
        </div>
    )
}

export default RequestQuoteFormLP