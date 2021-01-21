import React from 'react';
import './SignUp.css'; 

const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className='registration'>
            <form className='sign-form'>
                <div className="content">
                    <legend className="sign-legend">Please Sing Up</legend>
                    <div className="sign-name">
                        <label className="" for="name ">User Name</label>
                        <input className="input" type="text" name="name" id="name" />
                    </div>
                    <div className="sign-email">
                        <label className="" for="email">Email</label>
                        <input className="input" type="text" name="email" id="email" />
                    </div>
                    <div className="sign-password">
                        <label className="" for="password">Password</label>
                        <input className="input" type="text" name="password" id="password" />
                    </div>
                    <div className="sign-confirm-password">
                        <label className="" for="password">Confirm</label>
                        <input className="input" type="text" name="password" id="password" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp;