'use strict';

const AWS = require('aws-sdk');
const Chance = require('chance');
const chance = new Chance();
const { Producer } = require('sqs-producer')


const sns = new AWS.SNS({
    region: 'us-west-2'
});

const topic = 'arn:aws:sns:us-west-2:240601385016:bidRoulette';

const producer = Producer.create({
    queueUrl: 'https://sqs.us-west-2.amazonaws.com/240601385016/bidRoulette',
    region: 'us-west-2',
})
const thingsToSend = {
    userId: 'Cognito Id',
    itemId: chance.guid(),
    itemName: 'table',
    startTime: 'time',
    endtime: 'timeAgain',
    intialBid: 'bid price',
}



const message = {
    TopicArn: topic,
    Message: JSON.stringify(thingsToSend)
};

sns.publish(message).promise()
.then(data => {
    console.log(data)
})
.catch(err => {
    console.log(err)
})

