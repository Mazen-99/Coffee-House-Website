const Gallery = () => {
    return (
        <div id="gallery" className='py-15 px-5 lg:px-14 bg-white w-full'>

            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center md:mb-20 mb-15">
                    <h1 className="font-bold text-black text-3xl mb-2">GALLERY</h1>
                    <span className="block w-20 h-1 bg-[#F3961C] rounded-full"></span>
                </div>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 items-center justify-center">

                <div className="flex flex-col items-center">
                    <img className="w-[500px] h-[200px] rounded-lg select-none" src="gallery-1.jpg" alt="" draggable="false" />
                </div>

                <div className="flex flex-col items-center">
                    <img className="w-[500px] h-[200px] rounded-lg select-none" src="gallery-2.jpg" alt="" draggable="false" />
                </div>

                <div className="flex flex-col items-center">
                    <img className="w-[500px] h-[200px] rounded-lg select-none" src="gallery-3.jpg" alt="" draggable="false" />
                </div>

                <div className="flex flex-col items-center">
                    <img className="w-[500px] h-[200px] rounded-lg select-none" src="gallery-4.jpg" alt="" draggable="false" />
                </div>


                <div className="flex flex-col items-center">
                    <img className="w-[500px] h-[200px] rounded-lg select-none" src="gallery-5.jpg" alt="" draggable="false" />
                </div>

                <div className="flex flex-col items-center">
                    <img className="w-[500px] h-[200px] rounded-lg select-none" src="gallery-6.jpg" alt="" draggable="false" />
                </div>

            </div>

        </div>
    )
}

export default Gallery
