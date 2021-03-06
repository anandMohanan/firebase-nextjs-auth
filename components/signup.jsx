/* eslint-disable react/react-in-jsx-scope */
import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import Link from "next/link";
import { useAuth } from "../utils/context/authProvider";

const SignupComponent = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(emailRef.current.value, passwordRef.current.value);
  };
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Confirm passowrd</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button className="w-100" type="submit" handleSubmit={handleSubmit}>
              Submit{" "}
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div>
        Already have an account? <Link href="/login">Log in.</Link>{" "}
      </div>
    </>
  );
};

export default SignupComponent;
