import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { signup, signin } from './Cognito.js'


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      password:'',
  }
};

  onSubmit = (event) => {
  event.preventDefault();
  console.log(this.state.username)
  }
  onChange = (event) => {
    event.preventDefault();
    console.log(event.target.value)
    event.target.id === 'username' ? this.setState({username: event.target.value}):
    this.setState({password: event.target.value});
  }

    render() {
      return (
        <>
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId='username'>
            <Form.Label>Username</Form.Label>
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
