import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { signup, signin } from './Cognito.js'


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      password:'',
  }
};

  onSubmit = (event) => {
  event.preventDefault();
console.log('event fired');
  // console.log(event.target.value);
  signup(event.target.name.value,
     event.target.email.value, event.target.password.value);
  }

  onChange = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    event.target.id === 'username' ? this.setState({name: event.target.value}):
    this.setState({password: event.target.value});
  }

    render() {
      return (
        <>
          <Form onSubmit={this.onSubmit}>
          <Form.Group controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={this.onChange}></Form.Control>
            </Form.Group>

            {/* <Form.Group controlId='userName'>
            <Form.Label>UserName</Form.Label>
            <Form.Control onChange={this.onChange}></Form.Control>
            </Form.Group> */}

            <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <Form.Control onChange={this.onChange}></Form.Control>
            </Form.Group>
            
            <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={this.onChange}></Form.Control>
            </Form.Group>
            <Button type='submit'>submit</Button>
            </Form>
        </>
      )
    }
}

export default LoginPage;
