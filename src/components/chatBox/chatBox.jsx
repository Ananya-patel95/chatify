import React from 'react';
import './chatBox.css';
import greendot from "../../assets/greenDot.png";
import help from "../../assets/help.png";
import profile from "../../assets/profile.png";
export const ChatBox = () => {
    return(
        <div className='chat-box'>
            <div className='chat-user'>
                <img src={profile} alt="" />
                <p>Richrd Sanford <img className='dot' src={greendot} alt="" /></p>
                <img src={help} className='help' alt="" />
            </div>
        <div className='chat-input'>
            <input type="text" placeholder='Send a message'/>
            <input type="file" id='image' accept='image/png, image/jpeg' hidden/>
            <label htmlFor="image">
                <img src="" alt="" />
            </label>
        </div>
        </div>
    )
}