import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";
import { Container, Row, Col } from "react-bootstrap";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn, user } = useUserAuth();
  const navigate = useNavigate();

  // console.log()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  if(user){
    return <Navigate to="/"/>
   }

  return (
    <>
      <Container style={{ width: "400px" ,boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px"}} >
        <Row>
          <Col>
            <div style={{ margin: "auto", justifyContent: "center" }}>
              <div className="p-4 box">
                <h1
                  style={{
                    fontSize: "30px",
                    textAlign: "center",
                    marginBottom: "10px",
                  }}>
                  Login Page
                </h1>
                {/* <h2 className="mb-3">Login Page</h2> */}
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>

                  <div className="d-grid gap-2">
                    <Button variant="primary" type="Submit">
                      Log In
                    </Button>
                  </div>
                </Form>
                <hr />
                <div style={{ marginTop: "10px", marginLeft: "35px" }}>
                  <GoogleButton
                    className="g-btn"
                    type="dark"
                    onClick={handleGoogleSignIn}
                  />
                </div>
                <Link to="/phonesignup">
                  <div className="d-grid gap-2 mt-3">
                    <Button variant="success" type="Submit">
                      Sign in with Phone
                    </Button>
                  </div>
                </Link>
              </div>
              <div className="p-4 box mt-3 text-center">
                Don't have an account? <Link to="/signup">Sign up</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
