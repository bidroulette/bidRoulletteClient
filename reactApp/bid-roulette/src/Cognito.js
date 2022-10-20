import 'cross-fetch/polyfill';
import  AmazonCognitoIdentity from 'amazon-cognito-identity-js';

var poolData = {
	UserPoolId: 'us-west-2_U0gI7Lc6z', // Your user pool id here
	ClientId: '6sgbtibpnbj713hm87rie729cm', // Your client id here
};
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

var attributeList = [];

var dataEmail = {
	Name: 'email',
	Value: 'email@mydomain.com',
};

var dataPhoneNumber = {
	Name: 'phone_number',
	Value: '+15555555555',
};
var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(
	dataPhoneNumber
);

attributeList.push(attributeEmail);
attributeList.push(attributePhoneNumber);

userPool.signUp('username', 'password', attributeList, null, function(
	err,
	result
) {
	if (err) {
		alert(err.message || JSON.stringify(err));
		return;
	}
	var cognitoUser = result.user;
	console.log('user name is ' + cognitoUser.getUsername());
});