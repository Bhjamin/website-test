import greenArrow from '../assets/greenArrow.svg'
import iphone from '../assets/iphoneX.png'
import appStore from '../assets/appleStoreColor.svg'
import playStore from '../assets/googlePlayColor.svg'

const MobileAccess = ({headingText, text='With the Alder app you can control your home security system from your phone. It works with Android and iOS. All you need is an internet connection.'}) => {


    return (
        <div className="bg-white w-full px-4 md:px-28 py-10 flex flex-col justify-center items-center gap-8 md:flex-row">
            

            <div className=" max-w-xl flex justify-center md:justify-end">
                <img src={iphone} alt='iphone using the alder app' className=' max-h-[425px]' />
            </div>

            <div className=" w-full md:w-1/3 max-w-xl flex flex-col items-center justify-center">

                <h3 className=" w-full text-[#58585B] text-5xl font-medium text-center md:text-start ">{headingText}</h3>
                <br />
                <p className="text-[#58585B] text-center w-full md:text-start ">{text}</p>
                <br />
                <br />
                <a href='/products/app' className='flex flex-row gap-2 w-full justify-center md:justify-start hover:scale-105 hover:translate-x-3 transition duration-100 '> <p className='text-[#1B6547] font-medium'>See what you can do</p> <img alt='green arrow pointing right' src={greenArrow} /> </a>
                <br />
                <div className=' w-full flex flex-row justify-center md:justify-start gap-3'>
                    <a href='https://itunes.apple.com/us/app/alder-security/id1267996005?mt=8'> <img src={appStore} alt='apple app store logo' /> </a>
                    <a href='https://play.google.com/store/apps/details?id=com.securenettech.alder6production'> <img src={playStore} alt='google play store logo' /> </a>
                </div>

            </div>

        </div>
    )
}

export default MobileAccess