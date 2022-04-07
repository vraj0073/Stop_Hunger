import React, { useState } from "react";
import { Button, Col, Container,Row } from "react-bootstrap";
import "../css/Login.css";
import NavigationBar from "./NavigationBar";
import backgroundlogin from "../Assests/images/pic.jpg";
import axios from 'axios';

export const Login = () => {
  const emailRegex = /\S+@\S+\.\S+/;
  const [Emailmessage, setEmailMessage] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const validsubmit = ()=>{
   
    axios.post('http://localhost:5000/login', {
            email: Email,
            password: Password,
          })
          .then(function (response) {
            console.log(response);
            alert("login done")
            
          })
          .catch(function (error) {
            console.log(error);
            alert("Invalid Email or Password")
          });
  }
  const validemail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {

      setEmail(email)
      setEmailMessage(" ");
      
      
    } else {
      setEmailMessage('Please enter a valid email!');
      
    }
  };
  const validpassword = (event) => {
    let password = event.target.value;

   setPassword(password);
    
  };
  return (
    <>
    <Row style={{ backgroundImage: `url(${backgroundlogin})`, backgroundRepeat:'no-repeat',backgroundSize:'cover',height: '100%' }}>      
      
      <Col>
      <Container className="logincontainer">
        <form>
          <h2 className="heading" style={{color : 'white', fontFamily:'serif', paddingLeft: '30%'}}>Login</h2>
          <div className="form-group">
            <label style={{color : 'white'}}>Email address</label>
            <input
              required
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={validemail}
            />
            <small  id="loginmessage" style={{color: 'darkorange'}} className="error-label form-text text-muted">{Emailmessage}</small>
          </div>
          <br></br>
          <div className="form-group" id="password_id">
            <label style={{color : 'white'}}>Password</label>
            <input
              required
              type="password"
              className="form-control"
              placeholder="Enter Password"
              onChange={validpassword}
            />
          </div>
          <br></br>
          <div>
            <Button type="button" id="buttonlogin" onClick={validsubmit}>
              Submit
            </Button>
            <> </>
          </div>
        </form>
      </Container>
      </Col>
      </Row>

    </>
  );
};

export default Login;
