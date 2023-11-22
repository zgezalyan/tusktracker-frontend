import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const apiProtocol = process.env.REACT_APP_API_PROTOCOL;
const apiDomain = process.env.REACT_APP_API_DOMAIN;
const apiPort = process.env.REACT_APP_API_PORT;

const apiEndpoint = `${apiProtocol}://${apiDomain}:${apiPort}`;

function LoginForm({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(
                '${apiEndpoint}/users/login',
                {
                    username,
                    password
                }
            );
            if (response.status == 200) {
                const data = response.data;
                const authToken = data.token;
                Cookies.set('authToken', authToken, { httpOnly: true, secure: true });
            } else {
                const errorData = await response.json();
                const errorMessage = errorData.error;
            }
        } catch (error) {
            console.error('API request error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;