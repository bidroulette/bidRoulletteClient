import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class LoginPage extends React.Component {

  onSubmit = (event) => {
    event.preventDefault();
  
  }
  onChange = (event) => {
    event.preventDefault();
    console.log(event.target)
    this.setState({
      userInfo: {
        username: event.target.value,
        password: event.target.password,
    }})
  }

    render() {
      return (
        <>
          <Form onSubmit={this.props.onSubmit}>
            <Form.Group controlId='username'>
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={this.props.onChange}></Form.Control>
            </Form.Group>
            
            <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={this.props.onChange}></Form.Control>
            </Form.Group>
            <Button type='submit'>submit</Button>
            </Form>
        </>
      )
    }
}

export default LoginPage;
