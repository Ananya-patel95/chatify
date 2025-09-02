import React from 'react';
import './leftSideBar.css';
import search from "../../assets/Search.png";
import menu from "../../assets/menu.png";
import profile from "../../assets/profile.png";
import chatLogo from "../../assets/ChatLogo.png";

export const LeftSideBar = () => {
    return (
        <div className='ls'>
            <div className='ls-top'>
                <div className='ls-nav'>
                    <img src={chatLogo} className='logo' alt='logo' />
                    <div className='menu'>
                        <img src={menu} alt="menu" />
                    </div>
                </div>
                <div className='ls-search'>
                    <img src={search} alt="chat logo" />
                    <input type="text" placeholder='Search here..' />
                </div>
            </div>
            <div className='ls-list'>
                {Array(12).fill("").map((item, index) => (
                    <div key={index} className='friends'>
                        <img src={profile} alt="" />
                        <div>
                            <p>Richard Sanford</p>
                            <span>Hello, How are you?</span>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}
