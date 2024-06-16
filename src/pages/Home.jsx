import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import '../assets/scss/_home.scss';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [recommendedVideos, setRecommendedVideos] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const keyword = 'K-pop 최신'; // 검색 키워드 예시
                const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
                const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${keyword}&type=video&maxResults=6&key=${apiKey}`);
                const data = await response.json();
                const videos = data.items.filter(item => item.id.videoId);
                setRecommendedVideos(videos);
            } catch (error) {
                console.error('비디오를 가져오는 중 오류가 발생했습니다.', error);
            } finally {
                setLoading(false);
            }
        };

        fetchVideos();
    }, []);

    const handleAddToPlaylist = (playlistId) => {
        const playlistKey = `playlist${playlistId}`;
        let playlist = JSON.parse(localStorage.getItem(playlistKey));

        // playlist가 null인 경우 초기화
        if (!playlist) {
            playlist = {
                id: playlistKey,
                name: `Playlist ${playlistId}`,
                items: []
            };
        }

        const updatedPlaylist = {
            ...playlist,
            items: [...playlist.items, selectedVideo]
        };

        localStorage.setItem(playlistKey, JSON.stringify(updatedPlaylist));
        alert(`${selectedVideo.snippet.title}이(가) ${playlist.name}에 추가되었습니다.`);
    };

    const handleOpenModal = (video) => {
        setSelectedVideo(video);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedVideo(null);
    };

    return (
        <div id="homePage">
            <section className="welcome-section">
                <h1>환영합니다!</h1>
                <p>이 사이트에서 다양한 차트의 순위를 보고, 좋아하는 차트를 클릭하여 바로 재생할 수 있습니다.</p>
            </section>

            <section className="recommended-videos">
                <h2>추천 영상</h2>
                {loading ? (
                    <p>로딩 중...</p>
                ) : (
                    <div className="video-grid">
                        {recommendedVideos.map(video => (
                            <div key={video.id.videoId} className="video-card">
                                <iframe
                                    width="100%"
                                    height="200"
                                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title={video.snippet.title}
                                ></iframe>
                                <p>{video.snippet.title}</p>
                                <button onClick={() => handleOpenModal(video)}></button>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            <Modal isOpen={modalOpen} onClose={handleCloseModal} onAddToPlaylist={handleAddToPlaylist} />
        </div>
    );
};

export default Home;
