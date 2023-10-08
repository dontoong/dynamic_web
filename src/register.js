import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Linked from '@mui/material/Link'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './sub.css';

const defaultTheme = createTheme();

export default function Register() {
  useEffect(() => {
    AOS.init();
  }, []);

  const [isIdValid, setIsIdValid] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(null);
  const [memberId, setMemberId] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false); // "가입하기" 버튼 활성화 상태 변수
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [isAgreementChecked, setIsAgreementChecked] = useState(false); // 이용약관 동의 체크 상태

  useEffect(() => {
    // 필수 필드가 모두 채워져 있고 이용약관에 동의한 경우에만 버튼 활성화
    const isAllFieldsFilled =
      memberId.trim() !== '' &&
      password.trim() !== '' &&
      checkPassword.trim() !== '' &&
      document.getElementById('member_nick').value.trim() !== '' &&
      isIdValid === true;

    setIsButtonEnabled(isAllFieldsFilled && isAgreementChecked);
  }, [memberId, password, checkPassword, isIdValid, isAgreementChecked]);

  const handleCheckDuplicate = async () => {
    const member_id = memberId;

    if (member_id.trim() === '') {
      return;
    }
    try {
      const response = await axios.post('http://localhost/dynamic_web/src/check_user_id.php', { member_id });
      const { isDuplicate } = response.data;

      if (isDuplicate) {
        setIsIdValid(false);
      } else {
        setIsIdValid(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // 비밀번호 확인 필드와 일치 여부를 확인합니다.
    if (checkPassword !== newPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  const handleCheckPasswordChange = (e) => {
    const newCheckPassword = e.target.value;
    setCheckPassword(newCheckPassword);

    // 비밀번호와 일치 여부를 확인합니다.
    if (password !== newCheckPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  const handleSignUp = async () => {
    const member_id = memberId;
    const member_nick = document.getElementById('member_nick').value;

    if (!passwordMatch) {
      return;
    }

    const userData = {
      member_id,
      password,
      member_nick,
    };

    try {
      const response = await axios.post('http://localhost/dynamic_web/src/register.php', userData);
      console.log(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  const handleAgreementChange = (e) => {
    setIsAgreementChecked(e.target.checked);
  };

  return (
    <div className="register-page" data-aos="fade-up" data-aos-duration="1000">
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            p={2}
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              회원 가입
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="member_nick"
                    label="이름"
                    name="member_nick"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    required
                    fullWidth
                    id="member_id"
                    label="아이디"
                    name="member_id"
                    autoComplete="on"
                    error={!isIdValid}
                    onChange={(e) => setMemberId(e.target.value)}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Button className='member_btn'
                    type="button"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleCheckDuplicate}
                  >
                    중복 확인
                  </Button>

                  {isIdValid === false && memberId !== '' && (
                    <Typography variant="caption" color="error">
                      <p className='id_no'>Same ID!</p>
                    </Typography>
                  )}
                  {isIdValid === true && memberId !== '' && (
                    <Typography variant="caption" style={{ color: 'green' }}>
                      <p className='id_yes'>OK!</p>
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="비밀번호"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={handlePasswordChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="checkpassword"
                    label="비밀번호 확인"
                    type="password"
                    id="checkpassword"
                    autoComplete="new-password"
                    error={passwordMatch === false && (
                      <Typography variant="caption" style={{ color: 'red' }}>
                        비밀번호 확인이 일치하지 않습니다.
                      </Typography>)}
                    onChange={handleCheckPasswordChange}
                    helperText={passwordMatch === false && (
                      <Typography variant="caption" style={{ color: 'red' }}>
                        비밀번호 확인이 일치하지 않습니다.
                      </Typography>)}
                  />
                  {passwordMatch === true && (
                    <Typography variant="caption" style={{ color: 'green' }}>
                      비밀번호 확인이 일치합니다.
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        value="allowExtraEmails"
                        color="primary"
                        onChange={handleAgreementChange} // 체크박스 상태 변경 핸들러 추가
                      />
                    }
                    label="이용 약관에 동의합니다"
                  />
                </Grid>
                <Linked className='terms' href="https://www.ftc.go.kr/solution/skin/doc.html?fn=b5bbcffdef4f9e856121b2ba1c0089df8c1dac13565ee8e66ba6d0ab318c011f&rs=/fileupload/data/result/BBSMSTR_000000002320/" variant="body2">
                  이용약관 보기
                </Linked>
              </Grid>
              <Link to="/login">
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSignUp}
                  disabled={!isButtonEnabled} // 필수 필드가 모두 채워져 있을 때만 버튼을 활성화합니다.
                >
                  {isButtonEnabled ? '가입하기' : '이미 계정이 있으신가요? 로그인'}
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      <br /><br /><br /><br /><br /><br />
    </div>
  );
}
