import React from 'react'
import {useHistory} from 'react-router-dom'
import {ChatEngine} from 'react-chat-engine';
import {auth} from '../firebase'

function Chat() {

    const history = useHistory()

    let handelLogout = async () => 
        await auth.signOut();
        history.push('/')

    return (
        <div className = 'chats-page'>
        <div className = 'nav-bar'>
            <div className = 'logo-tab'>
                <h1>ChatApp</h1>
            </div>
            <div className = 'logout-tab' onClick = {handelLogout}>
                Logout
            </div>
        </div>
            <ChatEngine 
                height = 'calc(100vh- 66px)'
                projectId = '318ba17b-3aee-4477-8002-ddc75143d081'
                userName = '.'
                userSecret = '.'
            />
        </div>
    )
}

export default Chat
