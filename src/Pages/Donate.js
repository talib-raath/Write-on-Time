import React, { useEffect } from 'react';
import "../Styles/Donate.css";
function Donate() {

  //Show Start of page after navigation

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='Donate'>
      <h1>Donate</h1>
      <p>Support Our Mission to Empower Incarcerated Individuals and Their Families Through the Power of Words</p>
      <p>At Write On Time, we believe that everyone deserves the opportunity to maintain meaningful connections and build a brighter future. Our mission is to provide free letter writing services for character and employment letters to incarcerated individuals and their families, using a combination of human expertise and artificial intelligence (AI) technology.</p>
      <p>As a non-profit organization, we rely on the generosity of donors like you to help us make a lasting impact on the lives of those we serve. Your support enables us to continue offering high-quality letter writing services, refine our AI technology, and reach more individuals in need.</p>
      <h2>Ways to Give</h2>
      <p><strong>One-Time Donation:</strong> Make a single donation to support our work. Every contribution, no matter the size, helps us provide vital services to inmates and their families.</p>
      <button>Donate</button>
      <p><strong>Recurring Donations:</strong> Become a Write On Time Sustainer by setting up a monthly donation. Your recurring support allows us to plan for the future and expand our services to reach even more individuals.</p>
      <button>Set up Recurring Donation</button>
      <p><strong>Corporate Sponsorship:</strong> Partner with us as a corporate sponsor to demonstrate your company's commitment to social responsibility and positive change. Please contact us at <strong>support@writeontimenonprofit.org</strong> to discuss sponsorship opportunities.</p>
      <p><strong>In-Kind Donations:</strong> Support our mission by donating goods or services, such as office supplies, software, or professional expertise. Please contact us at <strong>support@writeontimenonprofit.org</strong> to learn more about our current needs.</p>
      <p><strong>Planned Giving:</strong> Include Write On Time in your estate planning or will to create a lasting legacy of hope and opportunity for future generations. Contact us at <strong>support@writeontimenonprofit.org</strong> to discuss planned giving options.</p>
      <h2>Your Impact</h2>
      <p>Your donation directly supports our efforts to empower inmates and their families through the power of words. With your help, we can:</p>
      <ul>
        <li>Provide free, high-quality letter writing services to more individuals in need.</li>
        <li>Refine and enhance our AI technology to improve the effectiveness of our letters.</li>
        <li>Offer training and resources for our dedicated team of volunteers.</li>
        <li>Expand our reach and impact in communities across the country.</li>
      </ul>
      <p>Together, we can harness the power of words to transform lives, rebuild relationships, and create a brighter future for all. Thank you for your support.</p>
      <button>Donate</button>
      <p>Write On Time is a registered 501(c)(3) non-profit organization. Your donation is tax-deductible to the extent allowed by law. Please consult your tax advisor for more information.</p>
    </div>
  );
}

export default Donate;