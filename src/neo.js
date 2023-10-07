import React, { useEffect } from 'react';
import Image from 'react-bootstrap/Image';

import AOS from "aos";
import "aos/dist/aos.css";

import Carousel from 'react-bootstrap/Carousel';

import './sub.css'

function Neo(props) {
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
    <Image src ="../image/neo/glo_hyperx2.jpg" />
    <br /><br /><br /><br /><br /><br />
    <Carousel.Caption>
      <h2>GLO HYPER X2</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <Image src ="../image/neo/glo_proslim.jpg" />
  <br /><br /><br /><br /><br /><br />
    <Carousel.Caption>
      <h2>GLO PRO SLIM</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
</div>
    <div className="neo">
        <Image className = "neo_image" src="../image/neo/neo_maxboost.jpg" data-aos = "fade-up" data-aos-duration="1500" />
        <div className ="neo_maxboost" data-aos = "fade-up" data-aos-duration="1500">
        <h2>네오 맥스 부스트</h2>
        <hr className ='hr_3px'/><br />
        <h3>강한 멘솔향, 캡슐형</h3><br />
        <h3 className ="price_4500">가격 : 4,500원<br /><br /><br /><br /><br /><br /></h3><br /><br />
        <br /><br /><br />
        </div>

        <Image className = "neo_image" src="../image/neo/neo_purpleboost.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="neo_purpleboost" data-aos = "fade-up" data-aos-duration="1000">
        <h2>네오 퍼플 부스트</h2><br />
        <hr className ='hr_3px'/><br />
        <h3>포도향, 캡슐형</h3><br />
        <h3 className ="price_4500">가격 : 4,500원<br /><br /><br /><br /><br /><br /></h3><br /><br />
        <br /><br /><br />
        </div>

        <Image className = "neo_image" src="../image/neo/neo_icetropicdouble.jpg" data-aos = "fade-up" data-aos-duration="1000" />
        <div className ="neo_icetropicdouble" data-aos = "fade-up" data-aos-duration="1000">
        <h2>네오 아이스트로픽 더블</h2><br />
        <hr className ='hr_3px'/><br />
        <h3>박하맛 + 메론맛, 오래가는 타격감, 캡슐형</h3><br />
        <h3 className ="price_4500">가격 : 4,500원<br /><br /><br /><br /><br /><br /></h3><br /><br />
        <br /><br /><br />
        </div>
        <br /><br /><br /><br /><br /><br />
    </div>
    </div>
);
}

export default Neo;
