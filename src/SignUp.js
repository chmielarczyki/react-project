import React, { useState } from 'react';
import './SignUp.css'; 

const SignUp = () => {

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
        console.log('form submited', form);
    }
    return (
        <div className='registration' >
            <form className='sign-form' onSubmit={handleSubmit}>
                <div className="content">
                    <legend className="sign-legend">Please Sing Up</legend>
                    <div className="sign-name">
                        <label className="" for="name">User Name</label>
                        <input className="input" type="text" name="name" id="name" onChange={updateField} />
                    </div>
                    <div className="sign-email">
                        <label className="" for="email">Email</label>
                        <input className="input" type="text" name="email" id="email" onChange={updateField} />
                    </div>
                    <div className="sign-password">
                        <label className="" for="password">Password</label>
                        <input className="input" type="password" name="password" id="password" onChange={updateField} />
                    </div>
                    <div className="sign-confirm-password">
                        <label className="" for="password">Confirm</label>
                        <input className="input" type="password" name="confirm-password" id="confirm-password" onChange={updateField} />
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