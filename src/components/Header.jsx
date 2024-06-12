import React from 'react'
import { Link } from 'react-router-dom'

import { FcApproval, FcLike, FcAudioFile } from "react-icons/fc";
import { FcHeadset } from "react-icons/fc";

const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='logo'>
                <Link to='/'><FcHeadset />MY MUSIC CHART</Link>
            </h1>
            <h2>chart</h2>
            <ul>
                <li><Link to='/melon'><span className='icon'></span>Melon Chart</Link></li>
                <li><Link to='/bugs'><span className='icon'></span>Bugs Chart</Link></li>
                <li><Link to='/apple'><span className='icon'></span>Aplle Chart</Link></li>
                <li><Link to='/genie'><span className='icon'></span>Genie Chart</Link></li>
                <li><Link to='/bill'><span className='icon'></span>Billboard Chart</Link></li>
            </ul>
            <h2>playlist</h2>
            <ul>
                <li><Link to='/recent'><span className='icon2'><FcApproval /></span>recent</Link></li>
                <li><Link to='/favorites'><span className='icon2'><FcLike /></span>favorites</Link></li>
                <li><Link to='/mymusic'><span className='icon2'><FcAudioFile /></span>mymusic</Link></li>
            </ul>
        </header>
    )
}

export default Header