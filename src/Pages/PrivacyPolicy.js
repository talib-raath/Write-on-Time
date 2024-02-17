import React, { useEffect } from 'react';
import "../Styles/PrivacyPolicy.css";
function PrivacyPolicy() {

  //Show Start of page after navigation

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>Effective Date: 18-05-2023</p>

      <p>
        At Write On Time, we are committed to protecting your privacy and maintaining the confidentiality of your personal information. This Privacy Policy explains how we collect, use, and safeguard the information you provide when using our services, including the use of artificial intelligence (AI) in drafting letters. By using our website and services, you consent to the collection, use, and disclosure of your information in accordance with this Privacy Policy.
      </p>

      <h2>Information We Collect</h2>
      <p>
        When you use our services, we may collect the following types of information:
      </p>

      <ul>
        <li>
          <strong>Personal Information:</strong> This includes any information that can be used to identify you or contact you, such as your name, email address, phone number, and mailing address. We collect this information when you fill out our online intake form or contact us directly.
        </li>
        <li>
          <strong>Non-Personal Information:</strong> This includes information that cannot be used to identify you, such as aggregated usage data and general demographic information. We may collect this information through the use of cookies or similar technologies.
        </li>
      </ul>

      <h2>How We Use Your Information</h2>
      <p>
        We use the information we collect for the following purposes:
      </p>

      <ul>
        <li>
          <strong>To provide our services:</strong> We use your personal information and AI technology to create customized letters and communicate with you regarding your request.
        </li>
        <li>
          <strong>To improve our services:</strong> We may use non-personal information to analyze usage patterns, monitor website performance, and make improvements to our services, including refining our AI algorithms.
        </li>
        <li>
          <strong>To send updates and promotional materials:</strong> With your consent, we may use your contact information to send you updates about our services, events, and promotions.
        </li>
      </ul>

      <h2>Disclosure of Your Information</h2>
      <p>
        We do not sell, rent, or share your personal information with third parties, except in the following circumstances:
      </p>

      <ul>
        <li>
          <strong>When required by law:</strong> We may disclose your information if we believe it is necessary to comply with a legal obligation, protect our rights, or defend against legal claims.
        </li>
        <li>
          <strong>With your consent:</strong> We may share your information with third parties when you have given us your explicit consent to do so.
        </li>
      </ul>

      <h2>Security Measures</h2>
      <p>
        We take appropriate security measures to protect your personal information from unauthorized access, use, or disclosure. This includes using secure servers, encryption, and limiting access to your information to authorized personnel only. However, please note that no method of transmission or storage is 100% secure, and we cannot guarantee the absolute security of your information.
      </p>

      <h2>Third-Party Websites</h2>
      <p>
        Our website may contain links to third-party websites or services. This Privacy Policy does not apply to the privacy practices of those websites or services, and we are not responsible for the content or privacy practices of such websites. We encourage you to review the privacy policies of any third-party websites you visit.
      </p>
      <h2>Children's Privacy</h2>
      <p>
        Our services are not intended for use by children under the age of 13. We do not knowingly collect or solicit personal information from children under the age of 13. If we become aware that we have collected personal information from a child under the age of 13, we will promptly delete such information from our records.
      </p>
      <h2>Changes to This Privacy Policy</h2>
      <p>
        We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on our website. Your continued use of our services after the posting of changes constitutes your acceptance of such changes.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at <strong>support@writeontimenonprofit.org</strong>
      </p>
      <p>By using our website and services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Privacy Policy.</p>
    </div>
  );
}

export default PrivacyPolicy;