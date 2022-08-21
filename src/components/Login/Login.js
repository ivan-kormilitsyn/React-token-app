import React, { useState } from "react";
import PropTypes from 'prop-types';
import './Login.css'

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
    
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser ({
            username,
            password
        });
        setToken(token);
    }

    return (
        
        <div className="authorization-page">
            <div className="auth-form">
                <div className="auth-form-child">
                    {/* <h1>Please Log In</h1> */}
                        <form onSubmit={handleSubmit} className='auth-form-wrapper'>
                            <label>
                                <p>E-mail:</p>
                                <input className="inp" type="email" onChange={e => setUserName(e.target.value)} placeholder="login" autocomplete="off" minLength="8"/>
                            </label>
                            <label>
                                <p>Password:</p>
                                <input className="inp" type="password" onChange={e => setPassword(e.target.value)} placeholder="password" minLength="8" />
                            </label>
                                <div>
                                    <button className="btn" type="submit">Login</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}