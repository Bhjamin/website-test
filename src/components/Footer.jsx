import blackLogo from '../assets/footer/blackLogo.svg'
import mobilePhoneGreen from '../assets/mobilePhoneGreen.svg'
import facebook from '../assets/footer/facebook.svg';
import instagram from '../assets/footer/instagram.svg';
import linkedin from '../assets/footer/linkedin.svg';
import twitter from '../assets/footer/twitter.svg';
import adamLogo from '../assets/footer/adam.svg';

const Footer = () => {



    return(
        <div className="bg-[#F1F1F2] w-full flex flex-col items-center py-8 px-2 md:px-8">

            <div className="w-full flex flex-wrap md:flex-row md:justify-evenly xl:justify-center xl:gap-12 md:items-start gap-4">

                <div className='flex w-full justify-center md:w-auto md:justify-start'>
                <img className='' src={blackLogo} alt='alder logo' />
                </div>


                <div className=' w-full my-5 justify-evenly md:my-0 md:w-1/3 flex'>

                <div className='  flex flex-col gap-2 items-center md:items-start '>
                <h2 className='text-[#58585B] font-medium text-2xl mb-1 '>Services</h2>
                <a href='/home-security' className='text-[#58585B] text-xs hover:underline '>Home Security</a>
                <a href='/cameras' className='text-[#58585B] text-xs hover:underline '>Home Security Cameras</a>
                <a href='/med-pendant' className='text-[#58585B] text-xs hover:underline '>Medical Alert Systems</a>
                <a href='https://account.alder.com' className='text-[#58585B] text-xs hover:underline '>My Account</a>
                </div>

                <div className='  flex flex-col gap-2 items-center md:items-start '>
                <h2 className='text-[#58585B] font-medium text-2xl mb-1 '>Company</h2>
                <a href='/careers' className='text-[#58585B] text-xs hover:underline '>Careers</a>
                <a href='/contact' className='text-[#58585B] text-xs hover:underline '>Contact</a>
                <a href='/verify-rep' className='text-[#58585B] text-xs hover:underline '>Verify Rep</a>
                <a href='/about' className='text-[#58585B] text-xs hover:underline '>About</a>
                <a href='/locations' className='text-[#58585B] text-xs hover:underline '>Locations</a>
                </div>

                </div>


                <div className=' w-full md:w-auto flex flex-col items-center'>

                     <a href="tel:800-710-1289" className="flex items-center justify-center gap-2 bg-[#ffffff] hover:bg-[#e6e6e6] hover:scale-105 hover:-translate-y-[2px] transition duration-100 h-10 w-64 md:w-60 rounded-3xl border-2 border-[#168359]">
                        <img src={mobilePhoneGreen} alt='phone icon' />
                        <p className="text-[#168359] text-[15px]">Call Now for a Quote</p>
                     </a>

                    <div className=' w-full flex flex-row justify-center gap-8 my-8'>
                            <a href="https://www.facebook.com/aldersecurities/"><img src={facebook} alt="facebook" /></a>
                            <a href="https://www.instagram.com/alderhomesecurity/"><img src={instagram} alt="instagram" /></a>
                            <a href="https://www.linkedin.com/company/alder-home-protection"><img src={linkedin} alt="linkedin" /></a>
                            <a href="https://twitter.com/alder_security?lang=en"><img className='w-full h-full' src={twitter} alt="twitter" /></a>
                            <a href='/adam-schanz'> <img src={adamLogo} className='w-9 h-5' alt='adam schanz' /> </a>
                    </div>

                    <p className='text-[#58585B] text-lg'>800.710.1289</p>

                </div>

            </div>

            <br/>
            

            <div className='w-full flex flex-col items-center'>

                <p className=' text-xs text-[#58585B] '>Copyright Alder Holdings, LLC</p>
                <a className="text-[#58585B] text-sm underline " href="/privacy">Privacy Policy | Licensing</a>

            </div>

        </div>
    )
}

export default Footer