import React, { useEffect } from 'react';

import Image from 'react-bootstrap/Image';

import AOS from "aos";
import "aos/dist/aos.css";

import Carousel from 'react-bootstrap/Carousel';

import './sub.css'

function Miix(props) {
    useEffect(() => {
        AOS.init();
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

return (
    <div>
        <div className="추천기기">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;추천기기</div>
    <div className="text-center">    
    <Carousel data-aos = "fade-up" data-aos-duration="1500">
      <Carousel.Item>
        <Image src ="../image/miix/lil_hybrid3.0.jpg" />
        <br /><br /><br /><br /><br /><br />
        <Carousel.Caption>
          <h2>릴 하이브리드 3.0</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src ="../image/miix/lil_hybrid2.0.jpg" />
      <br /><br /><br /><br /><br /><br />
        <Carousel.Caption>
          <h2>릴 하이브리드 2.0</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src ="../image/miix/lil_hybridez.jpg" />
      <br /><br /><br /><br /><br /><br />
        <Carousel.Caption>
          <h2>릴 하이브리드 EZ</h2>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
    <div className="miix">
        <Image className = "miix_image" src="../image/miix/miix_mix.jpg" data-aos = "fade-up" data-aos-duration="1500" />
        <div className ="miix_mix" data-aos = "fade-up" data-aos-duration="1500">
        <h2>믹스 믹스</h2>
        <hr className ='hr_3px'/><br />
        <h3>딸기맛, 특유의 과일향이 나는 필터, 캡슐형</h3><br />
        <h3 className ="price_4500">가격 : 4,500원<br /><br /><br /><br /><br /><br /></h3><br /><br />
        </div>

        <Image className = "miix_image" src="../image/miix/miix_combo.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="miix_combo" data-aos = "fade-up" data-aos-duration="1000">
        <h2>믹스 콤보</h2><br />
        <hr className ='hr_3px'/><br />
        <h3>굉장히 시원한 향 + 레몬맛, 캡슐형</h3><br />
        <h3 className ="price_4500">가격 : 4,500원<br /><br /><br /><br /><br /><br /></h3><br /><br />
        </div>

        <Image className = "miix_image" src="../image/miix/miix_ice.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="miix_ice" data-aos = "fade-up" data-aos-duration="1000">
        <h2>믹스 아이스</h2><br />
        <hr className ='hr_3px'/><br />
        <h3>시원한 풍선껌 향 + 풍선껌맛</h3><br />
        <h3 className ="price_4500">가격 : 4,500원<br /><br /><br /><br /><br /><br /></h3><br /><br />
        <br /><br /><br />
        </div>

        <Image className = "miix_image" src="../image/miix/miix_icedouble.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="miix_icedouble" data-aos = "fade-up" data-aos-duration="1000">
        <h2>믹스 아이스 더블</h2><br />
        <hr className ='hr_3px'/><br />

        <h3>시원한 풍선껌 향 + 풍선껌맛, 캡슐형</h3><br />
        <h3 className ="price_4500">가격 : 4,500원<br /><br /><br /><br /><br /><br /></h3><br /><br />
        </div>

        <Image className = "miix_image" src="../image/miix/miix_icebang.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="miix_icebang" data-aos = "fade-up" data-aos-duration="1000">
        <h2>믹스 아이스 뱅</h2><br />
        <hr className ='hr_3px'/><br />

        <h3>시원한 향 + 단맛, 캡슐형</h3><br />
        <h3 className ="price_4500">가격 : 4,500원<br /><br /><br /><br /><br /><br /></h3><br /><br />
        </div>

        <Image className = "miix_image" src="../image/miix/miix_french.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="miix_french" data-aos = "fade-up" data-aos-duration="1000">
        <h2>믹스 프렌치</h2><br />
        <hr className ='hr_3px'/><br />

        <h3>시나몬 향 + 포도맛, 캡슐형</h3><br />
        <h3 className ="price_4500">가격 : 4,500원<br /><br /><br /><br /><br /><br /></h3><br /><br  />
        </div>
        
    </div>
    </div>
);
}

export default Miix;
