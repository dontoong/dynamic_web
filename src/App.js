import React, { useState } from 'react';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import { Provider } from 'react-redux';
import store from './redux/store';

import './main.css'

import Header from './Header'
import Member from './Member'
import MemberO from './MemberO'
import Home from './Home'

import Korea_cigar from './korea_cigar'
import Esse from './esse'
import Raison from './raison'
import The_One from './the_one'
import This from './this'

import Abroad_cigar from './abroad_cigar'
import Mevius from './mevius'
import Malbooro from './malbooro'
import Dunhill from './dunhill'

import Elec_cigar from './elec_cigar'
import Miix from './miix'
import Neo from './neo'

import About_me from './about_me'
import Developer from './developer'

import Login from './login'
import Register from './register'

import NotFound from './NotFound'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 저장하는 상태
// 주소 이름 : /Home, 요소 이름 : Home


  return (
<Provider store={store}>
    <BrowserRouter>

          {isLoggedIn ? (<>
        <MemberO setIsLoggedIn={setIsLoggedIn} />
        </>
      ) : (
        <Member setIsLoggedIn={setIsLoggedIn} />
      )}

    <Header isLoggedIn={isLoggedIn} />

    <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/korea_cigar" element={<Korea_cigar />}></Route>
            <Route path="/korea_cigar/esse" element={<Esse />}></Route>
            <Route path="/korea_cigar/raison" element={<Raison />}></Route>
            <Route path="/korea_cigar/the_one" element={<The_One />}></Route>
            <Route path="/korea_cigar/this" element={<This />}></Route>
          <Route path="/abroad_cigar" element={<Abroad_cigar />}></Route>
            <Route path="/abroad_cigar/mevius" element={<Mevius />}></Route>
            <Route path="/abroad_cigar/malbooro" element={<Malbooro />}></Route>
            <Route path="/abroad_cigar/dunhill" element={<Dunhill />}></Route>
          <Route path="/elec_cigar" element={<Elec_cigar />}></Route>
            <Route path="/elec_cigar/miix" element={<Miix />}></Route>
            <Route path="/elec_cigar/neo" element={<Neo />}></Route>
            <Route path="/about_me" element={isLoggedIn ? ( <About_me />) : ( <> {window.alert('로그인이 필요합니다.')} <Navigate to="/login" /> </> ) } />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />}></Route>
          <Route path="/register" element={<Register />}></Route>
          
          <Route path="*" element={<NotFound />}></Route>
          </Routes>

        <Developer />
        </BrowserRouter>
        </Provider>
  );
}

export default App;
