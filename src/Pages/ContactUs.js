import React, { useEffect } from 'react';
import { useState } from 'react';
import "../Styles/ContactUs.css";
import emailjs from 'emailjs-com';
import LoadingSpinner from '../Components/Loader';

function ContactUs() {

  //Show Start of page after navigation

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [Error, setError] = useState('');

  //Send Mail Function

  function SendEmail() {
    const serviceId = 'service_kcfs8wo';
    const templateId = 'template_oncw277';
    const owner_mail = 'H.lafita20@gmail.com';
    const userId = 'aiuIskd2WHThthgb8';

    const templateParams = {
      from_name: name,
      to_name: "Write On Time",
      from_mail: email,
      message: body,
      to_mail: owner_mail,
    };
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        setIsLoading(false);
        setIsSuccessful(true);
        setTimeout(() => {
          setIsSuccessful(false);
        }, 10200);
        ClearForm();
      }, (error) => {
        setIsLoading(false)
        setIsFailed(true);
        setTimeout(() => {
          setIsFailed(false);
        }, 10200);
        return;
      });
  }

  //Clear Form after submission

  function ClearForm() {
    setName('');
    setEmail('');
    setBody('');
  };

  //Email Validation
  
  function VerifyEmail(_email) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(_email);
  }

  //Submit Handler

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === '') {
      setError('1');
      return;
    }
    else if (!VerifyEmail(email)) {
      setError('2');
      return;
    }
    else if (body === '') {
      setError('3');
      return;
    }
    else {
      setError('');
      setIsLoading(true);
      setTimeout(() => {
        SendEmail();
      }, 3000);
    }
  };
  return (
    <div>
      {isLoading ? <LoadingSpinner /> :
        isSuccessful ? <LoadingSpinner isSuccessful={true} /> :
          isFailed ? <LoadingSpinner isFailed={true} /> :
            <div className='form-container'>
              <h2 className='heading-2'>Contact Us</h2>
              <form className='form-2' onSubmit={handleSubmit}>
                <label className='label-2'>
                  Your Name:*
                  <input
                    className='common-2'
                    type="text"
                    value={name}
                    onChange={(e) => {
                      if (e.target.value === '') {
                        setError('1');
                      }
                      else {
                        setError('');
                      }
                      setName(e.target.value)
                    }}
                  />
                  {Error === '1' && (
                    <div className="error-message">This field cannot be empty</div>
                  )}
                </label>
                <label className='label-2'>
                  Your Email:*
                  <input
                    className='common-2'
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={(e) => {
                      if (!VerifyEmail(e.target.value)) {
                        setError('2');
                      }
                      else {
                        setError('')
                      }
                    }}
                  />
                  {Error === '2' && (
                    <div className="error-message">Please enter a valid email address</div>
                  )}
                </label>
                <label className='label-2'>
                  Message:*
                  <textarea
                    className='common-2'
                    value={body}
                    onChange={(e) => {
                      if (e.target.value === '') {
                        setError('3');
                      }
                      else {
                        setError('');
                      }
                      setBody(e.target.value)
                    }} />
                  {Error === '3' && (
                    <div className="error-message">This field cannot be empty</div>
                  )}
                </label>
                <button disabled={isLoading} className='btn-2' type="submit">Submit</button>
                <br />
              </form>
            </div>
      }
    </div>
  );
}

export default ContactUs;