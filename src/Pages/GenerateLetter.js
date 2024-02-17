import React, { useEffect } from 'react';
import { useState } from 'react';
import "../Styles/GenerateLetter.css";
import axios from 'axios'
import LoadingSpinner from '../Components/Loader';
import emailjs from 'emailjs-com';
import { useRef } from 'react';
function GenerateLetter() {

  //Show Start of page after navigation

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [msg, setMsg] = useState('');
  const [Error, setError] = useState('');

  //Using Refs to scroll to specific field after validation

  const formRefs = {
    name: useRef(null),
    email: useRef(null),
    recipientName: useRef(null),
    relationship: useRef(null),
    letterPurpose: useRef(null),
    situationDescription: useRef(null),
    relationshipDuration: useRef(null),
    characterTraits: useRef(null),
    achievements: useRef(null),
    personalGrowth: useRef(null),
    contribution: useRef(null),
    desiredJob: useRef(null),
    skills: useRef(null),
    personalAttributes: useRef(null),
    willingnessToLearn: useRef(null),
    employmentExplanation: useRef(null),
    tone: useRef(null),
  };

  //All Form Fields

  const initialFormData = {
    name: '',
    email: '',
    recipientName: '',
    relationship: '',
    letterPurpose: '',
    situationDescription: '',
    relationshipDuration: '',
    characterTraits: '',
    achievements: '',
    personalGrowth: '',
    contribution: '',
    desiredJob: '',
    skills: '',
    accomplishments: '',
    education: '',
    personalAttributes: '',
    willingnessToLearn: '',
    employmentExplanation: '',
    additionalInformation: '',
    tone: '',
    omittedInformation: '',
  };
  const [formData, setFormData] = useState(initialFormData);

  //Clear Form after submission

  function ClearForm() {
    setFormData(initialFormData);
  };

  //Email Validation

  function VerifyEmail(_email) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(_email);
  }

  //Send Mail Function

  function SendEmail(_body) {
    const serviceId = 'service_kcfs8wo';
    const templateId = 'template_enxc0m5';
    const owner_mail = 'H.lafita20@gmail.com';
    const userId = 'aiuIskd2WHThthgb8';

    const templateParams = {
      from_name: formData.name,
      to_name: "Write On Time",
      from_mail: formData.email,
      message: _body,
      to_mail: owner_mail,
    };
    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        setIsLoading(false);
        setMsg('Letter generated and sent for review successfully! We will shortly send you an AI generated letter at your email address after reviewing it. Thanks for your patience.')
        setIsSuccessful(true);
        setTimeout(() => {
          setIsSuccessful(false);
        }, 15200);
        ClearForm();
      }, (error) => {
        setIsLoading(false);
        setMsg('Letter generated but failed to send for review! So, Please try again.')
        setIsFailed(true);
        setTimeout(() => {
          setIsFailed(false);
        }, 15200);
        return;
      });
  }

  //Form Validation on blur

  const handleBlur = (event) => {
    const { name, value } = event.target;
    if (value === '') {
      setError(name);
    }
    else if (name === 'email') {
      if (!VerifyEmail(value)) {
        setError(name);
      }
      else {
        setError('');
      }
    }
    else {
      setError('');
    }
  };

  //Assigning value after every change in form

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (value === '') {
      setError(name);
    }
    else {
      setError('');
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Form Submit Handler

  const handleSubmit = async (event) => {
    event.preventDefault();

    //Form Validation after submission

    let isFormValid = true;
    let invalidRef = null;
    if (formData.letterPurpose === 'character') {

      //Filtering Form Data with respect to purpose

      const newFormData = Object.fromEntries(
        Object.entries(formData)
          .filter(([key, value]) => {
            const index = Object.keys(formData).indexOf(key);
            return index < 11 || index > 17;
          })
      );
      Object.entries(newFormData).some(([fieldName, fieldValue]) => {
        if (!fieldValue && (fieldName !== 'additionalInformation' && fieldName !== 'omittedInformation')) {
          setError(fieldName);
          isFormValid = false;
          invalidRef=formRefs[fieldName];
          return true;
        }
        return false;
      });
    }
    else if (formData.letterPurpose === 'employment') {

      //Filtering Form Data with respect to purpose

      const newFormData = Object.fromEntries(
        Object.entries(formData)
          .filter(([key, value]) => {
            const index = Object.keys(formData).indexOf(key);
            return index < 5 || index > 10;
          })
      );
      Object.entries(newFormData).some(([fieldName, fieldValue]) => {
        if (!fieldValue && (fieldName !== 'accomplishments' && fieldName !== 'education' && fieldName !== 'additionalInformation' && fieldName !== 'omittedInformation')) {
          setError(fieldName);
          isFormValid = false;
          invalidRef=formRefs[fieldName];
          return true;
        }
        return false;
      });
    }
    else {
      setError('letterPurpose');
      isFormValid = false;
    }
    if (!isFormValid) {
      invalidRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    //Sending POST request to ChatGPT api to generate letter

    let request;
    if (formData.letterPurpose === 'character') {
      request = `Write a draft of the letter for the following information of ${formData.recipientName}. sender name: ${formData.name}, sender email: ${formData.email}, full name of the person the letter is for: ${formData.recipientName}, relationship to the person requesting the letter: ${formData.relationship}, purpose of letter: character reference letter, situation description: ${formData.situationDescription}, relationship nature and duration: ${formData.relationshipDuration}, character traits: ${formData.characterTraits}, achivements: ${formData.achievements}, personal growth: ${formData.personalGrowth}, contribution: ${formData.contribution}${formData.omittedInformation ? `, tone: ${formData.tone} and information to omit or avoid in letter is: ${formData.omittedInformation}` : ` and tone: ${formData.tone}`}. My name is ${formData.name} and my email is ${formData.email}. ${formData.additionalInformation ? ` additional information: ${formData.additionalInformation}` : ''}`;
    }
    else {
      if(formData.relationship.toLowerCase().includes('self') || formData.relationship.toLowerCase().includes('myself') || formData.relationship.toLowerCase().includes('me'))
      {
        request = `Write a draft of the employment letter for myself with following information. full name of me: ${formData.recipientName}, purpose of letter: ${formData.letterPurpose}, desired job or industry: ${formData.desiredJob}, skills: ${formData.skills}${formData.accomplishments ? `, accomplishments: ${formData.accomplishments}` : ''}${formData.education ? `, educaton or training completed while incarcerated: ${formData.education}` : ''}, personal attributes: ${formData.personalAttributes}, willingness to learn: ${formData.willingnessToLearn}, employment explanation: ${formData.employmentExplanation}${formData.omittedInformation ? `, tone: ${formData.tone} and information to omitted or avoided in letter is: ${formData.omittedInformation}` : ` and tone: ${formData.tone}`}. My name is ${formData.name} and my email is ${formData.email}. ${formData.additionalInformation ? `additional information: ${formData.additionalInformation}. ` : ``}.`;
      }
      else{
        request = `Write a draft of the employment refrence letter for the following information. full name of the person the letter is for: ${formData.recipientName}, relationship to the person requesting the letter: ${formData.relationship}, purpose of letter: ${formData.letterPurpose}, desired job or industry: ${formData.desiredJob}, skills: ${formData.skills}${formData.accomplishments ? `, accomplishments: ${formData.accomplishments}` : ''}${formData.education ? `, educaton or training completed while incarcerated: ${formData.education}` : ''}, personal attributes: ${formData.personalAttributes}, willingness to learn: ${formData.willingnessToLearn}, employment explanation: ${formData.employmentExplanation}${formData.omittedInformation ? `, tone: ${formData.tone} and information to omitted or avoided in letter is: ${formData.omittedInformation}` : ` and tone: ${formData.tone}`}. My name is ${formData.name} and my email is ${formData.email}. ${formData.additionalInformation ? `additional information: ${formData.additionalInformation}. ` : ``}.`;
      }
    }
    setMsg('Please wait while we are generating letter....');
    setIsLoading(true);
    axios.post('https://api.openai.com/v1/completions', {
      prompt: request,
      max_tokens: 3000,
      model: 'text-davinci-003'
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer  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'
      }
    })
      .then((response) => {
        setMsg('Letter Generated! But now please wait to send letter to website owner for review....')
        const body = response.data.choices[0].text.trimStart();
        setTimeout(() => {
          SendEmail(body);
        }, 4000);
      })
      .catch((error) => {
        setIsLoading(false);
        setMsg('Sorry! We are unable to generate letter for you. Please try again.');
        setIsFailed(true);
        setTimeout(() => {
          setIsFailed(false);
        }, 15200);
        return;
      });

  };
  return (
    <div className='main-div'>
      {isLoading ? <LoadingSpinner message={msg} /> :
        isSuccessful ? <LoadingSpinner isSuccessful={true} message={msg} _count={15} /> :
          isFailed ? <LoadingSpinner isFailed={true} message={msg} _count={15} /> :
            <div>
              <h2 className='heading-1'>Generate a Letter</h2>
              <form className='form-1' onSubmit={handleSubmit}>
                <label className='label-1'>
                  Your Name:*
                  <input
                    className='common-1'
                    type="text"
                    name="name"
                    value={formData.name}
                    ref={formRefs.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {Error === 'name' && (
                    <div className="error-message">This field cannot be empty</div>
                  )}
                </label>
                <label className='label-1'>
                  Your Email:*
                  <input
                    className='common-1'
                    type="text"
                    name="email"
                    value={formData.email}
                    ref={formRefs.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {Error === 'email' && (
                    <div className="error-message">Please enter a valid email address</div>
                  )}
                </label>
                <label className='label-1'>
                  Recipient Name:*
                  <input
                    className='common-1'
                    type="text"
                    name="recipientName"
                    value={formData.recipientName}
                    ref={formRefs.recipientName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='full name of the person the letter is for'
                  />
                  {Error === 'recipientName' && (
                    <div className="error-message">This field cannot be empty</div>
                  )}
                </label>
                <label className='label-1'>
                  Relationship:*
                  <input
                    className='common-1'
                    type="text"
                    name="relationship"
                    value={formData.relationship}
                    ref={formRefs.relationship}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder=' Relationship to the person requesting the letter(self, family member, friend, etc.)'
                  />
                  {Error === 'relationship' && (
                    <div className="error-message">This field cannot be empty</div>
                  )}
                </label>
                <label className='label-1-1'>
                  Purpose of the Letter:*
                  <select className='common-1-1' name="letterPurpose" value={formData.letterPurpose} ref={formRefs.letterPurpose} onChange={handleChange} onBlur={handleBlur}>
                    <option value="">Select Purpose</option>
                    <option value="character">Character Reference Letter</option>
                    <option value="employment">Employment Letter</option>
                  </select>
                  {Error === 'letterPurpose' && (
                    <div className="error-message"><br />Please select purpose for the letter</div>
                  )}
                </label>
                {formData.letterPurpose === 'character' ?
                  <div>
                    <label className='label-1'>
                      Situation Description:*
                      <input
                        className='common-1'
                        type="text"
                        name="situationDescription"
                        value={formData.situationDescription}
                        ref={formRefs.situationDescription}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='brief description of the situation that requires the character reference (court hearing, parole board, etc.)'
                      />
                      {Error === 'situationDescription' && (
                        <div className="error-message">This field cannot be empty</div>
                      )}
                    </label>
                    <label className='label-1'>
                      Relationship Duration:*
                      <input
                        className='common-1'
                        type="text"
                        name="relationshipDuration"
                        value={formData.relationshipDuration}
                        ref={formRefs.relationshipDuration}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='duration and nature of the relationship between you and recipient'
                      />
                      {Error === 'relationshipDuration' && (
                        <div className="error-message">This field cannot be empty</div>
                      )}
                    </label>
                    <label className='label-1'>
                      Character Traits:*
                      <input
                        className='common-1'
                        type="text"
                        name="characterTraits"
                        value={formData.characterTraits}
                        ref={formRefs.characterTraits}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='positive character traits and examples of how these traits were demonstrated'
                      />
                      {Error === 'characterTraits' && (
                        <div className="error-message">This field cannot be empty</div>
                      )}
                    </label>
                    <label className='label-1'>
                      Achievements:*
                      <input
                        className='common-1'
                        type="text"
                        name="achievements"
                        value={formData.achievements}
                        ref={formRefs.achievements}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='any achievements, community involvement, or volunteer work'
                      />
                      {Error === 'achievements' && (
                        <div className="error-message">This field cannot be empty</div>
                      )}
                    </label>
                    <label className='label-1'>
                      Personal Growth:*
                      <input
                        className='common-1'
                        type="text"
                        name="personalGrowth"
                        value={formData.personalGrowth}
                        ref={formRefs.personalGrowth}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='details of personal growth or rehabilitation efforts while incarcerated'
                      />
                      {Error === 'personalGrowth' && (
                        <div className="error-message">This field cannot be empty</div>
                      )}
                    </label>
                    <label className='label-1'>
                      Contribution:*
                      <input
                        className='common-1'
                        type="text"
                        name="contribution"
                        value={formData.contribution}
                        ref={formRefs.contribution}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='how the person will contribute positively to society upon release'
                      />
                      {Error === 'contribution' && (
                        <div className="error-message">This field cannot be empty</div>
                      )}
                    </label>
                  </div>
                  : formData.letterPurpose === 'employment' ?
                    <div>
                      <label className='label-1'>
                        Desired Job:*
                        <input
                          className='common-1'
                          type="text"
                          name="desiredJob"
                          value={formData.desiredJob}
                          ref={formRefs.desiredJob}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder='desired job or industry'
                        />
                        {Error === 'desiredJob' && (
                          <div className="error-message">This field cannot be empty</div>
                        )}
                      </label>
                      <label className='label-1'>
                        Skills:*
                        <input
                          className='common-1'
                          type="text"
                          name="skills"
                          value={formData.skills}
                          ref={formRefs.skills}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder='relevant skills, qualifications, and experiences'
                        />
                        {Error === 'skills' && (
                          <div className="error-message">This field cannot be empty</div>
                        )}
                      </label>
                      <label className='label-1'>
                        Accomplishments:
                        <input
                          className='common-1'
                          type="text"
                          name="accomplishments"
                          value={formData.accomplishments}
                          onChange={handleChange}
                          placeholder='examples of achievements or accomplishments in previous jobs or during incarceration (if applicable)'
                        />
                      </label>
                      <label className='label-1'>
                        Education:
                        <input
                          className='common-1'
                          type="text"
                          name="education"
                          value={formData.education}
                          onChange={handleChange}
                          placeholder='education or training completed while incarcerated (if applicable)'
                        />
                      </label>
                      <label className='label-1'>
                        Personal Attributes:*
                        <input
                          className='common-1'
                          type="text"
                          name="personalAttributes"
                          value={formData.personalAttributes}
                          ref={formRefs.personalAttributes}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder='personal attributes that make the person a good fit for the desired job or industry'
                        />
                        {Error === 'personalAttributes' && (
                          <div className="error-message">This field cannot be empty</div>
                        )}
                      </label>
                      <label className='label-1'>
                        Willingness to Learn:*
                        <input
                          className='common-1'
                          type="text"
                          name="willingnessToLearn"
                          value={formData.willingnessToLearn}
                          ref={formRefs.willingnessToLearn}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder='willingness to learn and adapt to new environments'
                        />
                        {Error === 'willingnessToLearn' && (
                          <div className="error-message">This field cannot be empty</div>
                        )}
                      </label>
                      <label className='label-1'>
                        Employment Explanation:*
                        <input
                          className='common-1'
                          type="text"
                          name="employmentExplanation"
                          value={formData.employmentExplanation}
                          ref={formRefs.employmentExplanation}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder="Explanation of how securing employment will support the person's successful reintegration into society"
                        />
                        {Error === 'employmentExplanation' && (
                          <div className="error-message">This field cannot be empty</div>
                        )}
                      </label>
                    </div>
                    : ''
                }
                <label className='label-1'>
                  Additional Information:
                  <input
                    className='common-1'
                    type="text"
                    name="additionalInformation"
                    value={formData.additionalInformation}
                    onChange={handleChange}
                    placeholder='any specific points the person would like to emphasize or include in the letter'
                  />
                </label>
                <label className='label-1-1'>
                  Tone:*
                  <select className='common-1-1' name="tone" value={formData.tone} ref={formRefs.tone} onChange={handleChange} onBlur={handleBlur}>
                    <option value="">Select Tone</option>
                    <option value="formal">Formal</option>
                    <option value="semi-formal">Semi-Formal</option>
                    <option value="casual">Casual</option>
                  </select>
                  {Error === 'tone' && (

                    <div className="error-message"><br />Please select tone for the letter</div>
                  )}
                </label>

                <label className='label-1'>
                  Omitted Information:
                  <input
                    className='common-1'
                    type="text"
                    name="omittedInformation"
                    value={formData.omittedInformation}
                    onChange={handleChange}
                    placeholder='any information that should be omitted or avoided in the letter'
                  />
                </label>
                <button className='btn-1' type="submit">Generate Letter</button>
                <br />
              </form>
            </div>
      }
    </div>
  );
}

export default GenerateLetter;