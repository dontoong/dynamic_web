import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';

import AOS from "aos";
import "aos/dist/aos.css";

import './sub.css'

function Esse(props) {
    useEffect(() => {
        AOS.init();
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

return (
    <div className="esse">
        <Image className = "esse_image" src="../image/esse/esse_change_1mg.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="esse_change_1mg" data-aos = "fade-up" data-aos-duration="1000">
        <h2>에쎄체인지 1mg</h2>
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        2013년 6월 5일 출시<br /><br />
        타르 1.0mg<br /><br />
        니코틴 0.10mg<br /><br />
        </div>
        <h3>세계 최초 초슬림 캡슐 담배</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br />
        </div>

        <Image className = "esse_image" src="../image/esse/esse_change_4mg.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="esse_change_4mg" data-aos = "fade-up" data-aos-duration="1000">
        <h2>에쎄체인지 4mg</h2><br />
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        2013년 10월 23일 출시<br /><br />
        타르 4.0mg<br /><br />
        니코틴 0.35mg<br /><br />
        </div>
        <h3>에쎄체인지 1mg에서 더 쎼진 맛</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br />
        </div>

        <Image className = "esse_image" src="../image/esse/esse_change_w.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="esse_change_w" data-aos = "fade-up" data-aos-duration="1000">
        <h2>에쎄체인지 W</h2><br />
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        2014년 4월 2일 출시 / 2016년 2월 리뉴얼<br /><br />
        타르 1.0mg<br /><br />
        니코틴 0.10mg<br /><br />
        </div>
        <h3>달달한 약한 포도맛</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br />
        <br /><br /><br />
        </div>

        <Image className = "esse_image" src="../image/esse/esse_change_up.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="esse_change_up" data-aos = "fade-up" data-aos-duration="1000">
        <h2>에쎄체인지 업</h2><br />
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        2016년 8월 24일 출시<br /><br />
        타르 1.0mg<br /><br />
        니코틴 0.10mg<br /><br />
        </div>
        <h3>과일 맛(포도맛이 느껴지다는 리뷰가 많음)</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br />
        </div>

        <Image className = "esse_image" src="../image/esse/esse_change_himalaya.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="esse_change_himalaya" data-aos = "fade-up" data-aos-duration="1000">
        <h2>에쎄체인지 히말라야</h2><br />
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        2019년 4월 30일 출시<br /><br />
        타르 1.0mg<br /><br />
        니코틴 0.10mg<br /><br />
        </div>
        <h3>체인지 1mg와 비슷한 맛이지만 조금 더 청량감이 있다</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br />
        </div>

        <Image className = "esse_image" src="../image/esse/esse_change_frozen.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="esse_change_frozen" data-aos = "fade-up" data-aos-duration="1000">
        <h2>에쎄체인지 프로즌</h2><br />
        <hr className ='hr_3px'/><br />
        <div className ='body'>
        2020년 5월 20일 출시<br /><br />
        타르 1.0mg<br /><br />
        니코틴 0.10mg<br /><br />
        </div>
        <h3>소다향 + 포도향</h3><br />
        <h3 className ="price_4500">가격 : 4,500원</h3><br /><br  />
        </div>
        
    </div>
);
}

export default Esse;
