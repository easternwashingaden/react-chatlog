import React from 'react';
import './ChatEntry.css'
import Timestamp from './Timestamp.js';

const ChatEntry = (props) =>{
  return(
    <div className = "chat-entry local">
      <div>{props.sender}</div>
      <div className = "entry-bubble">{props.body}</div>
      <div><Timestamp time = {props.timeStamp}/></div>
    </div>
  ) 
}

export default ChatEntry;