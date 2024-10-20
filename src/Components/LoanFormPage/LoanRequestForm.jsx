import React, { useState } from 'react';
import './LoanRequestForm.css';
import logo from '../../assets/logo.svg';
import 'animate.css';


const LoanRequestForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        loanPurpose: '',
        phone: '',
        nin: '',
        bvn: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let formErrors = {};

        // Full Name validation
        if (!formData.fullName.trim()) {
            formErrors.fullName = "Full Name is required.";
        }

        // Email validation
        if (!formData.email) {
            formErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = "Email is invalid.";
        }

        // Password validation
        if (!formData.password) {
            formErrors.password = "Password is required.";
        } else if (formData.password.length < 6) {
            formErrors.password = "Password must be at least 6 characters.";
        }

        // Confirm Password validation
        if (!formData.confirmPassword) {
            formErrors.confirmPassword = "Please confirm your password.";
        } else if (formData.confirmPassword !== formData.password) {
            formErrors.confirmPassword = "Passwords do not match.";
        }

        // Loan Purpose validation
        if (!formData.loanPurpose.trim()) {
            formErrors.loanPurpose = "Loan purpose is required.";
        }

        // Phone Number validation
        if (!formData.phone) {
            formErrors.phone = "Phone number is required.";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            formErrors.phone = "Phone number must be 10 digits.";
        }

        // NIN validation
        if (!formData.nin) {
            formErrors.nin = "NIN is required.";
        } else if (!/^\d{11}$/.test(formData.nin)) {
            formErrors.nin = "NIN must be 11 digits.";
        }

        // BVN validation
        if (!formData.bvn) {
            formErrors.bvn = "BVN is required.";
        } else if (!/^\d{11}$/.test(formData.bvn)) {
            formErrors.bvn = "BVN must be 11 digits.";
        }

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Loan request submitted successfully:", formData);
            setIsSubmitted(true);
        } else {
            console.log("Form has errors, please fix them.");
        }
    };

    return (
        <>
            {!isSubmitted ? (
                <div className="form-container">
                      <div className="logo-form">
                        <img src={logo} alt="logo" className="animate__animated animate__rotateIn" />
                        <h2 className="animate__animated animate__rotateIn">First Multiple</h2>
                    </div>
                    <h2>Loan Request Form</h2>
                    <form onSubmit={handleSubmit} noValidate>
                        <div>
                            <label>Full Name:</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                            {errors.fullName && <p className="error">{errors.fullName}</p>}
                        </div>
                        
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <p className="error">{errors.email}</p>}
                        </div>

                        <div>
                            <label>Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            {errors.password && <p className="error">{errors.password}</p>}
                        </div>

                        <div>
                            <label>Confirm Password:</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                        </div>

                        <div>
                            <label>Loan Purpose:</label>
                            <input
                                type="text"
                                name="loanPurpose"
                                value={formData.loanPurpose}
                                onChange={handleChange}
                                required
                            />
                            {errors.loanPurpose && <p className="error">{errors.loanPurpose}</p>}
                        </div>

                        <div>
                            <label>Phone Number:</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            {errors.phone && <p className="error">{errors.phone}</p>}
                        </div>

                        <div>
                            <label>NIN:</label>
                            <input
                                type="text"
                                name="nin"
                                value={formData.nin}
                                onChange={handleChange}
                                required
                            />
                            {errors.nin && <p className="error">{errors.nin}</p>}
                        </div>

                        <div>
                            <label>BVN:</label>
                            <input
                                type="text"
                                name="bvn"
                                value={formData.bvn}
                                onChange={handleChange}
                                required
                            />
                            {errors.bvn && <p className="error">{errors.bvn}</p>}
                        </div>

                        <button type="submit" className="form-btn">Submit</button>
                    </form>
                </div>
            ) : (
                <p className="success-message">Your loan request has been submitted successfully!</p>
            )}
        </>
    );
};

export default LoanRequestForm;
