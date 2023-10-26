// Login.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setMemberNick } from './redux/actions';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'; // Axios 추가
import MemberO from './MemberO'

import AOS from "aos";
import "aos/dist/aos.css";

import './sub.css';

const defaultTheme = createTheme();

function Login({ setIsLoggedIn }) {
  useEffect(() => {
    AOS.init();
  }, []);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const member_id = formData.get('member_id');
    const password = formData.get('password');

    try {
      const response = await axios.post('http://localhost/dynamic_web/src/login.php', { member_id: member_id, password: password });
      console.log(response.data);
      console.log(response);
      let result = JSON.stringify(response.data);
      console.log(result);
      if (response.data.success) {
        // 로그인 성공 처리
        const member_nick = response.data.member_nick;
        setIsLoggedIn(true);
        console.log('로그인 성공');
        console.log('이름 : '+ member_nick)
        dispatch(setMemberNick(member_nick)); // 디스패치를 사용하여 리액트 리덕스 스토어에 변수를 저장
        navigate('/');
      } else {
        // 로그인 실패 처리
        console.log('로그인 실패');
        window.alert('회원정보가 일치하지 않습니다.');
      }
    } catch (error) {
      // 오류 처리
      console.error('로그인 오류:', error);
    }
  };

  return (
    <div className="login-page" data-aos="fade-up" data-aos-duration="1000">
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'relative',
              justifyContent: "center",
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              로그인
            </Typography>
            <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="member_id"
                label="아이디"
                name="member_id"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="비밀번호"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                로그인
              </Button>
              <Grid container>
                <Grid item xs>
                </Grid>
                <Grid item>
                  <Link to="/register">계정이 없으신가요? 회원가입하기</Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <br /><br /><br /><br /><br /><br />
    </div>
  );
}

export default Login;