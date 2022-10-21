'use strict';

const express = require('express');
const app = express();
const ngrok = require('ngrok');
(async function() {
    const url = await ngrok.connect(3001);
  })();
app.get('/request', (request, response) => {
    console.log(request.body)
})


function handleAuction(message){
    console.log(message.Body);
};

app.listen(3001, () => {
    console.log('listening')
})