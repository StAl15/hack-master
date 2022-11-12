import React from 'react';

// "messageId": "2a0da872-f8a8-4316-bb23-02a1161ea84d",
//       "text": "Привет, оператор!",
//       "data": null,
//       "messageType": "TEXT",
//       "mediaUrl": null,
//       "sender": 100500,
//       "recipient": 100501,
//       "dialogId": 1,
//       "timestamp": 1668153997208

const Message = ({ text, name }) =>
    <div><b>{name}: {text} </b> <br /> </div>

const Messages = ({ messages = [] }) => {

    if (messages.length < 1) {
        return 'No messages'
    }

    return (
        messages.map((message, i) => <Message {...message} key={i} />)
    );
}

export default Messages;
