import React, { useState } from "react";
import LoginForm from './LoginForm';
import NewUserForm from './NewUserForm';
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { displayStateAtom } from "../recoil/atoms";

const LoginPage = ({ currentUser, setCurrentUser }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        username: '',
        password: '',
        passwordConfirmation: ''
    })
    // const [errors, setErrors] = useState([])
    const [display, setDisplay] = useRecoilState(displayStateAtom);
    const navigate = useNavigate()

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData((formData) => ({
            ...formData,
            [name] : value
        }));
    }

    const handleLog = () => {
        setDisplay('login')
    }
    const handleNew = () => {
        setDisplay('new')
    }
    const handleHome = () => {
        navigate('/home')
    }

    const handleRender = () => {
        if (display === "login") {
            return <LoginForm
                // errors={errors}
                // setErrors={setErrors}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                // login={login}
                // setLogin={setLogin}
                navigate={navigate}
                />
        } else if (display === "new") {
            return <NewUserForm
                handleChange={handleChange}
                formData={formData}
                setFormData={setFormData}
                // errors={errors}
                // setErrors={setErrors}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser} 
                navigate={navigate}
                />
        }
    }


    return (
        <div className='Login-card'>
            <button className='button' onClick={handleNew}>Create New User</button>
            <button className='button' onClick={handleLog}>Login to Your Account</button>
            {handleRender(display)}
            <button className='button' onClick={handleHome}>Return to Homepage</button>
        </div>
    )
}

export default LoginPage;