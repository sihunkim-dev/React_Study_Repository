import { useState } from "react"

function App() {
  const[task, setTask] = useState("");
  

  function handleTaskInput(){
    
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col bg-gray-50 border border-gray-200 rounded-xl shadow-md p-6 w-96 gap-4">

        <div className="flex gap-2">
          <input type="text" 
                placeholder="Enter daily task" 
                className= "flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 transition"/>
          <button className="w-full bg-gray-800 text-white py-3 
                            rounded-xl font-semibold hover:bg-gray-700 
                            active:scale-[0.98] transition-all duration-200"

          >
              ADD
          </button>        
        </div>
      
        <div className="flex flex-col gap-3 max-h-80 overflow-y-auto">
          <div className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-3 shadow-sm">
            <span>Buy groceries</span>
            <button className="text-red-500 hover:text-red-700 font-semibold">Delete</button>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default App
