import React, { useState, useEffect} from 'react';
import './Home.css';

import axios from 'axios';

const Home = () => {

    const [user, setUser] = useState({
        username: '',
        jwt_token: ''
    });

    useEffect(() => {
        getUser()
    })

    const getUser = () => {

        const axiosConfig = {
            'headers': {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt_token')
            }
        };

        axios.get('http://localhost:3000/', axiosConfig)
            .then((res) => {
               
                const newUser = res.data ;

                console.log(newUser);

                setUser(() => {
                   return newUser 
                });

                // console.log(res);
            }).catch ((error) => {
                console.error(error);
            })
    }

         
    return (
        <div className='post'>
            {/* {user} ? <h2>Hi {user.username}</h2> : */}
            <h1>You are not logged in</h1>
            <textarea name='your-post' placeholder='Your Post'></textarea>

        </div>
    )

}

export default Home;