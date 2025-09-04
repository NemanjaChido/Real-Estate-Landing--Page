const NextBtn = ({icon, onClick, display}) => {
    
    return !display ? null : (
        <button className=" bg-slate-500 p-2 h-12 w-12 rounded-full shadow-lg text-white hover:bg-slate-800"
                onClick={onClick}
                aria-label="Next Slide">
            <i className={icon}></i>
        </button>
    );
};

export default NextBtn;