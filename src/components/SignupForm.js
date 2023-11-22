import React, { useState } from 'react';

function SignupForm({ onSignup }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform API request to signup
        // If successful, call onSignup()
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

export default SignupForm;