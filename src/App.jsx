import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDoashboard from './components/Dashboard/EmployeeDoashboard.jsx'
import AdminDoashboard from './components/Dashboard/AdminDoashboard.jsx'
import { setLocalStorage } from './utils/LocalStorage.jsx'

const App = () => {

  const [user, setUser] = useState(null)

  const HandleLogin = (email,password) => {
    if (email === 'admin@adminme.com' && password === '123123') {
      setUser('admin');
      
    }
    else if (email === 'employee@employee.com' && password === '123123') {
      console.log("employee login");
      setUser('employee')
    }
    else{
      alert("oopppsss!!!!!!!!!!!!")
    }
  }
  


  return <>

    {!user ? <Login HandleLogin={HandleLogin} /> : ''}
    {user === 'admin' ? <AdminDoashboard/> : ''}
    {user === 'employee' ? <EmployeeDoashboard/> : ''}
  </>
}

export default App