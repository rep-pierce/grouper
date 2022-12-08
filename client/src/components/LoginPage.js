import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import LoginCard from './LoginCard';
import NewUserCard from './NewUserCard';

function LoginPage({currentUser, setCurrentUser, login, setLogin}){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState(0)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [display, setDisplay] = useState('login')
    const navigate = useNavigate()
    
    function handleRender(){
        if(display === "login"){
            return <LoginCard username={username} handleUsername={handleUsername} password={password} handlePassword={handlePassword} errors={errors} setErrors={setErrors} currentUser={currentUser} setCurrentUser={setCurrentUser} setLogin={setLogin}/>
        }else if(display === "new"){
            return <NewUserCard firstName={firstName} handleFirstName={handleFirstName} lastName={lastName} handleLastName={handleLastName} age={age} handleAge={handleAge} username={username} handleUsername={handleUsername} password={password} handlePassword={handlePassword} errors={errors} setErrors={setErrors} currentUser={currentUser} setCurrentUser={setCurrentUser} />
        }
    }
    function handleAge(e){
        setAge(e.target.value)
    }
    function handleFirstName(e){
        setFirstName(e.target.value)
    }
    function handleLastName(e){
        setLastName(e.target.value)
    }
    function handleUsername(e){
        setUsername(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleLog(){
        setDisplay('login')
    }
    function handleNew(){
        setDisplay('new')
    }
    function handleHome(){
        navigate('/')
    }

    return(
        <div className='Login-card'>
            <button className='button' onClick={handleNew}>Create New User</button>
            <button className='button' onClick={handleLog}>Login</button>
            {handleRender(display)}
            <button className='button' onClick={handleHome}>Return to Homepage</button>
        </div>
    )
}

export default LoginPage;