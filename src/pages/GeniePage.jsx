import React, { useState } from 'react';
import Chart from '../components/Chart';
import useFetchData from '../hook/useFetchData';
import { ClipLoader } from 'react-spinners';

const GeniePage = () => {

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1); // 어제 날짜

    const [selectedDate, setSelectedDate] = useState(yesterday);

    const formattedDate = selectedDate.toISOString().split('T')[0]; // 날짜 포맷 형식 맞추기
    const { data, loading } = useFetchData(`https://raw.githubusercontent.com/webs9919/music-best/main/genie/genie100_${formattedDate}.json`);

    return (
        <>
            {loading ? (
                <div>
                    <ClipLoader size={50} color={"#2961e4"} loading={loading} />
                </div>
            ) : (
                <Chart
                    title="🎵 감미로운 지니 차트 Top100"
                    musicList={data}
                    selectedDate={selectedDate}
                    onDateChange={setSelectedDate}
                    minDate={new Date('2024-05-01')}
                    maxDate={yesterday}
                />
            )}
        </>
    );
}

export default GeniePage;