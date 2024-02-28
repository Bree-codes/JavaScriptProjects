// SignUp.js
import React, { useState } from 'react';

const SignUp = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle the sign-up logic (e.g., sending data to the server)
        console.log('Sign Up submitted:', { usernameOrEmail, password, phoneNumber });
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username or Email"
                    value={usernameOrEmail}
                    onChange={(e) => setUsernameOrEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
