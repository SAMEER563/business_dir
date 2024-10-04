import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'

import List from './pages/BusinessList'
import Orders from './pages/Orders'
import Login from './components/Login'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddBusiness from './pages/AddBusiness'

import BusinessDetails from './pages/BusinessDetails'
import AddUser from './pages/AddUser'
import UserList from './pages/UserList'
import BusinessList from './pages/BusinessList'
import EditUser from './pages/EditUser'
import EditBusiness from './pages/EditBusiness'



export const backendUrl = import.meta.env.VITE_BACKEND_URL

const App = () => {
  
  const [token,setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')


  useEffect(()=> {
   localStorage.setItem('token',token)
  },[token])

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      {
        token === "" ? <Login setToken={setToken} /> : 
        <>
        <Navbar setToken={setToken}/>
          <hr />
          <div className='flex w-full'>
            <Sidebar />
            <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
               <Routes>
                 <Route path='/admin/add-business' element={<AddBusiness token={token} />} />
                 <Route path='/admin/businesses' element={< BusinessList token={token} />} />
                 <Route path='/admin/add-user' element={<AddUser token={token} />} />
                  <Route path='/admin/users' element={<UserList token={token} />} />
                 <Route path="/business/:id" element={<BusinessDetails token={token} />} />
                 <Route path='/admin/edit-user/:id' element={<EditUser token={token} />} />
                 <Route path="/admin/edit-business/:id" element={<EditBusiness />} />

               </Routes>
            </div>
          </div>
          </>
      }
     

    </div>
  )
}

export default App