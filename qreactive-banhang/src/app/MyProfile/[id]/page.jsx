"use client";
import React, { useState } from "react";
import MyProfile from './MyProfile.module.css';
import './Error.css';


function MyProfileContent() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        dob: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        dob: "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            dob: "",
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
        };

    

        // Validate old password
        if (formData.oldPassword.trim() === "") {
            newErrors.oldPassword = "Old password is required";
            valid = false;
        }

        // Validate new password
        if (formData.newPassword.trim() === "") {
            newErrors.newPassword = "New password is required";
            valid = false;
        }

        // Validate confirm password
        if (formData.confirmPassword.trim() === "") {
            newErrors.confirmPassword = "Confirm password is required";
            valid = false;
        } else if (formData.newPassword !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
            valid = false;
        }

        // Validate first name
        if (formData.firstName.trim() === "") {
            newErrors.firstName = "First name is required";
            valid = false;
        }

        // Validate last name
        if (formData.lastName.trim() === "") {
            newErrors.lastName = "Last name is required";
            valid = false;
        }

        // Validate email
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Invalid email address";
            valid = false;
        }

        // Validate phone number
        if (!/^\d{10}$/.test(formData.phoneNumber)) {
            newErrors.phoneNumber = "Invalid phone number";
            valid = false;
        }

        // Validate date of birth
        if (formData.dob === "") {
            newErrors.dob = "Invalid date of birth";
            valid = false;
        }

        setErrors(newErrors);

        if (valid) {
            // Your save logic here
            console.log("Form is valid. Saving...");
        } else {
            console.log("Form is invalid. Please correct errors.");
        }
    };


 
    return (
        <div>
        <div className={MyProfile.container}>
            <div className={MyProfile.header}>
                <h2>Profile</h2>
            </div>
        </div>  
            
        <div className={MyProfile.belowDiv}>
            <div className={MyProfile.inputBox}>
                <h2>General information</h2>
            </div>
            <div className={MyProfile.inputContainer}>
                <div className={MyProfile.inputBox}>
                <input type="text" id="firstName" name="firstName" required onChange={handleInputChange} />
                <span>First Name</span>
                <div className='error-message'>{errors.firstName}</div>
                </div>

                <div className={MyProfile.inputBox}>
                <input type="text" id="lastName" name="lastName" required onChange={handleInputChange} />
                <span>Last Name</span>
                <div className='error-message'>{errors.lastName}</div>
                </div>

                <div className={MyProfile.inputBox}>   
                <input type="text" id="email" name="email" required onChange={handleInputChange} />
                <span>Email</span>
                <div className='error-message'>{errors.email}</div>
                </div>

                <div className={MyProfile.inputBox}>
                <input type="tel" id="phoneNumber" name="phoneNumber"  required onChange={handleInputChange} />
                <span>Phone Number</span>
                <div className='error-message'>{errors.phoneNumber}</div>
                </div>
                
                <div className={MyProfile.inputBox}>
                <input type="date" id="dob" name="dob"  required onChange={handleInputChange} />
                <label >Date of Birth</label>
                <div className='error-message'>{errors.dob}</div>
                </div>
                
                <div className={MyProfile.inputBox}>
                <button type="button" onClick={validateForm}>Save</button>
                </div>
         </div>
            
        </div>

        <div className={MyProfile.belowDiv}>
        <div className={MyProfile.inputBox}>
            <h2>Change Password</h2>
        </div>
        <div className={MyProfile.inputContainer}>
        <div className={MyProfile.inputBox2}>
        <input type="password" id="oldPassword" name="oldPassword" required onChange={handleInputChange} value={formData.oldPassword} />
        <span>Old Password</span>
        <div className='error-message'>{errors.oldPassword}</div>
        </div>

        <div className={MyProfile.inputBox2}>
        <input type="password" id="newPassword" name="newPassword" required onChange={handleInputChange} value={formData.newPassword}/>
        <span>New Password</span>
        <div className='error-message'>{errors.newPassword}</div>
        </div>
        
        <div className={MyProfile.inputBox}>
                <button type="button" onClick={validateForm}>Save</button>
                </div>
        </div>
        </div>
    </div>
    
    );  
}

export default MyProfileContent;