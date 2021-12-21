import React,{useState} from 'react';
import './Contact.css';
import { Container,Row,Col,Form,Button,Table } from 'react-bootstrap';

const Contact = () =>{
    const [contact_arr,setContact] = useState([]);
    const [inputObj,setInputObj] = useState({
        fullname:"",
        email:"",
        mobile:""
    });

    const btnSubmitContact = event =>{
        event.preventDefault();

        setContact( (preArr)=>{
            return [
                ...preArr,
                inputObj
            ]
        });
        setInputObj({
            fullname:'',
            email:'',
            mobile:''
        })
    }

    const ChangeInputEvent = event =>{
        let name = event.target.name;
        let value = event.target.value;

        if(name == 'fullname'){
            setInputObj( (preValue)=>{
                return {
                    fullname:value,
                    email:preValue.email,
                    mobile:preValue.mobile
                }
            });
        }
        else if(name == 'email'){
            setInputObj( (preValue)=>{
                return {
                    fullname:preValue.fullname,
                    email:value,
                    mobile:preValue.mobile
                }
            });
        }
        else if(name == 'mobile'){
            setInputObj( (preValue)=>{
                return {
                    fullname:preValue.fullname,
                    email:preValue.email,
                    mobile:value
                }
            });
        }
    }

    return (
        <>
        <Container>
            <Row>
                <Col xs={5}>
                    <h1 className='Contact__headlable'>Contact Us</h1>
                    <h4 className='Contact__textcenter Contact__green_text'>{inputObj.fullname}</h4>
                    <h6 className='Contact__textcenter Contact__green_text'>{inputObj.email}</h6>
                    <p className='Contact__textcenter Contact__green_text'>{inputObj.mobile}</p>
                    <Form onSubmit={btnSubmitContact}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control value={inputObj.fullname} name="fullname" onChange={ChangeInputEvent} type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={inputObj.email} name="email" onChange={ChangeInputEvent} type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control value={inputObj.mobile} type="text" name="mobile" onChange={ChangeInputEvent} placeholder="mobile" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
                <Col xs={5}>
                <h1 className='Contact__headlable'>Contact Us List</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contact_arr.map( (keyValue,index)=>(
                            <tr key={`i_${index}`}>
                                <td>{index +1}</td>
                                <td>{keyValue.fullname}</td>
                                <td>{keyValue.email}</td>
                                <td>{keyValue.mobile}</td>
                            </tr>
                        ))}
                    </tbody>

                    </Table>

                </Col>
            </Row>
        </Container>
            
        </>
    )
}

export default Contact;