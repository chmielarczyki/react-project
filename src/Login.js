import React, {useState} from 'react';
import './Login.css';

import axios from 'axios';

const Login = () => {
  
    const [loginForm, setLoginForm] = useState({
        name: '',
        password: '',
        ttl: ''
    });

    const updateLoginForm = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value,
        })
    }

    const loginChange = (e) => {
        e.preventDefault();
        console.log(loginForm);

               
        axios.post('https://akademia108.pl/api/social-app/user/login', loginForm)
            .then(response => {
                console.log(response);

            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="log-content">
            <form onSubmit={loginChange} >
                <legend className="log-legend">Log In</legend>
                    <div>
                        <label className="" for="name">User Name</label>
                        <input className="input" type="text" name="name" id="name" onChange={updateLoginForm} />
                    </div>
                    <div className="log-password">
                        <label className="" for="password">Password</label>
                        <input className="input" type="password" name="password" id="password" onChange={updateLoginForm} />
                    </div>
                    <div className="">
                        <input className="log-input" type="submit" value="Sign Up" />
                    </div>
            </form>
        </div>
    );
}

export default Login;