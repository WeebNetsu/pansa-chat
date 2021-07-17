import React from 'react';

function MessageForm({ onMessageSendHandler, username, setUsername, messageText, setMessageText }) {
    return (
        <form onSubmit={onMessageSendHandler} id="message-form">
            <input type="text" maxLength={5} placeholder="username" autoComplete="off" id="username" value={username} onChange={e => { setUsername(e.target.value) }} />
            <input type="text" maxLength={200} placeholder="message" autoComplete="off" id="message" value={messageText} onChange={e => { setMessageText(e.target.value) }} />
            <input type="submit" value="Send!" id="send-message" />
        </form>
    )
}

export default MessageForm;