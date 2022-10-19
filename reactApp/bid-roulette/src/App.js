import './App.css';
import bidInput from './BidInput';
import React from 'react';
import io from 'socket.io-client';

const URL = 'http://localhost:3002/messages';
const socket = io.connect(URL);

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

  render(){
    return(<>
    <h1>Bid Roulette</h1>
    </>)
  }
}

export default App;
