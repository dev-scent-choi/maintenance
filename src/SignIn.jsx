import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import Home from './components/Home.tsx';


function Copyright(props) {
	return (
		<Typography
			variant='body2'
			color='text.secondary'
			align='center'
			{...props}
		>
			{'Copyright © '}
			<Link color='inherit' href='http://openminds.co.kr:8040/pc/index.do'>
				OpenMinds
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const defaultTheme = createTheme();

export default function SignIn() {
	const [userId, setUserId] = useState('choihj');
	const [userPw, setUserPw] = useState('choihj');
	const [loginError, setLoginError] = useState(null);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = async (e) => {
		try {
		  e.preventDefault();
		  const res = await axios.post('http://localhost:3001/login', { userId, userPw });
		  debugger;
		  if (res.data.success) {
			setIsLoggedIn(true);
			console.log(1);
		  } else {
			
			console.log(2);
			setLoginError(res.data.message);
		  }
		} catch (err) {
		  console.error(err);
		  debugger;
		  setLoginError('오류가 발생하였습니다. 관리자에게 문의해주세요.');
		}
	  };

	if (isLoggedIn) {
	return <Home />;
	}

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component='main' maxWidth='xs'>
				<CssBaseline />
				<Box
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
					<Typography component='h1' variant='h5'>
						OpenMinds Maintenance
					</Typography>
					<Box
						component='form'
						onSubmit={handleLogin}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin='normal'
							required
							fullWidth
							id='userId'
							label='아이디'
							name='userId'
							autoFocus
							value={userId}
							onChange={(e) => setUserId(e.target.value)}
						/>
						<TextField
							margin='normal'
							required
							fullWidth
							name='userPw'
							label='비밀번호'
							type='password'
							id='userPw'
							value={userPw}
							onChange={(e) => setUserPw(e.target.value)}
						/>
						{loginError && <div style={{ color: 'red' }}>{loginError}</div>}
						<FormControlLabel
							control={<Checkbox value='remember' color='primary' />}
							label='로그인 상태 유지'
						/>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
							disabled={!userId || !userPw}
						>
							로그인
						</Button>
					</Box>
				</Box>
				<Copyright sx={{ mt: 8, mb: 4 }} />
			</Container>
		</ThemeProvider>
	);
}

