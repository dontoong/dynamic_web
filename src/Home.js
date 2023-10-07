import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function Home(props) {
    useEffect(() => {
        AOS.init();
    }, []) // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

    return (
        <>
        <br /><br /><br /><br /><br />
        <div className="mycigar" data-aos="fade-up" data-aos-duration="1000">
            &nbsp;&nbsp;&nbsp;나만의 작은 담배 정보 저장소
        </div>
        </>
    );
}

export default Home;
