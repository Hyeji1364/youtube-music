import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FcRating, FcPlus, FcApproval } from "react-icons/fc";
import { IoMusicalNotes } from "react-icons/io5";

const Header = () => {
    const [showInput, setShowInput] = useState(false); // 입력 박스 표시 여부 상태
    const [newItem, setNewItem] = useState(''); // 새 항목의 제목 상태
    const [playlistCount, setPlaylistCount] = useState(0); // 플레이리스트 개수 상태
    const [selectedPlaylist, setSelectedPlaylist] = useState(null); // 선택된 플레이리스트 상태

    useEffect(() => {
        const count = localStorage.getItem('playlistCount') || 0; // 로컬 스토리지에서 플레이리스트 개수를 가져옴
        setPlaylistCount(Number(count)); // 상태 업데이트
    }, []);

    const handleAddClick = () => {
        setShowInput(true); // 입력 박스 표시
    };

    const handleInputChange = (e) => {
        setNewItem(e.target.value); // 입력 값 업데이트
    };

    const handleAddItem = () => {
        if (newItem.trim() !== '') { // 제목이 비어있지 않은 경우
            const newCount = playlistCount + 1; // 새로운 플레이리스트 번호
            const playlistKey = `playlist${newCount}`; // 플레이리스트 키 (예: playlist1, playlist2)
            const newPlaylist = {
                id: playlistKey,
                name: newItem,
                items: [] // 초기 항목 배열
            };

            localStorage.setItem(playlistKey, JSON.stringify(newPlaylist)); // 로컬 스토리지에 저장
            localStorage.setItem('playlistCount', newCount.toString()); // 플레이리스트 개수 저장
            setPlaylistCount(newCount); // 상태 업데이트
            setNewItem(''); // 입력 값 초기화
            setShowInput(false); // 입력 박스 숨기기
        }
    };

    const handleDeleteItem = (playlistKey) => {
        localStorage.removeItem(playlistKey); // 로컬 스토리지에서 해당 플레이리스트 삭제
        const updatedCount = playlistCount - 1; // 플레이리스트 개수 업데이트
        localStorage.setItem('playlistCount', updatedCount.toString()); // 새로운 플레이리스트 개수 저장
        setPlaylistCount(updatedCount); // 상태 업데이트
        setSelectedPlaylist(null); // 선택된 플레이리스트 초기화
    };

    const handleSelectPlaylist = (playlistKey) => {
        setSelectedPlaylist(prevKey => prevKey === playlistKey ? null : playlistKey); // 선택된 플레이리스트 업데이트, 같은 항목을 다시 선택하면 해제
    };

    const playlistLinks = [];
    for (let i = 1; i <= playlistCount; i++) {
        const playlistKey = `playlist${i}`;
        const playlist = JSON.parse(localStorage.getItem(playlistKey));
        if (playlist) {
            playlistLinks.push(
                <li key={i} onClick={() => handleSelectPlaylist(playlistKey)}>
                    <Link to={`/playlist/${playlistKey}`}><span className='icon2'><FcApproval /></span>{playlist.name}</Link>
                    {selectedPlaylist === playlistKey && (
                        <button className="delete-button" onClick={() => handleDeleteItem(playlistKey)}>Delete</button>
                    )}
                </li>
            );
        }
    }

    return (
        <header id='header' role='banner'>
            <h1 className='logo'>
                <Link to='/'><IoMusicalNotes />🎧My MUSIC </Link>
            </h1>
            <h2>chart</h2>
            <ul>
                <li><Link to='chart/melon'><span className='icon'></span>Melon CHART</Link></li>
                <li><Link to='chart/bugs'><span className='icon'></span>Bugs CHART</Link></li>
                <li><Link to='chart/apple'><span className='icon'></span>Apple CHART</Link></li>
                <li><Link to='chart/genie'><span className='icon'></span>Genie CHART</Link></li>
                <li><Link to='chart/billboard'><span className='icon'></span>Billboard CHART</Link></li>
            </ul>
            <h2>playlist</h2>
            <ul>
                <li><Link to='/mymusic'><span className='icon2'><FcRating /></span>Mymusic</Link></li>
                {playlistLinks}
                <li>
                    {showInput ? (
                        <div className="input-container">
                            <input
                                type='text'
                                value={newItem}
                                onChange={handleInputChange}
                                className="input-box"
                            />
                            <button className="add-button" onClick={handleAddItem}>Add</button>
                        </div>
                    ) : (
                        <Link to='#' onClick={handleAddClick}><span className='icon2'><FcPlus /></span>Create</Link>
                    )}
                </li>
            </ul>
        </header>
    );
}

export default Header;