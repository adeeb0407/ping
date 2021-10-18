import React, { useState } from 'react'
import {useAuth} from '../AuthContext'

import { ChatEngine, getOrCreateChat } from 'react-chat-engine'
const {user} = useAuth();

const DirectChatPage = () => {
	const [username, setUsername] = useState('')

	function createDirectChat(creds) {
		getOrCreateChat(
			creds,
			{ is_direct_chat: true, usernames: [username] },
			() => setUsername('')
		)
	}

	function renderChatForm(creds) {
		return (
			<div>
				<input 
					placeholder='Username' 
					value={username} 
					onChange={(e) => setUsername(e.target.value)} 
				/>
				<button onClick={() => createDirectChat(creds)}>
					Create
				</button>
			</div>
		)
	}

	return (
		<ChatEngine
                height = 'calc(100vh- 66px)'
                projectID = '318ba17b-3aee-4477-8002-ddc75143d081'
                userName = {user.email}
                userSecret = {user.uid}
                onConnect={(creds) => console.log(creds)}
                onFailAuth={(props) => console.log(props)}
			renderNewChatForm={(creds) => renderChatForm(creds)}
            
		/>
	)
}

export default DirectChatPage;