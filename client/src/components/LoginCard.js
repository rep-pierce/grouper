import React from 'react';

function LoginCard ({username, handleUsername, password, handlePassword, errors, setErrors, currentUser, setCurrentUser, setLogin}) {

    function handleSubmit(e) {
        e.preventDefault()
        const user = {
            username: username,
            password: password
        }
        fetch(`/users`,{
            method: "POST",
            headers:{'Content-Type':'application/json',
        },
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(setCurrentUser)
            }
        })
    }
    
    return(
    <div className='Login-card-div'>
        <form className='Login-card-form'onSubmit={handleSubmit}>
            <div>
                <label>Username:</label>
                <input type="text" name="username" value={username} onChange={(e)=> handleUsername(e)} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" name="pass" value={password} onChange={(e)=> handlePassword(e)} />
            </div>
            <div>
                <input className='button' type="submit" value="Login" onClick={()=> setLogin(true)}/>
            </div>
        </form>
        
        
    </div>
    )
}

export default LoginCard;