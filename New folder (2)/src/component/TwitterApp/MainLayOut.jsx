import React from 'react'
import Navbar from './Navbar'
import { Container } from 'reactstrap'
import { Outlet } from 'react-router-dom'

const MainLayOut = () => {
  return (
    <>
    <Navbar/>
    <Container>
        <Outlet/>
    </Container>
        
    </>
  )
}

export default MainLayOut