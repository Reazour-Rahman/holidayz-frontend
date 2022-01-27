import axios from 'axios';
import React, { useState } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email , setEmail] = useState('')
    const [adminAdded, setAdminAdded] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value)
    } 
    //making user a admin
    const handleSubmit = e => {
        const user = {email}
        axios.put('https://stormy-sea-69201.herokuapp.com/users/admin', user)
        .then(res => {  
            if (res.data.modifiedCount) {         
                setAdminAdded(true)
                e.target.reset()
            }
        })
        e.preventDefault()
    }
    return (
        <div>
            <Container className='py-5'>
            <Row>               
                <Col lg='6' sm='12'>
                    <div className="heading mb-5">
                        <h3>Want to make anyone Admin</h3>
                        <h1>Make Admin Here</h1>
                    </div>
                <form onSubmit={handleSubmit}>
                    <input placeholder="User's Email" className='w-100 mb-3 p-2' onBlur={handleOnBlur} type="email"/>
                    <button type='submit' className='btn btn-warning mb-3 fw-bold'>Make Admin</button>
                </form>
                {
                    adminAdded && <Alert  variant='success'>
                    You Added Admin Successfully .
                </Alert>
                }
                </Col>
                <Col lg='6' sm='12'>
                {/* <img src={img1} alt="" className="img-fluid" /> */}
                </Col>
            </Row>
            </Container>
        </div>
    );
};

export default MakeAdmin;