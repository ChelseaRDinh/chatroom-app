import React from 'react'

const DUMMY_DATA = [
    {
        senderId: 'cdinh',
        text: 'Hey there! How are you?'
    },
    {
        senderId: 'marcorohon',
        text: 'Excellent, friend! How are you?'
    },
    {
        senderId: 'cdinh',
        text: 'I am so glad! Same here.'
    }
]

class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                {DUMMY_DATA.map((message, index) => {
                    return (
                        <div key={index} className="message">
                            <div className="message-username">{message.senderId}</div>
                            <div className="message-text">{message.text}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MessageList