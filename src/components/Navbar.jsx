import { useState } from "react";
import clsx from "clsx";

const NavBar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);


    return <nav className="h-[10%] w-full flex flex-row justify-between items-center px-4 relative shadow-md">
        <span className="font-bold text-teal-700 text-shadow-xs">Logo</span>
        <ul className={clsx("list-none md:w-[80%] md:flex md:flex-row md:items-center md:justify-center md:gap-3 text-[0.8rem]", 
                toggleIcon ? "absolute top-[100%] left-0 flex flex-col items-center w-screen h-80 bg-slate-800 z-10 md:relative md:top-0 md:h-[80%] md:bg-inherit animate-[fade-in-scale_0.3s_ease-in-out_forwards]"
                            : "hidden md:flex"
            )}>
            <li className="hover:shadow-md text-slate-500 px-4 py-2 font-semibold rounded-lg">Home</li>
            <li className="hover:shadow-md text-slate-500 px-4 py-2 font-semibold rounded-lg">Blog</li>
            <li className="hover:shadow-md text-slate-500 px-4 py-2 font-semibold rounded-lg">Properties & Listings</li>
            <li className="hover:shadow-md text-slate-500 px-4 py-2 font-semibold rounded-lg">About Us</li>
            <li className="hover:shadow-md text-slate-500 px-4 py-2 font-semibold rounded-lg">Contact</li>
        </ul>
        <button className="md:hidden flex relative shadow-md w-15 h-[60%] justify-center items-center text-slate-700 rounded-lg"
                onClick={() => setToggleIcon(!toggleIcon)}
                >
                    {toggleIcon ? ( <i className="fa-solid fa-circle-xmark absolute z-10"></i>
                    ): (
                      <i className="fa-solid fa-bars absolute hidden"></i> 
                    )}
        </button>
    </nav>;
};

export default NavBar;