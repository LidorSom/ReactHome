import { React, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import "bootstrap/dist/css/bootstrap.min.css";

export default function LoginComp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      setValidated(true);
    }

    console.log(email, password, rememberMe);
  };

  return (
    <>
      <Container className="" fluid="sm">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Col></Col>
            <Col className="">
              <Form.Group className="w-50">
                <Form.Label>כתובת מייל</Form.Label>
                <Form.Control
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  id="email"
                ></Form.Control>
                <Form.Control.Feedback type="invalid">
                  בבקשה הכנס אמייל בפורמט המבוקש
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="w-50">
                <Form.Label>סיסמה</Form.Label>
                <Form.Control
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="סיסמה"
                ></Form.Control>
                <Form.Text></Form.Text>
              </Form.Group>
              <Form.Check
                className=""
                reverse
                type="switch"
                label="זכור אותי"
                isValid={rememberMe}
                onChange={(e) => setRememberMe(e.target.value)}
              ></Form.Check>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
            <Col className="">
              <Stack direction="horizontal">
                <Button className="p-2" variant="primary" type="submit">
                  כניסה
                </Button>

                <Button
                  onClick={() => props.onFormSwitch("register")}
                  className="p-2"
                  variant="secondary"
                >
                  הרשמה
                </Button>
              </Stack>
            </Col>
            <Col></Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
