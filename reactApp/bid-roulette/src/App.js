import './App.css';
import React from 'react';
import io from 'socket.io-client';
import LoginPage from './LoginPage';
import LogoutPage from './LogoutPage';
import About from './About.js';
import Header from './Header.js';
// import {  withAuth0 } from '@auth0/auth0-react';
// import Game from './Game.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import { signup, signin } from './Cognito.js'


// import 'cross-fetch/polyfill';
// import AmazonCognitoIdentity from 'amazon-cognito-identity-js';


// var authenticationData = {
//   Username : 'username',
//   Password : 'password',
// };
// var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);
// var poolData = { UserPoolId : 'us-east-1_ExaMPle',
//   ClientId : '1example23456789'
// };
// var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
// var userData = {
//   Username : 'username',
//   Pool : userPool
// };
// var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
// cognitoUser.authenticateUser(authenticationDetails, {
//   onSuccess: function (result) {
//       var accessToken = result.getAccessToken().getJwtToken();

//       /* Use the idToken for Logins Map when Federating User Pools with identity pools or when passing through an Authorization Header to an API Gateway Authorizer */
//       var idToken = result.idToken.jwtToken;
//   },

//   onFailure: function(err) {
//       alert(err);
//   },

// });





const URL = 'http://localhost:3002/messages';
// const socket = io.connect(URL)
  const socket = io.connect(URL, {
    auth: {
      token: 'eyJraWQiOiJJcEdHNVRjWnhyVHFFbkZkd3ZwXC9MYlR3ZXJJdGc5VUlaTEFhMVRRWXpHST0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1MmUxODdkMy1hOGQyLTQxOGYtYThjNC00MDFiNTgxZWI0ZjIiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0yLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMl84Y1NPVkxQc2YiLCJjbGllbnRfaWQiOiI2YmZjajhtdXRrcGhwMnYyNzFmdWwwYmdqcSIsIm9yaWdpbl9qdGkiOiI0MjM5NGJmOS00NDZiLTQ0NGItYTNlMC04NzhiYTZlNDk5MGEiLCJldmVudF9pZCI6IjAyNTdmMDE3LTk2MGYtNDc0ZS1iZWZjLWYwNDE3NDJlYjdjOSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NjYzMTUwMzIsImV4cCI6MTY2NjMxODYzMiwiaWF0IjoxNjY2MzE1MDMyLCJqdGkiOiJlOGZkNmY0Zi04YTM3LTQzNmUtOGViYy0wNmU1MGEzODU3YzAiLCJ1c2VybmFtZSI6IjUyZTE4N2QzLWE4ZDItNDE4Zi1hOGM0LTQwMWI1ODFlYjRmMiJ9.mNYqHFah42dkfAHWfTSOGFFKivKdRt0BKttB1JSH3jceSOV-ahlaSLXf5qrGR85EylEWCfVxr0gl3ujzuKQZ29hbif272bEQytcDc-XcIkEG_xFy83Nt3-QA7DRoROb_C7BhJxHdz5plZLN3BOE6fvIafMrFHSHuuypL4hxrlUtbNYpW7WesQ2sLhqbTDEDgp7EnaxX6u3iAGVSgeHaf4uuObCWUPK3NBcJeFXYzUJfx3wRTfWpxuUtAPfEojhkmlMptitlALJPqjZ3WPc8cqHHj99JbSquTkZgPykRQ2wWgwx16eGkMbxiCcR_vMRzc8xWcvnEDvg0Eeye8d_Hpqw',
    }
});// unauthorized unless a token is attached;

class App extends React.Component {

componentDidMount(){
  socket.on('itemReady', (payload) => {
    socket.emit('joinRoom', payload.itemId)
    let currentBid = payload.intialBid
    console.log(payload)
    setInterval(() => {
        currentBid += 5;
        socket.emit('sendBid', {
            userBid: currentBid
        });
    }, 5000) 
});
}  

 
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showUpdateModal: false,
      showSongModal:false,
      highScore:[],
      score:{},
      favSongs:[],
      song:{},
  }
};

   

  render() {
    return (
      <>
        {/* {this.props.auth0.isAuthenticated
          ? <LogoutButton/>
          : <LoginButton/>
        }
        {this.props.auth0.isAuthenticated
          ?<Content/>
          : <h2>Please Log in</h2>
        } */}
        <Router>
          <Header/>
          <Routes>
          {/* <Route 
            path="/" 
            element={<Game
              handleModal={this.handleModal}
              handleSubmit={this.handleSubmit}
              showModal={this.state.showModal}/>
            }>
          </Route> */}
          <Route 
            path="/About" 
            element={<About
            />}>
          </Route>
          <Route 
            path="/LoginPage" 
            element={<LoginPage
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            />}>
          </Route>
          <Route 
            path="/LogoutPage" 
            element={<LogoutPage
            />}>
          </Route>
          {/* <Route 
            path="/FavoriteSongs" 
            element={<FavoriteSongs
            favSongs={this.state.favSongs}
            deleteSong={this.deleteSong}
            />}>
          </Route> */}
          </Routes>
        </Router>
      </>
    )
  }
}


export default App;
