import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import './userRegFrm.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Logo from './../../assest/data/images/Logo.png';

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
/>;

export default function UserRegFrm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(true);
  const [validPostalCode] = useState(true);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [validationError] = useState(null);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const validateEmail = () => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the email against the regular expression
    setIsValidEmail(emailRegex.test(email));
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);

    // Set the email in the formData
    setFormData({ ...formData, email: emailValue });
  };

  const validatePassword = (password) => {
    // Password should have at least 8 characters
    // It should contain at least one uppercase letter, one lowercase letter, and one digit
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
  };

  const validateConfPassword = () => {
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
    } else if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
    } else {
      setPasswordError('');
    }
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setIsPasswordValid(validatePassword(newPassword));
    setFormData({ ...formData, password: newPassword });
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmPasswordValue = event.target.value;
    setConfirmPassword(confirmPasswordValue);
    setFormData({ ...formData, confirmPassword: confirmPasswordValue });
  };

  const handleSubmit = async (event) => {
    /*handleValidateNIC();*/
    if (!validationError) {
      event.preventDefault();
      console.log({ validationError });
    } else {
      event.preventDefault();
      console.log({ validationError });
    }

    if (isValidEmail) {
      event.preventDefault();
      console.log('Valid Email...');
    } else {
      event.preventDefault();
      console.log('Invalid Email. Please fix and submit again.');
    }

    if (validPostalCode) {
      event.preventDefault();
      console.log('Valid postal code. Submitting form...');
      // Add your form submission logic here
    } else {
      event.preventDefault();
      console.log('Invalid postal code. Please fix and submit again.');
    }

    validatePassword();
    validateConfPassword();
    if (!passwordError) {
      if (validPostalCode && isValidEmail && !validationError) {
        try {
          const response = await axios.post(
            'http://localhost:8080/api/v1/user/save',
            formData
          );

          // Handle the response from the backend
          console.log(response.data);

          toast.success('Form submitted successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          // Redirect to the home page after a successful submission
          setTimeout(() => {
            window.location.href = '/';
          }, 4000);
        } catch (error) {
          console.error('Error submitting form:', error);
          toast.error('Error submitting form. Please try again later.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      } else {
        event.preventDefault();
      }
    } else {
      event.preventDefault();
      const message = 'Passwords do not match. Please fix and submit again.';
      console.log(message);
    }
  };

  return (
    <div className="container user-reg-container">
      <img className="user-img" src={Logo} alt="" />
      <header className="user-header">Register</header>
      <ToastContainer />
      <form onSubmit={handleSubmit} action="#">
        <div className="user-form form first">
          <div className="details personal">
            <div className="fields">
              <div className="input-field user-input-field">
                <input
                  type="text"
                  placeholder="User Name"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="user-form form first">
          <div className="details personal">
            <div className="fields">
              <div className="input-field user-input-field">
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={validateEmail}
                  disabled={validationError}
                  required
                />
              </div>
              <span className="user-emailErrorMsg">
                {!isValidEmail && (
                  <p style={{ color: 'red' }}>Invalid Email.</p>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="user-form form first">
          <div className="details contact">
            <div className="fields">
              <div className="input-field user-input-field">
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={handlePasswordChange}
                  disabled={
                    !validPostalCode || !isValidEmail || validationError
                  }
                  required
                />
              </div>
              <span className="user-pwordErrorMsg">
                {!isPasswordValid && (
                  <p style={{ color: 'red' }}>Password is Invalid</p>
                )}
                {passwordError && isPasswordValid && (
                  <p style={{ color: 'red' }}>{passwordError}</p>
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="user-form form first">
          <div className="details contact">
            <div className="fields">
              <div className="input-field user-input-field">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  id="confirmPword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  disabled={
                    !validPostalCode || !isValidEmail || validationError
                  }
                  required
                />
              </div>
            </div>
          </div>
        </div>
        <div className="user-form form fourth">
          <div className="details submit">
            <div className="fields">
              <div className="input-field user-input-field"></div>
              <button className="nextBtn user-frm-btn" type="submit">
                <span className="btnText">Register</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
