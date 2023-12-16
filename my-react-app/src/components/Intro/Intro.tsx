import React from 'react'
import './Intro.css'
import { Col, Container, Image, Row } from 'react-bootstrap'
import { User, List } from 'grommet-icons'




function Intro() {
  return (
    <Container fluid style={{height:'50vh',backgroundColor:'#daec44', display:'flex',alignItems:'center',justifyContent:'center'}}>
      <span className="font-link">Welcome to SOMM</span>
    </Container>

    
  )
}

export default Intro