import React from 'react';

const NewUserForm = ({ formData, handleChange, errors, setErrors, currentUser, setCurrentUser}) => {
    
    function handleSubmit(e){
        e.preventDefault();
        const user = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            age: formData.age,
            username: formData.username,
            password: formData.password,
            password_confirmation: formData.passwordConfirmation
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
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={(e)=> handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={(e)=> handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="integer" name="age" value={formData.age} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value={formData.password} onChange={(e)=> handleChange(e)} />
                </div>
                <div>
                    <label htmlFor="password_confirmation">Confirm Password:</label>
                    <input type="password" id="password_confirmation" name="passwordConfirmation" value={formData.passwordConfirmation} onChange={(e) => handleChange(e)} />
                </div>
                <div>
                    <input className='button' type="submit" />
                </div>
            </form>
            {/* {errors?errors.map(e => console.log(e)) : null} */}
        </div>
        )
}

export default NewUserForm;