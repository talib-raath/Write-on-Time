import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../Styles/Home.css";
import backgroundimage from '../Images/Home.jpg';
import LoadingSpinner from '../Components/Loader';
function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const img = new Image();
    img.src = backgroundimage;
    img.onload = () => setLoading(false);
  }, []);
  //Show Start of page after navigation

  return (
    <div className='home-container'>
      {loading ? <div><LoadingSpinner message={'Loading....'} /></div> :
        <div className='home'>
          <h1>Welcome to Write On Time</h1>
          <p className='p'>Lending a Helping Hand, One Letter at a Time</p>
          <p className='p'>At Write On Time, we understand the importance of human connection, especially for individuals who are incarcerated or have family members in prison. We believe in the power of words to bridge gaps, foster understanding, and create opportunities. That's why we offer free letter writing services to help inmates and their families communicate effectively in character and employment letters.</p>
          <h2 className='h'>Our Services</h2>
          <p className='p'>Write On Time is dedicated to providing the following services:</p>
          <ul>
            <li><p className='li-headings'><strong>Character Letters:</strong></p> We help draft heartfelt character letters that portray the inmate in a positive light and showcase their personal growth, enabling them to maintain or rebuild relationships with family and friends.</li>
            <li><p className='li-headings'><strong>Employment Letters:</strong></p> We assist in crafting compelling employment letters that highlight the individual's skills, qualifications, and potential for success, increasing their chances of securing job opportunities upon release.</li>
          </ul>
          <h2 className='h'>Get Started</h2>
          <p className='p'>Simply fill out our online intake form, providing as much information as possible about the individual and the purpose of the letter. Our team of compassionate and skilled writers will then create a customized letter that addresses your specific needs.</p>
          <div className='btn-div'><NavLink to="/generate-letter"><button id='btn'>Try Now</button></NavLink></div>
          <h2 className='h'>Our Commitment</h2>
          <p className='p'>At Write On Time, we are committed to:</p>
          <ul>
            <li><p className='li-headings'><strong>Respecting your privacy:</strong></p> All information shared with us is kept strictly confidential and used solely for the purpose of crafting your letter.</li>
            <li><p className='li-headings'><strong>Prompt service:</strong></p> We understand the importance of timely communication, and we strive to complete all letters within a reasonable time frame.</li>
            <li><p className='li-headings'><strong>Quality and accuracy:</strong></p> Our team of writers works diligently to ensure that every letter is well-written, accurate, and tailored to your unique situation.</li>
          </ul>
          <h2 className='h'>Join Our Cause</h2>
          <p className='p'>We are grateful for the support of our volunteers, donors, and partners who help make our mission possible. If you'd like to join us in making a difference, please consider volunteering as a writer or making a donation to support our cause.</p>
          <p className='p'>Together, we can change lives by giving the gift of connection through the power of words. Welcome to Write On Time – let's start writing a brighter future, one letter at a time.</p>
        </div>
      }

    </div>
  );
}

export default Home;