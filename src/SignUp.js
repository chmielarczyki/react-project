import React, { useState } from 'react';
import './SignUp.css'; 

import axios from 'axios';

const SignUp = () => {

    const validate = (form) => {
        if(!form.name) {
            return "Name is required !";
        } else if (form.name.lenght <= 4) {
            return "Name is too short !";
        }

        if(!form.email){
            return "Email is required !";
        }

        if(!form.password){
            return "Password is required !";
        } else if (form.password.length < 6) {
            return "Password is too short !";
        } else if (/^[!_%#&$?@*]$/i.test(form.password)) {
            return "Password must contain character !_%#&$?@*";
        }

        if(!form.confirmPassword){
            return "Confirm password is required !";
        } else if (form.confirmPassword.length < 6) {
            return "Confirm password is too short !";
        } else if (/^[!_%#&$?@*]$/i.test(form.confirmPassword)) {
            return "Confirm password must contain character !_%#&$?@*";
        }

        if(form.password !== form.confirmPassword) {
            return "Passwords are not the same !";
        }

        return null
    }

    const [error, setError] = useState('');
    const [form, setForm] = useState({
        name: '',
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

        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

       
        axios.post('https://akademia108.pl/api/social-app/user/signup', form, axiosConfig)
            .then(response => {
                console.log(response);

            })
            .catch(error => {
                console.log(error);
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
                        <label className="" for="name">User Name</label>
                        <input className="input" type="text" name="name" id="name" onChange={updateField} />
                    </div>
                    <div className="sign-email">
                        <label className= "" for="email">Email</label>
                        <input className="input" type="email" name="email" id="email" onChange={updateField} />
                    </div>
                    <div className="sign-password">
                        <label className="" for="password">Password</label>
                        <input className="input" type="password" name="password" id="password" onChange={updateField} />
                    </div>
                    <div className="sign-confirm-password">
                        <label className="" for="confirmPassword">Confirm</label>
                        <input className="input" type="password" name="confirmPassword" id="confirmPassword" onChange={updateField} />
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