import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Chart from '../components/Chart';
import '../assets/scss/_playlist.scss'; // 추가: 스타일 파일 import

const Playlist = () => {
    const { id } = useParams();
    const [playlist, setPlaylist] = useState({ name: '', items: [] });

    useEffect(() => {
        const storedPlaylist = JSON.parse(localStorage.getItem(id)) || { name: '', items: [] };
        setPlaylist(storedPlaylist);
    }, [id]);

    useEffect(() => {
        const handleStorageChange = () => {
            const updatedPlaylist = JSON.parse(localStorage.getItem(id)) || { name: '', items: [] };
            setPlaylist(updatedPlaylist);
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [id]);

    const handleRemoveTrack = (index) => {
        const updatedItems = playlist.items.filter((_, i) => i !== index);
        const updatedPlaylist = { ...playlist, items: updatedItems };
        setPlaylist(updatedPlaylist);
        localStorage.setItem(id, JSON.stringify(updatedPlaylist));
    };

    return (
        <section id="playlist">
            {playlist.items.length > 0 ? (
                <Chart
                    title={`${playlist.name} List 🎵`}
                    data={playlist.items}
                    showCalendar={false}
                />
            ) : (
                <section className='music-chart'>
                    <div className="title">
                        <h2>😜 {`${playlist.name}`}</h2>
                    </div>
                    <div className="list">
                        <ul>
                            {playlist.items.map((item, index) => (
                                <li key={index}>
                                    {item.title}
                                    <button className="delete-button" onClick={() => handleRemoveTrack(index)}>삭제</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            )}
        </section>
    );
}

export default Playlist;
