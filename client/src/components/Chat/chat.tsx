import React, { useState } from 'react'
import './Chat.css'

import { ChatEngine } from 'react-chat-engine'

const DirectChatPage = ({userName}: any) => {


	return (
        <div className='chat'>
            <ChatEngine
            height='100vh'
            userName={userName}
            userSecret='multy_salty'
            projectID='3512786c-29d4-460a-a9e8-370ca5f9ae84'
            />
        </div>
	)
}

export default DirectChatPage;