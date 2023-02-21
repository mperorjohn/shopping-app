import 'tailwindcss/tailwind.css';
import './style.css';
import './App.css';




function App() {
  return (
  //   <div class="bg-orange-100 p-20 rounded-lg shadow-md">
  //   <h1 class="text-2xl font-bold text-gray-800">Hello, Tailwind CSS!</h1>
  //   <p class="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  // </div>
  <div className="container bg-blue-400 p-20 content-center outline-0 text-center  w-1/2 m-40 mx-auto rounded-xl shadow-lg shadow-yellow-400">
      <h1 className='text-2xl font-bold'>Login Page with tailwinscss</h1>
      <div className='mt-4'>
      <label className='text-white font-bold fa-fa-user'>Username</label><br/>   
      <input type="text" className="py-2 px-6 outline-none rounded-lg" placeholder="Enter your name" />
      </div>
      <div className='mt-6'>
      <label className='text-white font-bold'>Password</label><br/>   
      <input type="password" className="py-2 px-6 outline-none rounded-lg"  />
      </div>
      <div className='mt-4'>
        <button className="bg-blue-400 p-2 hover:bg-yellow-500 hover-opacity-50 transition-colors duration-1000 ease-out rounded-lg shadow-white font-bold text-white shadow-lg">Login</button>
      </div>
   </div>
  );
}

export default App;
