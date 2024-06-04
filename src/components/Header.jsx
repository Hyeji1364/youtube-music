import React from 'react'
import { Link } from 'react-router-dom'



const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='logo'>
                <Link to='/'>
                    <span>MY MUSIC CHART</span>
                </Link>

            </h1>
            <h2>chart</h2>
            <ul>
                <li><Link to='/melon'><span className='icon'></span>Melon Chart</Link></li>
                <li><Link to='/bugs'><span className='icon'></span>Bugs Chart</Link></li>
                <li><Link to='/apple'><span className='icon'></span>Apple Chart</Link></li>
                <li><Link to='/genie'><span className='icon'></span>Genie Chart</Link></li>
                <li><Link to='/bill'><span className='icon'></span>Billboard Chart</Link></li>
            </ul>
            <h2>playlist</h2>
            <ul>
                <li><Link to='/recent'>recent</Link></li>
                <li><Link to='/favorites'>favorites</Link></li>
                <li><Link to='/mymusic'>mymusic</Link></li>
            </ul>
        </header>
    )
}

export default Header