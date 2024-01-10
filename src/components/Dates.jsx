import React from 'react'
import { Badge, Col, Row } from 'react-bootstrap'
import './Dates.css'

function Dates() {
  return (
    <div className='parent'>
        <div className="live p-4" style={{width:'250px', height:'150px', borderRadius:'8px', backgroundColor:'#FAEBF0'}}>
<Badge className="bg-dark w-50">LIVE SESSION</Badge>
<h5 style={{fontSize:'16px', fontWeight:'500', lineHeight:'20px'}}>Swadhyay with Dr Athul</h5>
<p className="mt-5" style={{fontSize:'12px', color:'grey', fontWeight:'500'}}>10:00AM - 12:00PM</p>
</div>
<div className='dates'>
     <Row className="time px-3 py-3">
    <Col md={2}>
    <p style={{color:"grey"}}>09:00</p>
    </Col>
    <Col>
    <hr style={{width:'230px', fontSize:'1px', color:'grey'}} />
    </Col>
</Row>

<Row className="time px-3 py-3">
    <Col md={2}>
    <p style={{color:"grey"}}>10:00</p>
    </Col>
    <Col>
    <hr style={{width:'230px', fontSize:'1px', color:'grey'}} />
    </Col>
</Row>

<Row className="time px-3 py-3">
    <Col md={2}>
    <p style={{color:"grey"}}>11:00</p>
    </Col>
    <Col>
    <hr style={{width:'230px', fontSize:'1px', color:'grey'}} />
    </Col>
</Row>

<Row className="time px-3 py-3">
    <Col md={2}>
    <p style={{color:"grey"}}>12:00</p>
    </Col>
    <Col>
    <hr style={{width:'230px', fontSize:'1px', color:'grey'}} />
    </Col>
</Row>

<Row className="time px-3 py-3">
    <Col md={2}>
    <p style={{color:"grey"}}>13:00</p>
    </Col>
    <Col>
    <hr style={{width:'230px', fontSize:'1px', color:'grey'}} />
    </Col>
</Row>

<Row className="time px-3 py-3">
    <Col md={2}>
    <p style={{color:"grey"}}>14:00</p>
    </Col>
    <Col>
    <hr style={{width:'230px', fontSize:'1px', color:'grey'}} />
    </Col>
</Row>

<Row className="time px-3 py-3">
    <Col md={2}>
    <p style={{color:"grey"}}>15:00</p>
    </Col>
    <Col>
    <hr style={{width:'230px', fontSize:'1px', color:'grey'}} />
    </Col>
</Row>

<Row className="time px-3 py-3">
    <Col md={2}>
    <p style={{color:"grey"}}>16:00</p>
    </Col>
    <Col>
    <hr style={{width:'230px', fontSize:'1px', color:'grey'}} />
    </Col>
</Row>

<Row className="time px-3 py-3">
    <Col md={2}>
    <p style={{color:"grey"}}>17:00</p>
    </Col>
    <Col>
    <hr style={{width:'230px', fontSize:'1px', color:'grey'}} />
    </Col>
</Row>
</div>
    </div>
  )
}

export default Dates