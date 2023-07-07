

const VideoModal = ({showModal, setShowModal, videoURL="https://www.youtube.com/embed/yWgXvSPyzCA"}) => {


    let screenWidth = window.innerWidth

    
    return(
        <div className="w-full h-full flex flex-col justify-center items-center ">
            
            <div className="flex flex-col items-end">
            <button className="flex justify-center border-[2px] bg-red-300 border-black mb-2 w-10 h-10 text-2xl rounded-lg hover:scale-105 hover:border-0 hover:bg-red-400 active:bg-red-300 active:scale-110 transition duration-100" onClick={() => setShowModal(!showModal)}>x</button>
            <iframe className="rounded-md shadow-2xl" width={screenWidth > 500 ? '475' : '275'} height={screenWidth > 500 ? '325' : '225'} src={videoURL} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            
            
        </div>
    )
}

export default VideoModal