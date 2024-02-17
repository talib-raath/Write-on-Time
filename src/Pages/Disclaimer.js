import React, { useEffect } from 'react';
import "../Styles/Disclaimer.css";
function Disclaimer() {

  //Show Start of page after navigation

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='disclaimer'>
      <h1>Disclaimer</h1>
      <p>Write On Time is a non-profit organization dedicated to providing free letter writing services for inmates and their families. We utilize a combination of human expertise and artificial intelligence (AI) technology to create high-quality character and employment letters. While we strive to create effective and persuasive letters, we cannot guarantee specific outcomes, such as securing a job or receiving leniency from the authorities.</p>
      <h2>By using our services, you acknowledge and agree to the following:</h2>
      <ul>
        <li><strong>Limited Liability:</strong> Write On Time, its staff, volunteers, and affiliates shall not be held responsible for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from the use of our services or the content of the letters we provide.</li>
        <li><strong>No Legal Advice:</strong> Write On Time is not a law firm and does not provide legal advice or representation. Our services are limited to letter writing assistance only, which may involve the use of AI technology. If you require legal advice or representation, please consult with a qualified attorney.</li>
        <li><strong>No Guarantee of Results:</strong> While we make every effort to create effective and persuasive letters using both human expertise and AI technology, Write On Time cannot guarantee specific results, such as securing employment or receiving leniency from the authorities. The ultimate outcome of your situation will depend on various factors outside our control.</li>
        <li><strong>Copyright:</strong> The content of the letters we provide is intended for personal use only. You may not reproduce, distribute, or use the content for any commercial purposes without the prior written consent of Write On Time.</li>
        <li><strong>AI Usage:</strong> By using our services, you acknowledge and accept that part of the letter drafting process may involve the use of AI technology. Write On Time is committed to ensuring that AI is used responsibly and ethically in our services, and we take appropriate measures to maintain the quality and accuracy of our letters.</li>
        <li><strong>Privacy Policy:</strong> By using our services, you agree to our Privacy Policy, which governs how we collect, use, and protect your personal information, including the use of AI technology. Please review our Privacy Policy for more information.</li>
        <li><strong>Changes to Services or Disclaimer:</strong> Write On Time reserves the right to modify, suspend, or discontinue our services at any time, without prior notice. We also reserve the right to update or revise this disclaimer at our discretion. Your continued use of our services constitutes your acceptance of any changes to the disclaimer.</li>
      </ul>
      <p>By submitting an intake form and using Write On Time's services, you acknowledge that you have read, understood, and agree to be bound by the terms of this disclaimer.</p>
    </div>
  );
}

export default Disclaimer;