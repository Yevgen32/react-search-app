import React from 'react';

import './styles/messages.css'

function Messages(props: {message: string}) {
    const {message} = props;
    
    return message ? <div className="message-info">{message}</div> : null;
}

export default Messages;