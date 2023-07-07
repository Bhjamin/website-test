import { useState, useEffect } from "react"
import { AnimatePresence, motion, useAnimate } from "framer-motion"

const AdamSchanz = () => {

    const [y, setY] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('');

    const handleScroll = () => {
        const scrollY = window.scrollY;

        if (y < scrollY) {
            setScrollDirection('down');
        } else if (y > scrollY) {
            setScrollDirection('up');
        }

        setY(scrollY);
    };

    useEffect(() => {
        console.log(scrollDirection);
    }, [scrollDirection]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [y]);


    return (
        <div className="w-full flex h-full">

            <div className="w-1/2 h-full hidden xl:flex flex-col bg-white py-48 px-20 gap-16 ">

                <div className="w-full flex flex-col gap-2">
                    <h1 className="text-[#297CA3] text-6xl font-medium">Adam Schanz</h1>
                    <h2 className="text-[#58585B] text-3xl">Alder CEO</h2>
                </div>

                <p className={`text-[#58585B] leading-6 ${y < 201 && y > 50 ? 'font-medium text-lg' : 'font-normal'} `}>Adam Schanz was born in Sacramento, California. He is the fifth of eight children and learned at an early age to negotiate between his three older brothers and sister and three younger sisters.</p>

                <p className={`text-[#58585B] leading-6 ${y < 301 && y > 200 ? 'font-medium text-lg' : 'font-normal'} `}>He has always had a strong work ethic. As a young man he and his older brother, Nathan, would go door to door in his neighborhood and sing, “Can we rake your leaves?”</p>

                <p className={`text-[#58585B] leading-6 ${y < 501 && y > 300 ? 'font-medium text-lg' : 'font-normal'} `}>He attended a Gifted and Talented elementary school in Sacramento, and loved competing in many sports. He excelled in swimming, soccer, and baseball. He was the star pitcher for his baseball team that went to the Pony League World Series when he was in 5th grade.</p>

                <p className={`text-[#58585B] leading-6 ${y < 601 && y > 500 ? 'font-medium text-lg' : 'font-normal'} `}>In 1990, he and his family moved to Idaho Falls, Idaho. This was a big change for him, but he made many friends and continued his love of sports. He enjoyed the challenge, competition, and teamwork in sports and was on his high school soccer and baseball teams.</p>

                <p className={`text-[#58585B] leading-6 ${y < 801 && y > 600 ? 'font-medium text-lg' : 'font-normal'} `}>He also loved participating in the Boy Scouts of America and became an Eagle Scout when he was 15 years old.</p>

                <p className={`text-[#58585B] leading-6 ${y < 901 && y > 800 ? 'font-medium text-lg' : 'font-normal'} `}>When Adam was 14 years old, he started a window washing business called Squeegee Brothers. He was too young to drive to his appointments, so his mother would drive him. The next year, his older brother, DJ, became his partner (who could drive).</p>

                <p className={`text-[#58585B] leading-6 ${y < 1101 && y > 900 ? 'font-medium text-lg' : 'font-normal'} `}>When he was 19 years old, he went on a mission for his church for two years to South Africa. One of his first companions in Africa didn’t like going out, so Adam would sit on the doorstep of their house and talk to people as they walked by. He had many great experiences teaching and serving the people of South Africa, and a few years later he went back to help some of his friends there.</p>

                <p className={`text-[#58585B] leading-6 ${y < 1301 && y > 1100 ? 'font-medium text-lg' : 'font-normal'} `}>He attended college at BYU-Idaho and attained a degree in Construction Management. Here he met his best friend and wife, Heather. He has five beautiful children. It is no surprise to those that know him that at the young age of 36, Adam has built not only a best-of-class security company, but he did it from the fruits of his own labors. This is remarkable when you consider that the alarm industry is rife with bankruptcies and companies that are over-leveraged. For Adam, it is not about making sales but about connecting with people in order to improve their lives.</p>

                <p className={`text-[#58585B] leading-6 ${y < 1501 && y > 1300 ? 'font-medium text-lg' : 'font-normal'} `}>Adam’s entrepreneurial youth taught him that if he had a product that would improve a person’s life, then he could sincerely make a pitch that would lead to a sale. Adam’s early success has not changed his values. Unlike his peers, he did not spend his hard earned money. Rather, he saved almost all of his earnings by living conservatively. Not only does he live in this manner, but he encourages and teaches those around him to do the same.</p>

                <p className={`text-[#58585B] leading-6 ${y > 1500 ? 'font-medium text-lg' : 'font-normal'} `}>Using his personal savings, surrounding himself with great people, and committing to improving the lives of others, Adam has built Alder into a high value company operating in 27 states, employing 100’s of people, providing state-of-the-art personal security system’s that meet the needs and fit the pocket books of tens of thousands of customers. His vision is to passionately serve his customers and colleagues so that they have the freedom to live.</p>



            </div>

            <div className="w-1/2 h-full hidden xl:flex">

                <AnimatePresence initial={false} mode="wait" >
                    {
                        y < 301 &&
                        <motion.img
                            initial={{ y: scrollDirection === 'down' ? 500 : -500, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, stiffness: 1 }}
                            exit={{ y: scrollDirection === 'down' ? -500 : 500, opacity: 0 }}
                            className="fixed w-1/2 h-full -z-10" alt="Alder CEO with his family" src="https://res.cloudinary.com/alder/image/upload/q_auto,f_auto/v1555520299/family.jpg" />
                    }
                </AnimatePresence>
                <AnimatePresence mode="wait" >
                    {
                        y > 300 && y < 501 &&
                        <motion.img
                            initial={{ y: scrollDirection === 'down' ? 500 : -500, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, stiffness: 1 }}
                            exit={{ y: scrollDirection === 'down' ? -500 : 500, opacity: 0 }}
                            className="fixed w-1/2 h-full -z-10" alt="Alder CEO with a customer" src="https://res.cloudinary.com/alder/image/upload/q_auto,f_auto/v1555520730/remember.jpg" />
                    }
                </AnimatePresence>
                <AnimatePresence mode="wait" >
                    {
                        y > 500 && y < 701 &&
                        <motion.img
                            initial={{ y: scrollDirection === 'down' ? 500 : -500, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, stiffness: 1 }}
                            exit={{ y: scrollDirection === 'down' ? -500 : 500, opacity: 0 }}
                            className="fixed w-1/2 h-full -z-10" alt="Alder CEO standing outside a customers house in the rain" src="https://res.cloudinary.com/alder/image/upload/q_auto,f_auto/v1555520842/best.jpg" />
                    }
                </AnimatePresence>
                <AnimatePresence mode="wait" >
                    {
                        y > 700 && y < 1001 &&
                        <motion.img
                            initial={{ y: scrollDirection === 'down' ? 500 : -500, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, stiffness: 1 }}
                            exit={{ y: scrollDirection === 'down' ? -500 : 500, opacity: 0 }}
                            className="fixed w-1/2 h-full -z-10" alt="Alder CEO doing an activity with kids" src="https://res.cloudinary.com/alder/image/upload/q_auto,f_auto/v1555520883/model.jpg" />
                    }
                </AnimatePresence>
                <AnimatePresence mode="wait" >
                    {
                        y > 1000 && y < 1301 &&
                        <motion.img
                            initial={{ y: scrollDirection === 'down' ? 500 : -500, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, stiffness: 1 }}
                            exit={{ y: scrollDirection === 'down' ? -500 : 500, opacity: 0 }}
                            className="fixed w-1/2 h-full -z-10" alt="Alder CEO in a boat with others in Africa" src="https://res.cloudinary.com/alder/image/upload/q_auto,f_auto/v1555520890/people.jpg" />
                    }
                </AnimatePresence>
                <AnimatePresence mode="wait" >
                    {
                        y > 1300 &&
                        <motion.img
                            initial={{ y: scrollDirection === 'down' ? 500 : -500, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, stiffness: 1 }}
                            exit={{ y: scrollDirection === 'down' ? -500 : 500, opacity: 0 }}
                            className="fixed w-1/2 h-full -z-10" alt="Alder CEO walking down the street with a customer" src="https://res.cloudinary.com/alder/image/upload/q_auto,f_auto/v1555520875/wiser.jpg" />
                    }
                </AnimatePresence>

                <AnimatePresence mode="wait" >
                    {
                        y < 301 &&
                        <motion.div
                            initial={{ y: scrollDirection === 'down' ? 500 : -500, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, stiffness: 1, delay: .25 }}
                            exit={{ y: scrollDirection === 'down' ? -500 : 500, opacity: 0 }}
                            className="fixed h-full flex items-center w-full">
                            <p className="bg-sky-600/[.4] w-2/5 px-2 py-8 text-white text-7xl font-medium">Family Is Everything</p>
                        </motion.div>

                    }
                </AnimatePresence>
                <AnimatePresence mode="wait" >
                    {
                        y > 300 && y < 501 &&
                        <motion.div
                            initial={{ y: scrollDirection === 'down' ? 500 : -500, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, stiffness: 1, delay: .25 }}
                            exit={{ y: scrollDirection === 'down' ? -500 : 500, opacity: 0 }}
                            className="fixed h-full flex items-center w-full">
                            <p className="bg-sky-600/[.4] w-2/5 px-2 py-8 text-white text-7xl font-medium">Make Them Remember</p>
                        </motion.div>

                    }
                </AnimatePresence>
                <AnimatePresence mode="wait" >
                    {
                        y > 500 && y < 701 &&
                        <motion.div
                            initial={{ y: scrollDirection === 'down' ? 500 : -500, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, stiffness: 1, delay: .25 }}
                            exit={{ y: scrollDirection === 'down' ? -500 : 500, opacity: 0 }}
                            className="fixed h-full flex items-center w-full">
                            <p className="bg-sky-600/[.4] w-2/5 px-2 py-8 text-white text-7xl font-medium mb-40">Only Your Best</p>
                        </motion.div>

                    }
                </AnimatePresence>
                <AnimatePresence mode="wait" >
                    {
                        y > 700 && y < 1001 &&
                        <motion.div
                            initial={{ y: scrollDirection === 'down' ? 500 : -500, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, stiffness: 1, delay: .25 }}
                            exit={{ y: scrollDirection === 'down' ? -500 : 500, opacity: 0 }}
                            className="fixed h-full flex items-center w-full">
                            <p className="bg-sky-600/[.4] w-2/5 px-2 py-8 text-white text-7xl font-medium mb-80">Model The Way</p>
                        </motion.div>

                    }
                </AnimatePresence>
                <AnimatePresence mode="wait" >
                    {
                        y > 1000 && y < 1301 &&
                        <motion.div
                            initial={{ y: scrollDirection === 'down' ? 500 : -500, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, stiffness: 1, delay: .25 }}
                            exit={{ y: scrollDirection === 'down' ? -500 : 500, opacity: 0 }}
                            className="fixed h-full flex items-center w-full">
                            <p className="bg-sky-600/[.4] w-2/5 px-2 py-8 text-white text-7xl font-medium mb-72">People Are Our Priority</p>
                        </motion.div>

                    }
                </AnimatePresence>
                <AnimatePresence mode="wait" >
                    {
                        y > 1300 &&
                        <motion.div
                            initial={{ y: scrollDirection === 'down' ? 500 : -500, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: .5, stiffness: 1, delay: .25 }}
                            exit={{ y: scrollDirection === 'down' ? -500 : 500, opacity: 0 }}
                            className="fixed h-full flex items-center w-full -z-10">
                            <p className="bg-sky-600/[.4] w-2/5 px-2 py-8 text-white text-7xl font-medium mb-60">Ever The Wiser</p>
                        </motion.div>

                    }
                </AnimatePresence>

            </div>

            <div className="xl:hidden flex flex-col items-center w-full gap-12 py-12 px-4 sm:px-24">

                <div className="w-full flex flex-col items-center gap-2">
                    <h1 className="text-[#297CA3] text-6xl font-medium text-center">Adam Schanz</h1>
                    <h2 className="text-[#58585B] text-3xl">Alder CEO</h2>
                </div>

                <div className="w-full h-[350px] bg-cover md:bg-75 bg-no-repeat bg-center flex items-center justify-center" style={{
                    backgroundImage: "url(https://res.cloudinary.com/alder/image/upload/q_auto,f_auto/v1555520299/family.jpg)",
                    backgroundPositionY: '20%'
                }} >

                    <p className="bg-sky-600/[.4] w-3/4 md:w-2/5 px-2 text-center py-4 text-white text-4xl font-medium">Family Is Everything</p>

                </div>

                <p className="text-[#58585B] leading-7">Adam Schanz was born in Sacramento, California. He is the fifth of eight children and learned at an early age to negotiate between his three older brothers and sister and three younger sisters.</p>

                <p className="text-[#58585B] leading-7">He has always had a strong work ethic. As a young man he and his older brother, Nathan, would go door to door in his neighborhood and sing, “Can we rake your leaves?”</p>

                <p className="text-[#58585B] leading-7">He attended a Gifted and Talented elementary school in Sacramento, and loved competing in many sports. He excelled in swimming, soccer, and baseball. He was the star pitcher for his baseball team that went to the Pony League World Series when he was in 5th grade.</p>

                <div className="w-full h-[350px] bg-cover md:bg-75 bg-no-repeat bg-center flex items-center justify-center" style={{
                    backgroundImage: "url(https://res.cloudinary.com/alder/image/upload/q_auto,f_auto/v1555520890/people.jpg)",

                }} >

                    <p className="bg-sky-600/[.4] w-3/4 md:w-2/5 px-2 text-center py-4 text-white text-4xl font-medium">People Are Our Priority</p>

                </div>

                <p className="text-[#58585B] leading-7">In 1990, he and his family moved to Idaho Falls, Idaho. This was a big change for him, but he made many friends and continued his love of sports. He enjoyed the challenge, competition, and teamwork in sports and was on his high school soccer and baseball teams.</p>

                <p className="text-[#58585B] w-full text-left leading-7">He also loved participating in the Boy Scouts of America and became an Eagle Scout when he was 15 years old.</p>

                <p className="text-[#58585B] leading-7">When Adam was 14 years old, he started a window washing business called Squeegee Brothers. He was too young to drive to his appointments, so his mother would drive him. The next year, his older brother, DJ, became his partner (who could drive).</p>

                <div className="w-full h-[350px] bg-cover md:bg-75 bg-no-repeat bg-center flex items-center justify-center" style={{
                    backgroundImage: "url(https://res.cloudinary.com/alder/image/upload/q_auto,f_auto/v1555520875/wiser.jpg)",

                }} >

                    <p className="bg-sky-600/[.4] w-3/4 md:w-2/5 px-2 text-center py-4 text-white text-4xl font-medium">Ever the Wiser</p>

                </div>

                <p className="text-[#58585B] leading-7">When he was 19 years old, he went on a mission for his church for two years to South Africa. One of his first companions in Africa didn’t like going out, so Adam would sit on the doorstep of their house and talk to people as they walked by. He had many great experiences teaching and serving the people of South Africa, and a few years later he went back to help some of his friends there.</p>

                <p className="text-[#58585B] leading-7">He attended college at BYU-Idaho and attained a degree in Construction Management. Here he met his best friend and wife, Heather. He has five beautiful children. It is no surprise to those that know him that at the young age of 36, Adam has built not only a best-of-class security company, but he did it from the fruits of his own labors. This is remarkable when you consider that the alarm industry is rife with bankruptcies and companies that are over-leveraged. For Adam, it is not about making sales but about connecting with people in order to improve their lives.</p>

                <p className="text-[#58585B] leading-7">Adam’s entrepreneurial youth taught him that if he had a product that would improve a person’s life, then he could sincerely make a pitch that would lead to a sale. Adam’s early success has not changed his values. Unlike his peers, he did not spend his hard earned money. Rather, he saved almost all of his earnings by living conservatively. Not only does he live in this manner, but he encourages and teaches those around him to do the same.</p>

                <p className="text-[#58585B] leading-7">Using his personal savings, surrounding himself with great people, and committing to improving the lives of others, Adam has built Alder into a high value company operating in 27 states, employing 100’s of people, providing state-of-the-art personal security system’s that meet the needs and fit the pocket books of tens of thousands of customers. His vision is to passionately serve his customers and colleagues so that they have the freedom to live.</p>

            </div>

        </div>
    )
}

export default AdamSchanz