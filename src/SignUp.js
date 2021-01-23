import React, { useState } from 'react';
import './SignUp.css'; 

import axios from 'axios';

const SignUp = () => {

    const passwordRegex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g;

    const validate = (form) => {
        if(!form.username) {
            return "Name is required !";
        } else if (form.username.lenght <= 4) {
            return "Name is too short !";
        }

        if(!form.email){
            return "Email is required !";
        }

        if(!form.password){
            return "Password is required !";
        } else if (form.password.length < 6) {
            return "Password is too short !";
        } else if (!passwordRegex.test(form.password)) {
            return "Password must contain character !_%#&$?@*";
        }

        if(!form.confirmPassword){
            return "Confirm password is required !";
        } else if (form.confirmPassword.length < 6) {
            return "Confirm password is too short !";
        } else if (passwordRegex.test(form.confirmPassword)) {
            return "Confirm password must contain character !_%#&$?@*";
        }

        if(form.password !== form.confirmPassword) {
            return "Passwords are not the same !";
        }

        return null
    }

    const [error, setError] = useState('');
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });


    const updateField = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const errorMsg = validate(form);

        if(errorMsg) {
            setError(errorMsg);
            console.log('blad');
            return
        }

        console.log('test');

        // let axiosConfig = {
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     }
        // };

        // let reqForm = {
        //     username: form.username,
        //     password: form.password,
        //     email: form.email
        // }

    
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        let newUser = {
            username: form.username,
            password: form.password,
            email: form.email
        }

        axios.post(
            'http://akademia108.pl/api/social-app/user/signup', 
            JSON.stringify(newUser),
            { 'headers': headers })
            .then((req) => {
            console.log(req);  

            })
            .catch((error) => {

            console.error(error);
        })
       
        // axios.post('https://akademia108.pl/api/social-app/user/signup', reqForm, axiosConfig)
        //     .then(response => {
        //         console.log(response);

        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })

        setForm({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    }


    return (
        <div className="registration" >
            <div className="header-error">
                 <h2>{error}</h2>
            </div>
            <form className="sign-form" onSubmit={handleSubmit}>
                <div className="content">
                    <legend className="sign-legend">Please Sing Up</legend>
                    <div className="sign-name">
                        <label className="" htmlFor="name">User Name</label>
                        <input className="input" type="text" name="username" id="name" onChange={updateField} value={form.username} />
                    </div>
                    <div className="sign-email">
                        <label className= "" htmlFor="email">Email</label>
                        <input className="input" type="email" name="email" id="email" onChange={updateField} value={form.email} />
                    </div>
                    <div className="sign-password">
                        <label className="" htmlFor="password">Password</label>
                        <input className="input" type="text" name="password" id="password" onChange={updateField} value={form.password} />
                    </div>
                    <div className="sign-confirm-password">
                        <label className="" htmlFor="confirmPassword">Confirm</label>
                        <input className="input" type="text" name="confirmPassword" id="confirmPassword" onChange={updateField} value={form.confirmPassword} />
                    </div>
                    <div className="">
                        <input className="sign-input" type="submit" value="Sign Up" />
                    </div>
                </div>

            </form>
        </div>
    )
}

export default SignUp;