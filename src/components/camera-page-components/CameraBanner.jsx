

const CameraBanner = () => {

    const scrollToOutdoorCamera = () => {
        let camera = document.getElementById('camera');
        const offset = -100;
        const elementRect = camera.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const targetY = absoluteElementTop + offset;
      
        window.scrollTo({
          top: targetY,
          behavior: 'smooth'
        });
    }

    const scrollToIndoorCamera = () => {
      let camera = document.getElementById('camera');
      const offset = 300;
      const elementRect = camera.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const targetY = absoluteElementTop + offset;
    
      window.scrollTo({
        top: targetY,
        behavior: 'smooth'
      });
  }

    const scrollToMobile = () => {
        let mobile = document.getElementById('mobile');
        const offset = -100;
        const elementRect = mobile.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const targetY = absoluteElementTop + offset;
      
        window.scrollTo({
          top: targetY,
          behavior: 'smooth'
        });
      };

      const scrollToInstallation = () => {
        let installation = document.getElementById('installation');
        const offset = -100;
        const elementRect = installation.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const targetY = absoluteElementTop + offset;
      
        window.scrollTo({
          top: targetY,
          behavior: 'smooth'
        });
      };

      const scrollToFAQ = () => {
        let faq = document.getElementById('faq');
        const offset = -100;
        const elementRect = faq.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const targetY = absoluteElementTop + offset;
      
        window.scrollTo({
          top: targetY,
          behavior: 'smooth'
        });
      };  

    return(<div className=" w-full h-[475px] max-w-7xl bg-cover bg-center sm:bg-bottom my-6" style={{
        backgroundImage: 'url(https://res.cloudinary.com/alder/image/upload/q_auto,f_auto/v1542137430/camera-banner-opt.jpg)',
        }} >
        <div className="bg-neutral-800/[.20] flex flex-col w-full h-full pt-4 pb-1 px-2 md:px-8">
        <div className=" flex flex-col lg:justify-center items-center lg:items-start w-full gap-6 h-[80%] lg:h-[90%] ">
            <h1 className=" text-center text-4xl lg:text-6xl text-white font-medium">Home Security Cameras</h1>
            
            <p className="text-white font-medium text-xl lg:text-3xl font-serif w-full md:w-2/5 text-center lg:text-left ">See your indoor, outdoor, and front door view from anywhere.</p>
        </div>

        
        <div className="w-full h-[20%] lg:h-[10%] flex flex-wrap justify-evenly gap-2 items-center">
            <button onClick={scrollToOutdoorCamera} className=" w-[125px] text-[10px] sm:w-[175px] sm:text-sm md:text-base h-6 px-4 md:h-8 md:px-6 rounded-full bg-[#F1F1F2] hover:scale-105 hover:-translate-y-1 active:scale-110 active:bg-white transition duration-150 ">Outdoor Cameras</button>
            <button onClick={scrollToIndoorCamera} className=" w-[125px] text-[10px] sm:w-[175px] sm:text-sm md:text-base h-6 px-4 md:h-8 md:px-6 rounded-full bg-[#F1F1F2] hover:scale-105 hover:-translate-y-1 active:scale-110 active:bg-white transition duration-150 ">Indoor Cameras</button>
            <button onClick={scrollToMobile} className=" w-[125px] text-[10px] sm:w-[175px] sm:text-sm md:text-base h-6 px-4 md:h-8 md:px-6 rounded-full bg-[#F1F1F2] hover:scale-105 hover:-translate-y-1 active:scale-110 active:bg-white transition duration-150 ">Mobile Access</button>
            <button onClick={scrollToInstallation} className=" w-[125px] text-[10px] sm:w-[175px] sm:text-sm md:text-base h-6 px-4 md:h-8 md:px-6 rounded-full bg-[#F1F1F2] hover:scale-105 hover:-translate-y-1 active:scale-110 active:bg-white transition duration-150 ">Installation</button>
            <button onClick={scrollToFAQ} className=" w-[125px] text-[10px] sm:w-[175px] sm:text-sm md:text-base h-6 px-4 md:h-8 md:px-6 rounded-full bg-[#F1F1F2] hover:scale-105 hover:-translate-y-1 active:scale-110 active:bg-white transition duration-100 ">FAQ</button>
        </div>
        
        </div>
    </div>)
}

export default CameraBanner