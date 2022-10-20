import React from 'react';
//import { withAuth0 } from '@auth0/auth0-react';
//import App from './App.js';

class LogoutPage extends React.Component {

    render() {
      return (
        <>
      <h1>Hello</h1>
         <p>You are logged out</p>
         <a href="https://bid-roulette.auth.us-west-2.amazoncognito.com/login?client_id=6sgbtibpnbj713hm87rie729cm&response_type=code&scope=email+openid&redirect_uri=http://localhost:3000/LoginPage.html">Log In</a>

        </>
      )
    }
}

export default LogoutPage;