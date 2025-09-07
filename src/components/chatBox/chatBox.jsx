import React from 'react';
import './chatBox.css';
import greendot from "../../assets/greenDot.png";
import help from "../../assets/help.png";
import profile from "../../assets/profile.png";
import gallery from "../../assets/gallery_icon.png";
import send from "../../assets/send.png";

export const ChatBox = () => {
    return (
        <div className='chat-box'>
            <div className='chat-user'>
                <img src={profile} alt="" />
                <p>Richrd Sanford <img className='dot' src={greendot} alt="" /></p>
                <img src={help} className='help' alt="" />
            </div>
            <div className="chat-msg">
                <div className='s-msg'>
                    <p className='msg'>Lorem ipsum is placeholder text commonly used in ..</p>
                    <div>
                        <img src={profile} alt='' />
                        <p>2:30 PM</p>
                    </div>
                </div>
                 <div className='r-msg'>
                    <p className='msg'>Lorem ipsum is placeholder text commonly used in ..</p>
                    <div>
                        <img src={profile} alt='' />
                        <p>2:30 PM</p>
                    </div>
                </div>
            </div>
            <div className='chat-input'>
                <input type="text" placeholder='Send a message' />
                <input type="file" id='image' accept='image/png, image/jpeg' hidden />
                <label htmlFor="image">
                    <img src={gallery} alt="" />
                </label>
                <img src={send} alt='' />
            </div>
        </div>
    )
}