import React from 'react';
import Button from 'react-bootstrap/Button'
//import { withAuth0 } from '@auth0/auth0-react';
//import App from './App.js';

class LoginPage extends React.Component {

    render() {
      return (
        <>
      <h1>Welcome!</h1>
         <p>You are logged in now!</p>
         <a href="https://bid-roulette.auth.us-west-2.amazoncognito.com/logout?client_id=6sgbtibpnbj713hm87rie729cm&logout_uri=http://localhost:3000/LogoutPage.html">Log Out</a>

        </>
      )
    }
}

export default LoginPage;
