import React from 'react';
import './Chat.css'
import { LeftSideBar } from '../../components/leftSideBar/leftSideBar';
import { ChatBox } from '../../components/chatBox/chatBox';
import { RightSideBar } from '../../components/rightSideBar/rightSideBar';

export const Chat = () => {
    return (
        <div className='chat'>
            <div className='chat-container'>
                <LeftSideBar />
                <ChatBox />
                <RightSideBar />

            </div>
        </div>
    )
}