import React, { useEffect, useState } from 'react'

function Profile() {
  const [user, setUser] = useState()
  const getdata = () => {
    const saved = localStorage.getItem("user");
    const data = JSON.parse(saved)
    setUser(data);
  };
  useEffect(() => {
    getdata();
  }, []);
  
  return (
    <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
    
    <div id="profile" class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
    
  
      <div class="p-4 md:p-12 text-center lg:text-left">
      
        <div class="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center" ></div>
        
        <h1 class="text-3xl font-bold pt-8 lg:pt-0"></h1>
        <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
        <p class="pt-4 text-base font-bold flex items-center justify-center lg:justify-start"><svg class="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg> </p>
        
        
  
        <div class="pt-12 pb-8">
          <button class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
            Get In Touch
          </button> 
        </div>
        

  
      </div>
  
    </div>
  
    <div class="w-full lg:w-2/5">
      <img src="https://source.unsplash.com/MP0IUfwrn0A" class="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"/>
      
    </div>
    
      
  
  </div>
  )
}

export default Profile
