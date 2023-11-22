import React, { useState } from 'react';
import Logo from './Logo';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
    const [isAuthorized, setIsAuthorized] = useState(false);

    const handleLogin = () => {
        // Perform login logic here
        setIsAuthorized(true);
    };

    const handleSignup = () => {
        // Perform signup logic here
        setIsAuthorized(true);
    };

    const handleLogout = () => {
        // Perform logout logic here
        setIsAuthorized(false);
    };

    return (
        <div>
            <Logo />

            {isAuthorized ? (
                <>
                    <TaskList />
                    <TaskForm />
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    <LoginForm onLogin={handleLogin} />
                    <SignupForm onSignup={handleSignup} />
                </>
            )}
        </div>
    );
}

export default App;
