
import story1 from '../../assets/home-security/story1.jpg'
import story2 from '../../assets/home-security/story2.jpg'
import story3 from '../../assets/home-security/story3.jpg'
import startQuote from '../../assets/home-security/startQuote.svg'
import endQuote from '../../assets/home-security/endQuote.svg'
import goldStar from '../../assets/goldstar.svg'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const ReviewQuote = () => {


    const [quote, setQuote] = useState(1)

    const switchQuoteHandler = () => {
        setQuote((prevQuote) => (prevQuote === 3 ? 1 : prevQuote + 1))
    }

    useEffect(() => {

        let intervalId = setInterval(switchQuoteHandler, 10000)

        return () => {
            clearInterval(intervalId)
        }

    }, [quote])


    return(
        <div className='w-full flex justify-center bg-white py-10 px-4'>

            <AnimatePresence mode='popLayout'>
                {
                    quote === 1 ?
                    <motion.div className=' w-full max-w-5xl gap-4 flex flex-col-reverse items-center md:flex-row md:justify-around'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    
                    exit={{opacity: 0}}
                    >

                        <div className='flex flex-col items-center justify-center gap-4'>
                            <div className='flex flex-row'>
                            <div className='h-full flex items-start'>
                                <img className=' max-w-[20px] max-h-[20px] sm:max-w-[50px] sm:max-h-[50px]' src={startQuote} alt="open quotes" />
                            </div>

                            <div className=' max-w-[350px] min-w-[200px] ml-1'>
                                <p className=' text-center text-sm sm:text-base text-[#58585B]'>Very polite and informative. Probably one of the smoothest processes I’ve been through when it comes to buying a product.  Everything was done fast, no headache of waiting for it to be done for hours or days etc. Easy to understand how it all works. Highly recommend this to keep you and your family safe!  Plus it’s actually affordable.</p>
                            </div>

                            <div className=' flex items-end'>
                                <img className=' max-w-[20px] max-h-[20px] sm:max-w-[50px] sm:max-h-[50px]' src={endQuote} alt='close quotes' />
                            </div>
                            </div>

                            <div className=' flex flex-row gap-2'>
                                <img src={goldStar} alt='gold star' />
                                <img src={goldStar} alt='gold star' />
                                <img src={goldStar} alt='gold star' />
                                <img src={goldStar} alt='gold star' />
                                <img src={goldStar} alt='gold star' />
                            </div>

                            <div className='flex flex-row gap-2'>
                            <span disabled={true} className={`w-3 h-3 rounded-full ${quote === 1 ? 'bg-[#297CA3]' : 'bg-zinc-300'} `} />
                            <span disabled={true} className={`w-3 h-3 rounded-full ${quote === 2 ? 'bg-[#297CA3]' : 'bg-zinc-300'}`} />
                            <span disabled={true} className={`w-3 h-3 rounded-full ${quote === 3 ? 'bg-[#297CA3]' : 'bg-zinc-300'}`} />
                            </div>
                        </div>
                        <img className=' max-w-[260px] sm:max-w-xs shadow-2xl' src={story1} alt='alder ceo standing next to customer' />

                    </motion.div>
                    : null
                }

            </AnimatePresence>



            <AnimatePresence mode='popLayout'>

                {
                    quote === 2 ?
                    <motion.div className=' w-full max-w-5xl gap-4 flex flex-col-reverse items-center md:flex-row md:justify-around'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    
                    exit={{opacity: 0}}
                    >

                        <div className='flex flex-col items-center justify-center gap-4'>
                            <div className='flex flex-row'>
                            <div className='h-full flex items-start'>
                                <img className=' max-w-[20px] max-h-[20px] sm:max-w-[50px] sm:max-h-[50px]' src={startQuote} alt="open quotes" />
                            </div>

                            <div className=' max-w-[350px] min-w-[200px] ml-1'>
                                <p className=' text-center text-sm sm:text-base text-[#58585B]'>Great experience.  Sales team was knowledgeable and not pushy.  The install team was fast and efficient.  Same day service and everyone was friendly and talented.  This should be how alarm systems are done.</p>
                            </div>

                            <div className=' flex items-end'>
                                <img className=' max-w-[20px] max-h-[20px] sm:max-w-[50px] sm:max-h-[50px]' src={endQuote} alt='close quotes' />
                            </div>
                            </div>

                            <div className=' flex flex-row gap-2'>
                                <img src={goldStar} alt='gold star' />
                                <img src={goldStar} alt='gold star' />
                                <img src={goldStar} alt='gold star' />
                                <img src={goldStar} alt='gold star'  />
                                <img src={goldStar} alt='gold star' />
                            </div>

                            <div className='flex flex-row gap-2'>
                            <button disabled={true} className={`w-3 h-3 rounded-full ${quote === 1 ? 'bg-[#297CA3]' : 'bg-zinc-300'} `} />
                            <button disabled={true} className={`w-3 h-3 rounded-full ${quote === 2 ? 'bg-[#297CA3]' : 'bg-zinc-300'}`} />
                            <button disabled={true} className={`w-3 h-3 rounded-full ${quote === 3 ? 'bg-[#297CA3]' : 'bg-zinc-300'}`} />
                            </div>
                        </div>
                        <img className=' max-w-[260px] sm:max-w-xs shadow-2xl' src={story2} alt="alder sales rep with customer" />

                    </motion.div>
                    : null
                }

            </AnimatePresence>




            <AnimatePresence mode='popLayout'>

                {
                    quote === 3 ?
                    <motion.div className=' w-full max-w-5xl gap-4 flex flex-col-reverse items-center md:flex-row md:justify-around'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    
                    exit={{opacity: 0}}
                    >

                        <div className='flex flex-col items-center justify-center gap-4'>
                            <div className='flex flex-row'>
                            <div className='h-full flex items-start'>
                                <img className=' max-w-[20px] max-h-[20px] sm:max-w-[50px] sm:max-h-[50px]' src={startQuote} alt="open quotes" />
                            </div>

                            <div className=' max-w-[350px] min-w-[200px] ml-1'>
                                <p className=' text-center text-sm sm:text-base text-[#58585B]'>I think Alder is a very good company.  The technicians are young and seem to really care about working hard at making sure they are giving good customer service.  I would recommend this company to anyone who is interested in getting great security for a reasonable amount of money.</p>
                            </div>

                            <div className=' flex items-end'>
                                <img className=' max-w-[20px] max-h-[20px] sm:max-w-[50px] sm:max-h-[50px]' src={endQuote} alt='close quotes' />
                            </div>
                            </div>

                            <div className=' flex flex-row gap-2'>
                                <img src={goldStar} alt='gold star' />
                                <img src={goldStar} alt='gold star' />
                                <img src={goldStar} alt='gold star' />
                                <img src={goldStar} alt='gold star' />
                                <img src={goldStar} alt='gold star' />
                            </div>

                            <div className='flex flex-row gap-2'>
                            <button disabled={true} className={`w-3 h-3 rounded-full ${quote === 1 ? 'bg-[#297CA3]' : 'bg-zinc-300'} `} />
                            <button disabled={true} className={`w-3 h-3 rounded-full ${quote === 2 ? 'bg-[#297CA3]' : 'bg-zinc-300'}`} />
                            <button disabled={true} className={`w-3 h-3 rounded-full ${quote === 3 ? 'bg-[#297CA3]' : 'bg-zinc-300'}`} />
                            </div>
                        </div>


                        <img className=' max-w-[260px] sm:max-w-xs shadow-2xl' src={story3} alt="alder sales rep with two customers" />

                    </motion.div>
                    : null
                }

            </AnimatePresence>


        </div>
    )
}

export default ReviewQuote