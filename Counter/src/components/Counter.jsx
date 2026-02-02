import { useState } from "react";

export default function Counter(){
    const[count, setCount] = useState(0);
    
    
    function handleCount(type){
        setCount(prevCount => (type === 'plus'? prevCount + 1:prevCount -1));
    }
    return(
        <>
        <div className="text-center bg-gray-700 items-center justify-center">
            {count}
        </div>
        <div className="w-full mb-4 flex flex-nowrap justify-center gap-2">
            <button className="bg-blue-300 active:bg-blue-500 px-4 py-2 rounded transition-all"
                    onClick={()=>handleCount('plus')}
            >
                    PLUS
            </button>
            <button className="bg-red-300 active:bg-red-500 px-4 py-2 rounded transition-all"
                    onClick={()=>handleCount('minus')}
            >
                MINUS
            </button>
        </div>
        </>
    );
}