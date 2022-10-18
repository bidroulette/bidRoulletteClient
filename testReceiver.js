'use strict';


const AWS = require('aws-sdk');
const Chance = require('chance');
const chance = new Chance();
const { Consumer } = require('sqs-consumer');

// const app = Consumer.create({
//     queueUrl: 'https://sqs.us-west-2.amazonaws.com/240601385016/bidRoulette',
//     handleMessage: handleAuction,
// })



const sns = new AWS.SNS({
    region: 'us-west-2'
});



const topic = 'arn:aws:sns:us-west-2:240601385016:bidRoulette';

const params = {
    TopicArn: topic,
    Protocol: 'http',
    Endpoint: 'http://localhost:3001/request',
};

sns.subscribe(params, (err, data) => {
    if(err){
        console.log(err)
    } else {
        console.log(data)
    }
})