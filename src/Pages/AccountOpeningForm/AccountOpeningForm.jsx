import './AccountOpeningForm.css';
import logo from '../../assets/logo.svg';
import 'animate.css';
import { useState } from 'react';

const AccountOpeningForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
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

        // Phone validation
        if (!formData.phone) {
            formErrors.phone = "Phone number is required.";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            formErrors.phone = "Phone number must be 10 digits.";
        }

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        if (validateForm()) {
            console.log("Account opening Form submitted successfully:", formData);
            setIsSubmitted(true); // Set form as submitted, hiding it
            // Additional submission logic (like sending to an API) can go here
        } else {
            console.log("Form has errors, fix them before submitting.");
        }
    };

    return (
        <>
            {!isSubmitted ? ( // Conditionally render the form if not submitted
                <div className="form-container">
                    <div className="logo-form">
                        <img src={logo} alt="logo" className="animate__animated animate__rotateIn" />
                        <h2 className="animate__animated animate__rotateIn">First Multiple</h2>
                    </div>
                    <h2>Open an Account Form</h2>
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

                        <button type="submit" className="form-btn">Submit</button>
                    </form>
                </div>
            ) : (
                <p className="success-message">Thank you! Your account has been successfully created.</p>
            )}
        </>
    );
};

export default AccountOpeningForm;
