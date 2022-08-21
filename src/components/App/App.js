import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard.js';
import Login from '../Login/Login';
import './App.css';
import useToken from './useToken';





function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken}/>
  }

  return (
    <div className="wrapper">
      <div className='succsessfull_window'>

        <h1>Succsessfully!</h1>
        
      <BrowserRouter>
        <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>

      </div>
  </div>
  );
}

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');
</style>

export default App;
