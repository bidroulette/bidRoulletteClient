'use strict';

const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

function signup(name, email, password) {

  if (!name || !email || !password) {
    throw new Error('Input Validation Error : name, email or password invalid');
  }
  const poolData = {
    UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
    ClientId: process.env.AWS_COGNITO_CLIENT_ID,
  }

  const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  const dataEmail = {
    Name: 'email',
    Value: email
  }
  const attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
//
  const dataName = {
    Name: 'name',
    Value: name
  }
  const attributeName = new AmazonCognitoIdentity.CognitoUserAttribute(dataName);
//
  userPool.signUp(name, email, password, [attributeEmail, attributeName], null, (err, data) => {
    if (err) {
      console.error(err);
    }
    let user = data.user;
    console.log('user signed up :', user);
  })
}

//// Sign in
function signin(name, username, email, password) {
  if (!name || !username || !email || !password) {
    throw new Error('Input Validation Error: invalid cognito credentials');
  }
  const poolData = {
    UserPoolId: process.env.AWS_COGNITO_USER_POOL_ID,
    ClientId: process.env.AWS_COGNITO_CLIENT_ID,
  }
  let credentials = {
    Name:name,
    Email: email,
    Password: password
  } 
  const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(credentials);
  const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
  const userData = {
    userName: username,
    Pool: userPool
  }
  const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData)
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function(result) {
      let accessToken = result.getAccessToken().getJwtToken();
      console.log('SUCCESS! ' + accessToken);
    },
    onFailure: function(err) {
      console.error('authentication error: ', err);
    }
  })
}


module.exports = { signup, signin };