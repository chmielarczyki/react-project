import React, {useState} from 'react';
import './Login.css';

import axios from 'axios';

const Login = () => {
  
    const [loginForm, setLoginForm] = useState({
        username: '',
        password: '',
        ttl: ''
    });


    const updateLoginForm = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value,
        });
    }

    const loginChange = (e) => {
        e.preventDefault();
        console.log(loginForm);

        let reqLoginForm = {
            username: loginForm.username,
            password: loginForm.password,
            ttl: 3600
        };

       
        const headers =  {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('jwt_token')
        };
       
               
        axios.post('https://akademia108.pl/api/social-app/user/login', reqLoginForm,
        { 'headers': headers })
            .then((res) => {

                localStorage.setItem('username', res.data.username );
                localStorage.setItem('password', res.data.password)
                localStorage.setItem('jwt_token', res.data.jwt_token);
    
                console.log(res);

            })
            .catch(error => {
                console.log(error);
            })

        setLoginForm({
            username: '',
            password: '',
            ttl: ''
        })
    }

    return (
        <div className="log-content">
            <form onSubmit={loginChange} >
                <legend className="log-legend">Login</legend>
                    <div>
                        <label className="" htmlFor="username">User Name</label>
                        <input className="input" type="text" name="username" id="name" onChange={updateLoginForm} value={loginForm.username} />
                    </div>
                    <div className="log-password">
                        <label className="" htmlFor="password">Password</label>
                        <input className="input" type="password" name="password" id="password" onChange={updateLoginForm} value={loginForm.password} />
                    </div>
                    <div className="">
                        <input className="log-input" type="submit" value="Login" />
                    </div>
            </form>
        </div>
    );
}

export default Login;