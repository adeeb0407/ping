import React from 'react'
import './styles/login.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import 'firebase/app';
import { firebaseApp } from '../firebase'
import firebase from 'firebase/app';
import loginImage from './images/img-01.png'
import login from './images/ping.png'
import Footer from './Footer'

function Login() {
    return (
        <div>
        
	<div class="limiter">
		<div class="container-login100">
			<div class="wrap-login100">
			
				<div class="login100-pic js-tilt" data-tilt>
				<img src={login} alt="logo" height = '55vh'/>
				<span id='logoHeading'>PING</span>
					<img src={loginImage} alt="IMG" />
				</div>

				<form class="login100-form validate-form">
					<span class="login100-form-title">
						Member Login
					</span>
                    <button className="login-with-google-btn" onClick = {(e) => { e.preventDefault()
                    firebaseApp.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}}>Sign Up with Google</button>
					<div class="text-center p-t-136">
					<br />
					<br />
					<br />
					<br />
					<span class="login100-form-title" style = {{fontSize : '20px'}}>
						"Most people are nice and just want to have a chat."
						<br />
						<br />
						-Ben Nicholas
					</span>
					</div>
				</form>
			</div>
		</div>
	</div>
	<Footer />
			{/* <button onClick = {() => firebaseApp.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}>Sign Up with Facebook</button> */}
        </div>
    )
}

export default Login
