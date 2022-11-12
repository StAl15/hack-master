import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import io from 'socket.io-client'
import constants from '../constants';
import './Chat.css'
import TextField from '@mui/material/TextField';
import Form from '../components/ChatComponents/Form'
import Messages from '../components/ChatComponents/Messages';
import UserBar from '../components/ChatComponents/UserBar';
import OnlineUserBar from '../components/ChatComponents/OnlineUserBar';




const Chat = () => {
    const socket = io.connect(constants.SOCKET_URL)

    const [message_input, setMessage_input] = useState("")

    const sendMessage = (text_, name_) => {
        setMessages(messages.push({ text: { text_ }, name: { name_ } }))
    }


    const [messages, setMessages] = useState([
        {
            text: 'hello',
            name: 'Sedrick k'
        },
        {
            text: 'hello sedrick :)',
            name: 'sdsfsf'
        }

    ])

    const [user, setUser] = useState({
        id: 1,
        name: 'Alex',
        surname: 'Rgt',
        available: false,
        avatar: "https://images.squarespace-cdn.com/content/v1/52e90534e4b07f1315fbe6f4/1392046490216-8RCZF0ZQD1RH00P7QVRN/ke17ZwdGBToddI8pDm48kAf-OpKpNsh_OjjU8JOdDKBZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzAFzFJoCInLPKyj9AG8yKe7-Q2aFvP177fkO9TY_-rz5WoqqTEZpmj4yDEOdwKV68/andy-horner-portrait-circle-blog.jpg"

    })

    return (
        <div>
            {/* <Link to={"/profile"}>Профиль </Link> */}

            {/* <Form /> */}
            <div className='content'>
                <div className='list_subjects'>
                    <div>
                        <img src={user.avatar} alt=""></img>
                        <h1>{user.name} {user.surname}</h1>
                    </div>
                </div>
                <div className='chat_screen'>
                    <Messages messages={messages} />
                    <TextField fullWidth style={{maxWidth: '60vw',position: 'absolute', bottom: '0'}} id="outlined-basic" label="Сообщение" variant="outlined" onChange={(e) => setMessage_input(e.target.value)} />
                </div>

            </div>

            {/* <OnlineUserBar />
            <UserBar /> */}

        </div>
    );
};

export default Chat;