import { useState } from "react"
import nvrVideo from '../../assets/lp/nvrVideo.mp4'

const NvrVideo = () => {

    const [muted, setMuted] = useState(true)

    return(
        <div className="w-full flex flex-col relative items-center ">
        <video className="w-full lg:object-cover lg:h-[800px]" loop autoPlay muted={muted}>
          <source src={nvrVideo} type="video/mp4" />
        </video>
        <button onClick={() => setMuted(!muted)} className=" absolute bottom-2 rounded-full font-sans text-white border-0 text-[10px] w-12 h-6 sm:text-sm sm:w-20 sm:h-8 active:scale-95 transition duration-75 bg-[#297CA3]">{
          muted ? 'Unmute' : 'Mute'
        }</button>
      </div>
    )
}

export default NvrVideo