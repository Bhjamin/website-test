import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import axios from 'axios'
import loading from '../../assets/loading.svg'

const CCPAForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [request, setRequest] = useState("")
    const [error, setError] = useState([])
    const [formMessage, setFormMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const submitHandler = (e) => {

        e.preventDefault()

        setError([])

        let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(email).toLowerCase())

        let formValid = null

        validEmail && name.length > 2 && request.length > 1 ? formValid = true : formValid = false

        if (formValid === false) {

            if (!validEmail) {
                setError(prevError => [...prevError, 'email'])
            }
            if (name.length < 3) {
                setError(prevError => [...prevError, 'name'])
            }
            if (request.length < 1) {
                setError(prevError => [...prevError, 'request'])
            }

        } else {

            setIsLoading(true)

            axios({
                url: 'https://relay.aldermarketing.com/api/v1/ccpa',
                method: 'post',
                data: {
                    name: name,
                    email: email,
                    request_type: request
                }
            })
            .then((res) => {

                    setIsLoading(false)

                    setFormMessage('Request sent successfully')

                    setName('')
                    setEmail('')
                    
            })
            .catch((err) => {
                setIsLoading(false)
                setFormMessage('Something went wrong, please try again later')
                console.log(err)
            })


        }

    }

    return (<div className="w-full max-w-7xl bg-[#F1F1F2] flex flex-col items-center py-8 px-4">

        <h2 className="text-[#58585B] text-2xl font-medium text-center mb-4" >California Consumer Protect Act Request Form</h2>

        <AnimatePresence>
            {

                error.length === 1 ?

                    (<div className="w-full overflow-hidden max-w-3xl flex flex-col items-center md:flex-row justify-center gap-2 h-10">
                        {
                            error.includes('email') ?
                            <motion.p
                                    initial={{ y: 100, opacity: 0 }}
                                    transition={{ duration: .75, type: 'spring', bounce: .20 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 100, opacity: 0 }}
                                    className="text-xl text-black font-medium"
                                >
                                Invalid email address
                            </motion.p>
                            :
                            null
                        }
                        {
                            error.includes('name') ?
                            <motion.p
                                    initial={{ y: 100, opacity: 0 }}
                                    transition={{ duration: .75, type: 'spring', bounce: .20 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 100, opacity: 0 }}
                                    className="text-xl text-black font-medium"
                                >
                                Please enter your Name
                            </motion.p>
                            :
                            null
                        }
                        {
                            error.includes('request') ?
                            <motion.p
                                    initial={{ y: 100, opacity: 0 }}
                                    transition={{ duration: .75, type: 'spring', bounce: .20 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: 100, opacity: 0 }}
                                    className="text-xl text-black font-medium"
                                >
                                Please choose request type
                            </motion.p>
                            :
                            null
                        }
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

        <form className=" w-4/5 xs:w-1/2 lg:w-1/4 flex flex-col mt-4 items-center">

            <div className="w-full flex flex-col">
                <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Name" className={`w-full ${error.includes('name') ? 'border-2 border-red-600' : 'border-[1px] border-black'} rounded-tl-md rounded-tr-md px-2 py-2`} />
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder="Email" className={`w-full ${error.includes('email') ? 'border-2 border-red-600' : 'border-[1px] border-black'} px-2 py-2`} />

                <select onChange={(e) => setRequest(e.target.value)} className={`w-full ${error.includes('request') ? 'border-2 border-red-600' : 'border-[1px] border-black'} px-2 py-2 text-[#58585B]`} defaultValue={"Request Type"}>
                    <option disabled={true} defaultValue={true} >Request Type</option>
                    <option value="request to know" className="text-[#58585B]" >Request to Know</option>
                    <option value="request to access" className="text-[#58585B]" >Request to Access</option>
                    <option value="request to delete" className="text-[#58585B]" >Request to Delete</option>
                </select>
            </div>

            <br />

            <button onClick={(e) => submitHandler(e)} className="text-white border-2 border-white shadow-xl w-[90%] bg-[#595959] rounded-full py-1 hover:scale-105 hover:bg-[#3f3f3f] hover:shadow-2xl hover:-translate-y-1 transition duration-100 flex justify-center items-center">
                {
                    isLoading ?
                        <img alt="loading animation" src={loading} />
                        :
                        'Submit'
                }
            </button>
        </form>

    </div>)
}

export default CCPAForm