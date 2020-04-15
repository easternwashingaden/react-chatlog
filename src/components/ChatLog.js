import React from 'react';
// import './Chatlog.css'
import ChatEntry from './ChatEntry';

const ChatLog = (props) =>{
  const chatList = props.messages.map((message, i) =>{
    return(
      <div key = {i}>
        <ChatEntry 
          sender = {message.sender}
          body = {message.body}
          timeStamp = {message.timeStamp}
        />
      </div>
    );
  });
  
  return(
    <div>
      {chatList}
    </div>
  );
}

export default ChatLog;