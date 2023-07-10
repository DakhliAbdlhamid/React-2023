import React, { useState } from 'react';
import '../App.css';

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [comfirm_password, setConfirmPassword] = useState("");
   
    const [emailError, setEmailError] = useState(false);
    const [firstnameError, setFirstnameError] = useState(false);
    const [lastnameError, setLastnameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirnPasswordError, setConfirmPasswordError] = useState(false);
    
    const validateFirstName = (e) => {
        setFirstname(e.target.value)
        if(e.target.value.length < 2){
            setFirstnameError(true)}
            else {
                setFirstnameError(false);
            }
        }

        const validateLastName = (e) => {
            setLastname(e.target.value)
            if(e.target.value.length < 2){
                setLastnameError(true)}
                else {
                    setLastnameError(false);
                }
            }

        const validateEmail = (e) => {
            setEmail(e.target.value)
            if(e.target.value.length < 5){
                setEmailError('that ifeld must be at least 5 caracters')}
                else {
                    setEmailError('');
                }
            }

        const validatePassword = (e) => {
            setPassword(e.target.value)
            if(e.target.value.length < 8){
                setPasswordError(true)} 
                else {
                    setPasswordError('');
                }
            }

        const validateConfirmPassword = (e) => {
            setConfirmPassword(e.target.value);
            if (e.target.value !== password) {
                setConfirmPasswordError(true);
            } else {
                setConfirmPasswordError('');
            }
        };

    return (
        <div className="form-container">
            <form>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) => {validateFirstName(e)}}/> {firstnameError ? <p>that ifeld must be at least 2 caracters</p> : "" }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) =>  {validateLastName(e)}} /> {lastnameError ? <p>that ifeld must be at least 2 caracters</p> : "" }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => {validateEmail(e)}} /> {emailError ? <p>that ifeld must be at least 5 caracters</p> : "" }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => {validatePassword(e)}} /> {passwordError ? <p>that ifeld must be at least 8 caracters</p> : "" }
                </div>
                <div>
                    <label>Comfirm Password: </label>
                    <input type="password" onChange={(e) => {validateConfirmPassword(e)}} /> {confirnPasswordError ? <p>passwords do not mach</p> : "" }
                </div>
            </form>
            <h2>Form Data:</h2>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email : {email}</p>
            <p>Password: {password}</p>
            <p>Comfirm Password: {comfirm_password}</p>
        </div>
    );
};

export default UserForm;