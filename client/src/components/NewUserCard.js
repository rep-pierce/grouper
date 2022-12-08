import React from 'react';

function NewUserCard ({firstName, lastName, age, username, password, handleFirstName, handleLastName, handleAge, handleUsername, handlePassword, errors, setErrors, currentUser, setCurrentUser}) {
    
    function handleSubmit(e){
        e.preventDefault();
        const user = {
            first_name: firstName,
            last_name: lastName,
            age: age,
            username: username,
            password: password
        }
        fetch(`/users`,{
            method: "POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(setCurrentUser)
            } else {
                res.json().then( e => setErrors(Object.entries(e.error).flat()))
            }
        })
        
    }
    
    

    return(
        <div className="New-user-card">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={firstName} onChange={(e)=> handleFirstName(e)} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={lastName} onChange={(e)=> handleLastName(e)} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="integer" name="age" value={age} onChange={(e) => handleAge(e)} />
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={username} onChange={(e) => handleUsername(e)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="pass" value={password} onChange={(e)=> handlePassword(e)} />
                </div>
                <div>
                    <input className='button' type="submit" />
                </div>
            </form>
            {/* {errors?errors.map(e => console.log(e)) : null} */}
        </div>
        )
}

export default NewUserCard;