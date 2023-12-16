import React from 'react'
import './About.css'
import { Col, Container, Image, Row } from 'react-bootstrap'



function About() {
    return (
      <Container fluid style={{height:'50vh',backgroundColor:'white', display:'flex',alignItems:'center',justifyContent:'center'}}>
        <span className="font-link-about">Come catch us at SOMM...  </span>
        <span className="font-link-about">Located Grupek, Lombok, Indonesia</span>
      </Container>
  
      
    )
  }
  
  export default About