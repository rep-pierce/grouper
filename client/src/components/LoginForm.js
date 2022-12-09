import React, { useState } from 'react';

const LoginForm = ({ errors, setErrors, currentUser, setCurrentUser, navigate }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const loginParams = {
            username: username,
            password: password
        }
        // const user = {
        //     username: formData.username,
        //     password: formData.password,
        //     password_confirmation: formData.passwordConfirmation,
        // }
        fetch(`/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginParams)
        })
            .then(res => {
                if(res.ok) {
                    res.json().then(setCurrentUser)
                } else {
                    res.json().then( e => setErrors(Object.entries(e.error).flat()))
                }
            })
            .then(navigate('/home'));

            
    }

    return (
        <div className='login-form-div'>
            <form className='login-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => handleUsernameChange(e)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="pass" name="password" value={password} onChange={(e) => handlePasswordChange(e)} />
                </div>
                <div>
                    <button className='button' type="submit" value="Login" /*onClick={() => setLogin(true)}*/>
                    Login
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;