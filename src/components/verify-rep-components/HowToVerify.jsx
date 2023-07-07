import axios from "axios"
import { useState } from "react"
import loading from '../../assets/loading.svg'
import { AnimatePresence, motion } from "framer-motion"

const HowToVerify = () => {

    const [input, setInput] = useState('')
    const [error, setError] = useState('')
    const [repName, setRepName] = useState('')
    const [managerName, setManagerName] = useState('')
    const [managerPhone, setManagerPhone] = useState('')
    const [pictureData, setPictureData] = useState(null)
    const [isRepVerified, setIsRepVerified] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const submitHandler = () => {
        setError('');
        setIsRepVerified(false)

        input.length === 0
            ? setError('noInput')
            : (
                setIsLoading(true),
                axios.get(`https://bbo9xog6dl.execute-api.us-east-1.amazonaws.com/prod/alder-rep-verify-endpoint?id=${input}`)
                    .then((res) => {

                        setIsLoading(false);

                        const { RepName, ManagerName, ManagerPhone, Successful, PictureData } = res.data;

                        !Successful
                            ?
                            (
                                setError('repIdError'),
                                setInput('')
                            )
                            :
                            (
                                setIsRepVerified(true),
                                setRepName(RepName),
                                setManagerName(ManagerName),
                                setManagerPhone(ManagerPhone),
                                setPictureData(PictureData),
                                console.log(PictureData)
                            );

                    }).catch((err) => {

                        setInput('')

                        setIsLoading(false);
                        setError('axiosError')
                        console.log(err);

                    })
            );
    };

    return (
        <div className="w-full bg-white flex justify-center overflow-x-hidden">

            <div className="w-full max-w-7xl flex flex-col gap-8 md:gap-0 md:flex-row py-12 bg-white">

                <div className="flex flex-col text-center justify-center px-2 md:pl-16 gap-4 w-full md:w-1/2">

                    <h2 className="text-[#58585B] text-2xl my-2 font-medium ">How to Verify</h2>

                    <p className="text-[#58585B] text-lg">1. Ask for the rep's badge and enter the Rep ID in the form.</p>
                    <p className="text-[#58585B] text-lg">2. If the rep's information appears, they currently work with Alder.</p>
                    <p className="text-[#58585B] text-lg">3. If the rep's information does not appear, they do not work with Alder.</p>

                </div>


                <div className="flex flex-col items-center justify-center gap-4 w-full md:w-1/2">

                    <p className="font-medium text-[#58585B]" >Verify Representative</p>

                    <input id="repid" onChange={(e) => setInput(e.target.value)} value={input} className={`${error === 'noInput' ? 'border-4 border-red-600' : 'border-[1px] border-[#b6b6b6]'} rounded h-10 w-1/2 lg:w-1/3 px-2 `} placeholder="Enter Rep ID" type="text" />
                    <label className="absolute overflow-hidden w-[1px] h-[1px] -m-[1px] p-0 border-0" htmlFor="repid" >Alder Representative ID</label>

                    {
                        error === 'noInput' ?
                            <div className="w-full md:w-1/2">
                                <p className="text-center font-medium">Please enter a Representative ID</p>
                            </div>
                            :
                            null
                    }

                    {
                        error === 'repIdError' ?
                            <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-2 px-4">

                                <h2 className="text-xl font-medium text-red-600" >- Rep Not Verified -</h2>

                                <p className=" text-center text-sm xl:text-base">
                                    Verify you entered the correct ID and try again or click below to verify another representative
                                </p>

                            </div>
                            :
                            null
                    }

                    {
                        error === 'axiosError' ?
                            <div className="w-full md:w-1/2">
                                <p className="text-center font-medium">Something went wrong, please try again later</p>
                            </div>
                            :
                            null
                    }

                    <AnimatePresence>

                        {
                            isRepVerified ?

                                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-2 px-4">

                                    <motion.h2 initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .45, type: 'spring' }} className="text-xl font-medium text-green-700">
                                        Rep Verified
                                    </motion.h2>

                                    {pictureData ? <motion.img initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .45, type: 'spring', delay: .15 }} style={{ maxWidth: "50%", maxHeight: "50%" }} src={"data:image/png;base64, " + pictureData} /> : <motion.p initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .45, type: 'spring', delay: .50 }}><strong>No Image Found</strong></motion.p>}

                                    <motion.p initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .45, type: 'spring', delay: .30 }} className="text-[#58585B] font-medium">Name: <span className="text-[#58585B] font-normal">{repName}</span></motion.p>

                                    <motion.p initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .45, type: 'spring', delay: .45 }} className="text-[#58585B] font-medium text-center">Manager: <span className="text-[#58585B] font-normal">{managerName}</span></motion.p>

                                    <motion.p initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .45, type: 'spring', delay: .60 }} className="text-[#58585B] font-medium">Manager Phone: <span className="text-[#58585B] font-normal">{managerPhone}</span></motion.p>

                                </div>

                                :

                                null
                        }

                    </AnimatePresence>


                    <button onClick={submitHandler} className=" text-white rounded-full bg-[#168359] hover:bg-[#13724e] hover:scale-105 transition duration-100 flex justify-center items-center h-10 px-6 hover:shadow-lg " >
                        {

                            error === 'repIdError' ? 'Verify Another Rep' : (isLoading ? <img src={loading} alt="loading animation" /> : (isRepVerified ? 'Verify Another Rep' : 'Verify'))

                        }
                    </button>


                </div>

            </div>

        </div>
    )
}

export default HowToVerify