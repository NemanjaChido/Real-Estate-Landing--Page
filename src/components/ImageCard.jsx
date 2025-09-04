const ImageCard = ({ image }) => {
    return (
        <div className="w-full h-[90%] flex flex-col md:flex-row-reverse relative">
            <div className="w-full h-1/2 md:h-full">
                <img className="object-cover h-full w-full" src={image.imageUrl} alt={image.title}/>
            </div>
            <div className="w-full h-1/2 md:w-[40%] md:h-1/2 md:absolute md:top-[25%] md:left-[30%] md:z-1 md:bg-amber-100/75 md:rounded-md flex flex-col justify-center items-center gap-3 text-base md:text-xl text-shadow-2xs text-gray-800 p-3">
                <h1 className="font-bold text-xl md:text-3xl text-blue-950">{image.title}</h1>
                <p className="text-center">{image.description}</p>
                <p className="text-teal-700">{image.price}</p>
                <div className="flex flex-row gap-2">
                    <i className="fa-solid fa-location-dot text-slate-800"></i>
                    {image.location}
                </div>
                <div className="flex flex-row gap-4 text-slate-800 mb-3">
                    <div className="flex flex-row gap-1">
                        <i className="fa-solid fa-bed"></i>
                        {image.bedrooms} bd
                    </div>
                    <div className="flex flex-row gap-1">
                        <i className="fa-solid fa-bath"></i>
                        {image.bathrooms} ba 
                    </div>
                    <div className="flex flex-row gap-1">
                        <i className="fa-solid fa-ruler-combined"></i>
                        {image.area}
                    </div>
                </div>
                <button className="w-30 h-10 text-white cursor-pointer text-base text-center font-bold 
                    outline-none border-none rounded-[10px] bg-gradient-to-r from-[#0c0c0c] to-[#0c0c0c] 
                    transition-all duration-300 ease-linear hover:bg-gradient-to-r hover:from-[#8c8c8c] hover:to-[#181818]"
                >
                  More...
                </button>
            </div>
        </div>
    );
};

export default ImageCard;