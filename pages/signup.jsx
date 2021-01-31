/* eslint-disable react/react-in-jsx-scope */
import SignupComponent from "../components/signup";
import { Container } from "react-bootstrap";

const signUp = () => (
  <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
  >
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <SignupComponent />
    </div>
  </Container>
);

export default signUp;
