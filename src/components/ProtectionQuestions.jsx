import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import apartment from '../assets/apartment.svg'
import house from '../assets/house.svg'
import townhouse from '../assets/Townhouse.svg'
import smoke from '../assets/smoke.jpg'
import co2 from '../assets/co2.jpg'
import flood from '../assets/flood.jpg'
import medPendant from '../assets/Medical Pendant.png'
import door_window_sensor from '../assets/DoorWindow Sensor.png'
import loading from '../assets/loading.svg'
import axios from "axios"

const ProtectionQuestions = () => {

    const [step, setStep] = useState(1)
    const [ownership, setOwnership] = useState(null)
    const [concerns, setConcerns] = useState([])
    const [property, setProperty] = useState('house')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const setPropertyHandler = (property) => {
        setProperty(property)
    }

    const setStepHandler = () => {
        if (step < 4) {
            setStep(step + 1)
        }
    }

    const setConcernsHandlder = (concern) => {

        let index = concerns.indexOf(concern)

        if (index === -1) {
            setConcerns([...concerns, concern])

        }

        if (index !== -1) {
            let newArray = concerns.filter((item, idx) => idx !== index);
            setConcerns(newArray);
        }

    }


    const submitHandler = () => {

        setError([])

        let validPhoneNumber = /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(phone)

        let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase())

        let formValid = null

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
                property,
                ownership,
                concerns,
                last_page: window.location.pathname,
                last_page_full: window.location.href,
                atid: '1030',
                subid: '',
                source: 'Alder Home Page'
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

                  setIsLoading(false)
                  setFirstName('')
                  setLastName('')
                  setEmail('')
                  setPhone('')
      
                  window.location.href = '/thank-you'

              }).catch((err) => {

                setIsLoading(false)
                setError(prevError => [...prevError, 'axiosError'])
                console.log(err)
                setTimeout(() => {
                    setError([])
                }, 10000)

              })


        }

    }


    return (
        <div className="w-full flex flex-col px-2 sm:px-8 items-center justify-center bg-white overflow-x-hidden">

            {
                step < 3 ?
                    <>
                        <h2 className="font-medium text-4xl text-center my-4 sm:text-[50px] text-[#58585b]">What would you like to protect?</h2>
                        <p className=" text-base sm:text-xl text-center text-[#58585b]">Answer a few simple questions to learn about your security recommendations</p>
                    </>
                    : step === 3 ?
                        <>
                            <h2 className="font-medium text-4xl text-center my-4 sm:text-[50px] text-[#58585b]">What are you most concerned about?</h2>
                            <p className=" text-base sm:text-xl text-center text-[#58585b]">Choose all that apply</p>
                        </>
                        : step === 4 ?
                            <>
                                <h2 className="font-medium text-4xl w-full text-center my-4 sm:text-[50px] text-[#58585b]">You are almost there!</h2>
                                <p className=" text-base sm:text-xl text-center text-[#58585b]">Submit this form to be contacted by one of our representatives.</p>
                            </>
                            : null

            }

            <br />

            <div className="flex w-full flex-col-reverse lg:flex-row items-center justify-center">

                {step === 1 &&
                    <div className="flex flex-wrap h-auto gap-4 justify-center items-center max-w-lg lg:w-1/2 z-10 ">

                        <button onClick={() => setPropertyHandler('house')} className={` ${property === 'house' ? 'bg-[#4e4e4e]' : 'bg-[#757575]'} hover:bg-[#696969] rounded-full text-white w-[95px] h-10 sm:w-[150px] sm:h-12 hover:scale-110 transition duration-200 ease-in-out`}>
                            House
                        </button>

                        <button onClick={() => setPropertyHandler('apartment')} className={` ${property === 'apartment' ? 'bg-[#4e4e4e]' : 'bg-[#757575]'} hover:bg-[#696969] rounded-full text-white w-[95px] h-10 sm:w-[150px] sm:h-12 hover:scale-110 transition duration-200 ease-in-out`}>
                            Apartment
                        </button>

                        <button onClick={() => setPropertyHandler('townhouse')} className={` ${property === 'townhouse' ? 'bg-[#4e4e4e]' : 'bg-[#757575]'} hover:bg-[#696969] rounded-full text-white w-[95px] h-10 sm:w-[150px] sm:h-12 hover:scale-110 transition duration-200 ease-in-out`}>
                            Townhouse
                        </button>

                        <button onClick={() => setPropertyHandler('condo')} className={` ${property === 'condo' ? 'bg-[#4e4e4e]' : 'bg-[#757575]'} hover:bg-[#696969] rounded-full text-white w-[95px] h-10 sm:w-[150px] sm:h-12 hover:scale-110 transition duration-200 ease-in-out`}>
                            Condo
                        </button>

                        <button onClick={() => setPropertyHandler('other')} className={` ${property === 'other' ? 'bg-[#4e4e4e]' : 'bg-[#757575]'} hover:bg-[#696969] rounded-full text-white w-[95px] h-10 sm:w-[150px] sm:h-12 hover:scale-110 transition duration-200 ease-in-out`}>
                            Other
                        </button>

                    </div>
                }

                {step === 2 &&
                    <div className="flex flex-row flex-wrap lg:flex-col gap-4 w-full items-center justify-center lg:w-1/2 z-10">

                        <button onClick={() => setOwnership('own')} className={` ${ownership === 'own' ? 'bg-[#4e4e4e]' : 'bg-[#757575]'} hover:bg-[#696969] rounded-full text-white w-[150px] py-3 px-6 hover:scale-110 hover:translate-x-0 lg:hover:translate-x-3 transition duration-200 ease-in-out`}>
                            Own
                        </button>

                        <button onClick={() => setOwnership('rent')} className={` ${ownership === 'rent' ? 'bg-[#4e4e4e]' : 'bg-[#757575]'} hover:bg-[#696969] rounded-full text-white w-[150px] py-3 px-8 hover:scale-110 hover:translate-x-0 lg:hover:translate-x-3 transition duration-200 ease-in-out`}>
                            Rent
                        </button>

                    </div>
                }

                {step === 3 &&
                    <div className="flex flex-wrap h-auto gap-4 justify-center items-center max-w-lg lg:w-1/2 z-10 ">

                        <button onClick={() => setConcernsHandlder('fire')} className={` ${concerns.includes('fire') ? 'bg-[#4e4e4e]' : 'bg-[#757575]'} hover:bg-[#4e4e4e] rounded-full text-white text-sm w-[95px] sm:w-[150px] py-3 px-6 hover:scale-110 hover:translate-x-0 active:bg-[#696969] transition duration-200 ease-in-out`}>
                            Fire
                        </button>

                        <button onClick={() => setConcernsHandlder('intrusion')} className={` ${concerns.includes('intrusion') ? 'bg-[#4e4e4e]' : 'bg-[#757575]'} hover:bg-[#4e4e4e] rounded-full text-white text-sm w-[95px] sm:w-[150px] py-3 px-6 hover:scale-110 hover:translate-x-0 active:bg-[#696969] transition duration-200 ease-in-out`}>
                            Intrusion
                        </button>

                        <button onClick={() => setConcernsHandlder('flood')} className={` ${concerns.includes('flood') ? 'bg-[#4e4e4e]' : 'bg-[#757575]'} hover:bg-[#4e4e4e] rounded-full text-white w-[95px] text-sm sm:w-[150px] py-3 px-6 hover:scale-110 hover:translate-x-0 active:bg-[#696969] transition duration-200 ease-in-out`}>
                            Flood
                        </button>

                        <button onClick={() => setConcernsHandlder('co2')} className={` ${concerns.includes('co2') ? 'bg-[#4e4e4e]' : 'bg-[#757575]'} hover:bg-[#4e4e4e] rounded-full text-white text-sm w-[95px] sm:w-[150px] py-3 px-6 hover:scale-110 hover:translate-x-0 active:bg-[#696969] transition duration-200 ease-in-out`}>
                            Co2
                        </button>

                        <button onClick={() => setConcernsHandlder('medical')} className={` ${concerns.includes('medical') ? 'bg-[#4e4e4e]' : 'bg-[#757575]'} hover:bg-[#4e4e4e] rounded-full text-white text-sm w-[135px] sm:w-[150px] py-3 px-1 hover:scale-110 hover:translate-x-0 active:bg-[#696969] transition duration-200 ease-in-out`}>
                            Medical Emergency
                        </button>

                    </div>
                }

                {
                    step == 4 &&
                    <div className=" w-full flex flex-col items-center gap-4">

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
                                            if (err === 'first') {
                                                errMessage = 'Please enter your first name'
                                            }
                                            if (err === 'last') {
                                                errMessage = 'Please enter your last name'
                                            }
                                            if (err === 'axiosError') {
                                                errMessage = 'Something went wrong, please try again later'
                                            }

                                            return (

                                                <motion.p
                                                    initial={{ y: 100, opacity: 0 }}
                                                    transition={{ duration: .75, type: 'spring', bounce: .20 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    exit={{ y: 100, opacity: 0 }}
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
                                                initial={{ y: 100, opacity: 0 }}
                                                transition={{ duration: .75, type: 'spring', bounce: .20 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: 100, opacity: 0 }}
                                                className="text-xl text-black font-medium"
                                            >
                                                Please fill out the form
                                            </motion.p>
                                        </div>)

                                        :

                                        null

                            }
                        </AnimatePresence>

                        <input id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" className={`bg-white ${error.includes('first') ? 'border-4 border-red-600' : 'border-2 border-[#757575]'} rounded-md p-3 w-5/6 sm:w-1/3`} />
                        <label htmlFor="firstname" className=" absolute overflow-hidden w-[1px] h-[1px] -m-[1px] p-0 border-0">First Name</label>

                        <input id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" className={`bg-white ${error.includes('last') ? 'border-4 border-red-600' : 'border-2 border-[#757575]'} rounded-md p-3 w-5/6 sm:w-1/3`} />
                        <label htmlFor="lastname" className=" absolute overflow-hidden w-[1px] h-[1px] -m-[1px] p-0 border-0">Last Name</label>

                        <input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder="Phone" className={`bg-white ${error.includes('phone') ? 'border-4 border-red-600' : 'border-2 border-[#757575]'} rounded-md p-3 w-5/6 sm:w-1/3`} />
                        <label htmlFor="phone" className=" absolute overflow-hidden w-[1px] h-[1px] -m-[1px] p-0 border-0">Phone Number</label>

                        <input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className={`bg-white ${error.includes('email') ? 'border-4 border-red-600' : 'border-2 border-[#757575]'} rounded-md p-3 w-5/6 sm:w-1/3`} />
                        <label htmlFor="email" className=" absolute overflow-hidden w-[1px] h-[1px] -m-[1px] p-0 border-0">Email</label>

                    </div>
                }

                <br />


                {
                    step !== 4 ?
                        <div className="w-full lg:w-1/2 flex justify-center overflow-hidden relative z-0">
                            {
                                step < 3 ?
                                    <AnimatePresence mode="popLayout">
                                        {
                                            property === 'house' ?
                                                <motion.div
                                                    key='house'
                                                    initial={{ x: -200, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    exit={{ x: 200, opacity: 0, position: 'absolute' }}
                                                    className="w-full"
                                                >
                                                    <img src={house}
                                                        className="w-full min-h-[200px] max-h-64" alt="icon of a house" />
                                                </motion.div>
                                                :
                                                null
                                        }
                                        {
                                            property === 'apartment' ?
                                                <motion.div
                                                    key='apartment'
                                                    initial={{ x: -200, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    exit={{ x: 200, opacity: 0, position: 'absolute' }}
                                                >
                                                    <img src={apartment} className=" min-h-[200px] max-h-64" alt="icon of an apartment" />
                                                </motion.div>
                                                :
                                                null
                                        }
                                        {
                                            property === 'townhouse' ?
                                                <motion.div
                                                    key='townhouse'
                                                    initial={{ x: -200, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    exit={{ x: 200, opacity: 0, position: 'absolute' }}
                                                >
                                                    <img src={townhouse} className="min-h-[200px] max-h-64" alt="icon of a townhouse" />
                                                </motion.div>
                                                :
                                                null
                                        }
                                        {
                                            property === 'condo' ?
                                                <motion.div
                                                    key={'condo'}
                                                    initial={{ x: -200, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    exit={{ x: 200, opacity: 0, position: 'absolute' }}
                                                >
                                                    <img src={apartment} className="min-h-[200px] max-h-64" alt="icon of an apartment" />
                                                </motion.div>
                                                :
                                                null
                                        }
                                        {
                                            property === 'other' ?
                                                <motion.div
                                                    key='other'
                                                    initial={{ x: -200, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    exit={{ x: 200, opacity: 0, position: 'absolute' }}
                                                >
                                                    <img src={townhouse} className="min-h-[200px] max-h-64" alt="icon of a townhouse" />
                                                </motion.div>
                                                :
                                                null
                                        }
                                    </AnimatePresence>
                                    : null
                            }

                            {
                                step === 3 ?
                                    concerns[concerns.length - 1] === 'fire' ?
                                        <div className="w-full flex flex-col items-center">
                                            <img className=" max-h-80" src={smoke} alt="fire alarm" />
                                            <h3 className="text-center text-xl font-medium text-[#585860] mb-2">Smart Smoke Detector</h3>
                                            <p className="text-center text-[#585860]">Our smoke detector will automatically alert the fire department if you are not able to, allowing the fastest response time possible.</p>
                                        </div>
                                        : concerns[concerns.length - 1] === 'intrusion' ?
                                            <div className="w-full flex flex-col items-center">
                                                <img className=" max-h-80" src={door_window_sensor} alt="door and window sensor" />
                                                <h3 className="text-center text-xl font-medium text-[#585860] mb-2">Window/Door Sensor</h3>
                                                <p className="text-center text-[#585860]">Our sensors give you the peace of mind of knowing that the entry points into your home are secure. An alarm will be triggered anytime a sensor is tripped, notifying you and the local authorities.</p>
                                            </div>
                                            : concerns[concerns.length - 1] === 'flood' ?
                                                <div className="w-full flex flex-col items-center">
                                                    <img className=" max-h-80" src={flood} alt="flood sensor" />
                                                    <h3 className="text-center text-xl font-medium text-[#585860] mb-2">Smart Flood Sensor</h3>
                                                    <p className="text-center text-[#585860]">Our Flood Sensor will detect moisture in the area and alert you immediately, preventing a small problem from becoming a costly disaster.</p>
                                                </div>
                                                : concerns[concerns.length - 1] === 'co2' ?
                                                    <div className="w-full flex flex-col items-center">
                                                        <img className=" max-h-80" src={co2} alt="carbon monoxide sensor" />
                                                        <h3 className="text-center text-xl font-medium text-[#585860] mb-2">Carbon Monoxide</h3>
                                                        <p className="text-center text-[#585860]">Our carbon monoxide detector will quickly detect any carbon monoxide and alert you immediately so that you and your family can evacuate to safety.</p>
                                                    </div>
                                                    : concerns[concerns.length - 1] === 'medical' ?
                                                        <div className="w-full flex flex-col items-center">
                                                            <img className=" max-h-80" src={medPendant} alt="medical emergency pendant" />
                                                            <h3 className="text-center text-xl font-medium text-[#585860] mb-2">Medical Pendant</h3>
                                                            <p className="text-center text-[#585860]">Emergency help is quickly obtained with just the push of a button. Loved ones never have to be left alone without access to life-saving help.</p>
                                                        </div>
                                                        :
                                                        <div className="w-full flex flex-col items-center">
                                                            <img className=" max-h-80" src={door_window_sensor} alt="door and window sensor" />
                                                            <h3 className="text-center text-xl font-medium text-[#585860] mb-2">Window/Door Sensor</h3>
                                                            <p className="text-center text-[#585860]">Our sensors give you the peace of mind of knowing that the entry points into your home are secure. An alarm will be triggered anytime a sensor is tripped, notifying you and the local authorities.</p>
                                                        </div>
                                    : null
                            }
                        </div>
                        : null
                }

            </div>

            <br />
            <br />

            <div className="w-full flex flex-col items-center z-10">
                {
                    step === 4 && <p className=" w-full md:w-1/2 text-center text-[10px] mb-2 text-[#58585b]">By clicking the "Submit" button, I agree to our Privacy Policy and consent for Alder, or one of its authorized marketers, to call or text me at the phone number provided above, using automated or other technologies, regarding current and future marketing offers. I understand that my consent is not required to make a purchase.</p>
                }
                <button onClick={step < 4 ? setStepHandler : submitHandler} className={`bg-[#168359] hover:bg-[#14734f] py-3 px-6 w-4/5 sm:w-1/2 lg:w-1/3 text-white flex justify-center rounded-full hover:scale-105 hover:translate-y-[-2px] transition duration-200 ease-in-out`}>
                    {
                        step === 1 ? 'Get Started' : (step === 4 ? (isLoading ? <img src={loading} /> : "Submit") : 'Continue' )
                    }
                </button>
                {
                    step === 1 && <p className=" w-1/3 text-center text-xs text-[#58585b] pt-1">(It only takes a minute or two)</p>
                }
            </div>



            <div className="w-full flex justify-center gap-6 z-10 my-8">
                <span onClick={() => setStep(1)} className={`w-3 h-3 rounded-full ${step === 1 ? 'bg-[#297CA3]' : 'bg-zinc-300'} `} />
                <span onClick={() => setStep(2)} className={`w-3 h-3 rounded-full ${step === 2 ? 'bg-[#297CA3]' : 'bg-zinc-300'}`} />
                <span onClick={() => setStep(3)} className={`w-3 h-3 rounded-full ${step === 3 ? 'bg-[#297CA3]' : 'bg-zinc-300'}`} />
                <span onClick={() => setStep(4)} className={`w-3 h-3 rounded-full ${step === 4 ? 'bg-[#297CA3]' : 'bg-zinc-300'}`} />
            </div>

        </div>
    )
}

export default ProtectionQuestions