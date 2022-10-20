import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Welcome to our Website</h1>
    {/* <p><a href="https://bid-roulette.auth.us-west-2.amazoncognito.com/login?client_id=6sgbtibpnbj713hm87rie729cm&response_type=code&scope=email+openid&redirect_uri=http://localhost:3000/LoginPage.html">Register or Login</a></p> */}
    <App />
  </React.StrictMode>
);

