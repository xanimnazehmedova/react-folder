import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Test from './Test'
import Test1 from './Test1'
import Test2 from './Test2'

const WebPage = () => {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="test">Test</Link>
        </nav>
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='test' element={<Test/>}>
                    <Route path='test1' element={<Test1/>}/>
                    <Route path='test2' element={<Test2/>}/>
                </Route>
            </Routes>
        </div>
    </div>
  )
}

export default WebPage