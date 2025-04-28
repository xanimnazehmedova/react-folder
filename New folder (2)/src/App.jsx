import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import MovieList from './component/MovieList/MovieList'
import WeatherProps from './component/WeatherProps'
import Team from './component/Team'
import WebPage from './component/WebPage'
import Accordion from './component/Accordion'
import History from './component/History'
import Todayshistory from './component/Todayshistory'
import { Route, Routes } from 'react-router-dom'
import Home from './component/TwitterApp/Home'
import Register from './component/TwitterApp/Register'
import RegisterApprove from './component/TwitterApp/RegisterApprove'
import LogIn from './component/TwitterApp/LogIn'
import Profile from './component/TwitterApp/Profile'
import MainLayOut from './component/TwitterApp/MainLayOut'
import User from './component/TwitterApp/User'


function App() {


  return (

    <>
    <div>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/register/approve/:id' element={<RegisterApprove/>}></Route>
        <Route path='/login' element={<LogIn/>}></Route>
      
    
      <Route element={<MainLayOut/>}>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/user/:id' element={<User/>}></Route>
         <Route path='/profile' element={<Profile/>}></Route>
      </Route>  </Routes>
    </div>
   
    {/* <History/> */}
    {/* <Todayshistory/> */}
    {/* <Accordion/> */}
    {/* <WebPage/> */}
    {/* <Team/> */}
    {/* <WeatherProps/> */}
    {/* <MovieList/> */}
    {/* <Props/> */}
    {/* <MovieList/> */}
    {/* <ToDoList/> */}
    {/* <GithubUser/> */}
    {/* <Weather/> */}
    {/* <GuessNum/> */}
    {/* <Filter/> */}
     {/* <Headers/>
     <Main/>
     <Footer/> */}
      {/* 
      <Visbile/>
      <Count/>
      <Input/>
      <Add/> */}
      {/* <RandomUser/> */}
      {/* <UserList/> */}

    </>
  )
}

export default App
