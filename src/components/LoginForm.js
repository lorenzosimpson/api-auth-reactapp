import React from "react";
import axios from "axios";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

const LoginForm = props => {
  const [user, setUser] = React.useState({});

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
    console.log(user);
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", user)
      .then(res => {
        console.log(res)
        props.history.push('/users')
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="form-container">
      <Form onChange={handleChange} onSubmit={handleSubmit}>
        <FormGroup row>
          <Col sm={10}>
            <Input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={10}>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </Col>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

export default LoginForm;
