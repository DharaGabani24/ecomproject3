import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { motion } from 'framer-motion'
import './services.css'
import { serviceData } from './data/serviceData'

const Services = () => {
  return (

    <>
      <div className='ourText'>        
            OUR ADVANTAGES
        </div>
    <section className="services" style={{background:"none", marginBottom:"-232px", textDecoration:"none"}}>
      
        <Container>
            <Row>
                {
                    serviceData.map((item, index) =>(
                        <Col lg='3' md='4' key={index}>
                            <motion.div whileHover={{scale:1.1}} className="services__item" style={{background: `${item.background}`}}>
                                <span><i>{item.icon}</i></span>
                                <div className="titletext">
                                    <h3>{item.title}</h3>
                                    <p>{item.subtitle}</p>
                                </div>
                            </motion.div>
                        </Col>
                    ))}
                
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Services