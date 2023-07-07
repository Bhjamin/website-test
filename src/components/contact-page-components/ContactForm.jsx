import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import GoogleMapReact from "google-map-react"
import blueDispatch from '../../assets/contact/blueDispatch.svg'
import blueEmail from '../../assets/contact/blueEmail.svg'
import bluePhone from '../../assets/contact/bluePhone.svg'
import bluePin from '../../assets/contact/bluePin.svg'
import filledBluePin from '../../assets/contact/blueFillPin.svg'
import axios from "axios"



const ContactForm = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState([])
    const [formMessage, setFormMessage] = useState('')


    const submitHandler = (e) => {

        e.preventDefault()

        setError([])

        const validPhoneNumber = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(phone)

        const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase())

        const formValid = null

        validPhoneNumber && validEmail && firstName.length > 1 && lastName.length > 1 && message.length > 14 ? formValid = true : formValid = false

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
            if (message.length < 15) {
                
                setError(prevError => [...prevError, 'message'])
            }

        } else {

            const data = {
                firstName,
                lastName,
                email,
                phone,
                message
            }

            axios.post('http://localhost:5420/api/contact', data)
            .then((res) => {

                res.data === 'success' ?
                setFormMessage('Message sent successfully')
                :
                setFormMessage('Something went wrong, please try again later')

            }).catch((err) => {
                console.log(err)
                setFormMessage('Something went wrong, please try again later')
            })

            setFirstName('')
            setLastName('')
            setEmail('')
            setPhone('')
            setMessage('')

        }

    }


    return (<div className="flex flex-col justify-center items-center w-full">
        <div className=" flex flex-col p-2 sm:p-8 bg-white items-center gap-8 md:gap-0 md:flex-row w-full max-w-7xl justify-evenly ">


            <div className="flex flex-col items-center md:items-start w-full gap-8 md:w-1/2">

                <div className="flex flex-col sm:flex-row flex-wrap items-center gap-2">

                    <img src={bluePhone} alt="phone icon" />

                    <p className="text-[#58585B]" >Customer Service:</p>

                    <p className="text-[#297CA3]" >800-710-1289</p>

                </div>

                <div className="flex flex-col sm:flex-row flex-wrap items-center gap-2">

                    <img src={blueDispatch} alt="emergency symbol icon" />

                    <p className="text-[#58585B]" >Cancel Dispatch:</p>

                    <p className="text-[#297CA3]" >833-329-8280</p>

                </div>

                <div className="flex flex-col sm:flex-row flex-wrap items-center gap-2">

                    <img src={blueEmail} alt="email icon" />

                    <p className="text-[#58585B]" >Email:</p>

                    <p className="text-[#297CA3]" >customerservice@alder.com</p>

                </div>

                <div className="flex flex-col sm:flex-row flex-wrap items-center  gap-2">

                    <img src={bluePin} alt="pushpin icon" />

                    <p className="text-[#58585B]" >Address:</p>

                    <p className="text-[#297CA3]" >450 N 1500 W Orem, UT 84057</p>

                </div>

            </div>


            <form className="flex flex-col items-center w-full max-w-md gap-3 md:w-1/2" >

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
                                    if(err === 'message'){
                                        errMessage = 'Please provide additional details in your message'
                                    }

                                    return (

                                        <motion.p
                                        key={errMessage}
                                        initial={{y: 100, opacity: 0}}
                                        transition={{duration: .75, type: 'spring', bounce: .20}}
                                        animate={{y: 0, opacity: 1}}
                                        exit={{y: 100, opacity: 0}}
                                        className=" text-black font-medium"
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
                                        className=" text-black font-medium"
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
                                className="text-xl text-black font-medium"
                            >
                                {formMessage}
                            </motion.p>
                </div>)

                :

                null

            }
                </AnimatePresence>

                <div className="flex flex-row w-full justify-between">

                    <input id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" className={` w-[47.5%] h-10 ${error.includes('first') ? 'border-[3px] border-red-600' : 'border-[1px] border-black'} px-3 py-2 `} />
                    <label className=" absolute overflow-hidden w-[1px] h-[1px] -m-[1px] p-0 border-0" htmlFor="firstname">First Name</label>

                    <input id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" className={` w-[47.5%] h-10 ${error.includes('last') ? 'border-[3px] border-red-600' : 'border-[1px] border-black'} px-3 py-2 `} />
                    <label className=" absolute overflow-hidden w-[1px] h-[1px] -m-[1px] p-0 border-0" htmlFor="lastname">Last Name</label>

                </div>

                <div className="flex flex-row w-full justify-between">

                    <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className={` w-[47.5%] h-10 ${error.includes('email') ? 'border-[3px] border-red-600' : 'border-[1px] border-black'} px-3 py-2 `} />
                    <label className=" absolute overflow-hidden w-[1px] h-[1px] -m-[1px] p-0 border-0" htmlFor="email">Email</label>

                    <input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone" className={` w-[47.5%] h-10 ${error.includes('phone') ? 'border-[3px] border-red-600' : 'border-[1px] border-black'} px-3 py-2 `} />
                    <label className=" absolute overflow-hidden w-[1px] h-[1px] -m-[1px] p-0 border-0" htmlFor="phone" >Phone Number</label>

                </div>

                <textarea onChange={(e) => setMessage(e.target.value)} value={message} className={`w-full h-32 ${error.includes('message') ? 'border-[3px] border-red-600' : 'border-[1px] border-black'}  p-2`} placeholder="Your Message" />

                <div className="w-full flex flex-row justify-between items-center ">

                    <a href="/privacy" className="text-[#58585B] text-[8px] underline" >Privacy Policy | Licensing</a>

                    <button onClick={submitHandler} className="text-white bg-[#D5D5D5] hover:bg-[#c9c9c9] transition duration-100 hover:scale-105 shadow-2xl px-4 py-1 rounded-full border-2 border-white " >Submit</button>

                </div>
            </form>


        </div>

        <div className="w-full h-[300px] ">
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCpKVHjz8HUudDQh4Aa8rI9GnQkigWFaww' }}
        defaultCenter={{
            lat: 40.309454,
            lng: -111.733769
        }}
        defaultZoom={13}

        >

        <img
        src={filledBluePin} 
        className="w-8 h-10"
        lat={40.309454}
        lng={-111.733769}
        alt="pushpin icon"
        />

        </GoogleMapReact>
        </div>

    </div>)
}

export default ContactForm