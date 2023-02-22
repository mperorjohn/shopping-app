import 'tailwindcss/tailwind.css';
import './style.css';
import './App.css';
import { useState } from 'react';




function App() {
  const [fillinput, setFillInput] = useState('');
  const fillfunction =(e)=>{
    const getparam = (e.target.value)
    setFillInput(getparam)
  }
  return (
    // <div>

    // </div>
  <div className="grid grid-cols-2">
      <div className="container bg-blue-400 p-24 content-center outline-0   w-auto m-40 mx-auto rounded-xl shadow-lg">
          <h1 className='text-2xl font-bold'>Login in</h1>
          <div className='mt-4 mx-auto'>
          <label className='text-white font-bold '>Username</label><br/>   
          <input type="text" aria-autocomplete='' className="py-2 px-6 outline-none rounded-lg" placeholder=''/>
          </div>
          <div className='mt-6 mx-auto'>
          <label className='text-white font-bold'>Password</label><br/>   
          <input type="password" className="py-2 px-6 outline-none rounded-lg"  />
          </div>
          <div className='mt-4'>
            <button className="bg-blue-400 p-2 hover:bg-yellow-500 hover-opacity-50 transition-colors duration-1000 ease-out rounded-lg shadow-white font-bold text-white shadow-lg">Login</button>
          </div>
      </div>
      {/* Register Page */}
      <div className="bg-yellow-400 p-28 py-10  outline-0   w-auto m-40 mx-auto rounded-xl shadow-lg">
          <h1 className='text-4xl font-bold text-gray-700'>Register Here</h1>
          <div className='mt-4 mx-auto'>
          <label className='text-gray-700 font-bold '>First name</label><br/>   
          <input type="text" className="py-2 px-20 outline-none text-left rounded-lg" placeholder="Enter your name" />
          </div>
          <div>
          <label className='text-gray-700 font-bold '>Last name</label><br/>   
          <input type="text" className="py-2 px-20 outline-none text-left rounded-lg" placeholder="Enter your name" />
          </div>
          <div className=''>
          <label className='text-gray-700 font-bold'>Username</label><br/>   
          <input type="text" onChange={fillfunction} className="py-2 px-20 text-left outline-none rounded-lg"  />
          </div>
          <div className=''>
          <label className='text-gray-700 font-bold'>Password</label><br/>   
          <input type="password" className="py-2 px-20 text-left outline-none rounded-lg"  />
          </div>
          <div className='mt-4'>
            <button className="bg-yellow-400 p-2 hover:bg-blue-500 hover-opacity-50 transition-colors duration-1000 ease-out rounded-lg shadow-white font-bold text-white shadow-lg">Login</button>
          </div>
      </div>
    
  </div>
  );
}

export default App;
