import React from 'react'
import { Card, Container, Button, Form, FormControl, Nav, Navbar, NavDropdown, Row,Col, NavbarBrand } from 'react-bootstrap'
import '../css/Testhome1.css'

export const Testhome = () => {
  return (

      <>
    <Navbar bg="dark">
        <h2 style={{color:'white',
      fontFamily:'display',
      marginLeft:'2%',
      marginTop:'1%'
     }}>SAVEIT</h2>
        
  <Container>
      
    <Row>
    
      <div className='navheader'>
    <Navbar.Brand>

        <a href='/home' style={{color:'white',
      marginRight:'5%',textDecoration:'none',
      }}>Home</a>
        
        <a href='/donate' style={{color:'white',
      marginRight:'5%',textDecoration:'none'}}>Donate</a>
        
        <a href='/about' style={{color:'white',
      marginRight:'5%',
      textDecoration:'none'}}>About</a>
        
        <a href='/contact'style={{color:'white',
      marginRight:'5%',textDecoration:'none'}}>Contact</a>
       
        <a href='login'style={{color:'white',
      marginRight:'5%',textDecoration:'none'}}>Login</a>
       
        <a href='/register'style={{color:'white',
      marginRight:'5%',textDecoration:'none'}}>Register</a>
    
      </Navbar.Brand>
      </div>
      </Row>
  </Container>
  </Navbar>

  </>
  )
}

export default Testhome;