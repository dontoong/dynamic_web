import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import AOS from "aos";
import "aos/dist/aos.css";

function Korea_cigar(props) {
useEffect(() => {
    AOS.init();
}, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행

return (
    <div className='card-align' data-aos="fade-up" data-aos-duration="1000">

        <Card style={{ width: '27.2rem' }}>
            <Card.Img className="card-img" variant="top" src="/image/esse/esse.jpg" />
            <Card.Body>
                <Card.Title>ESSE</Card.Title>
                <Card.Text>
                    세계 최초 초슬림형 담배.<br></br><br></br>
                </Card.Text>
                <Link to ='/korea_cigar/esse'>
                <Button className="card-btn" variant="primary">더 보러 가기</Button>
                </Link>
            </Card.Body>
        </Card>

        <Card style={{ width: '27.2rem' }}>
            <Card.Img className="card-img" variant="top" src="/image/raison/raison.jpg" />
            <Card.Body>
                <Card.Title>RAISON</Card.Title>
                <Card.Text>
                    다른 담배에 비해 독하거나 비린 냄새가 덜한 담배.<br></br><br></br>
                </Card.Text>
                <Link to ='/korea_cigar/raison'>
                <Button className="card-btn" variant="primary">더 보러 가기</Button>
                </Link>
            </Card.Body>
        </Card>

        <Card style={{ width: '27.2rem' }}>
            <Card.Img className="card-img" variant="top" src="/image/the_one/the_one.jpg" />
            <Card.Body>
                <Card.Title>THE ONE</Card.Title>
                <Card.Text>
                    저타르의 담배를 원한다면.<br></br><br></br>
                </Card.Text>
                <Link to ='/korea_cigar/the_one'>
                <Button className="card-btn" variant="primary">더 보러 가기</Button>
                </Link>
            </Card.Body>
        </Card>

        <Card style={{ width: '27.2rem' }}>
            <Card.Img className="card-img" variant="top" src="/image/this/this.jpg" />
            <Card.Body>
                <Card.Title>THIS</Card.Title>
                <Card.Text>
                    강하고 비린 맛의 담배가 당길때.<br></br><br></br>
                </Card.Text>
                <Link to ='/korea_cigar/this'>
                <Button className="card-btn" variant="primary">더 보러 가기</Button>
                </Link>
            </Card.Body>
        </Card>

    </div>
);
}

export default Korea_cigar;
