import React, { useEffect } from 'react';
import "../Styles/AboutUs.css";
function AboutUs() {

    //Show Start of page after navigation

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="about-us">
            <div className='inner-about-us'>
                <h1>About Us</h1>
                <p className='about-us-para'>(Empowering Connections Through the Power of Words)</p>

                <section className="story">
                    <h2>Our Story</h2>
                    <p>Write On Time was founded in 2023 by a group of compassionate individuals who recognized the immense impact that effective communication can have on the lives of incarcerated individuals and their families. Our mission is to help bridge the gap between inmates and their loved ones by providing free letter writing services for character and employment letters.</p>
                    <p>As a non-profit organization, we rely on the dedication of our skilled volunteers, generous donors, and committed partners to make a difference in the lives of those we serve. Through our efforts, we have seen firsthand how the power of words can transform lives, rebuild relationships, and create opportunities for personal and professional growth.</p>
                </section>

                <section className="vision">
                    <h2>Our Vision</h2>
                    <p>We envision a world where every individual, regardless of their circumstances, has the opportunity to maintain meaningful connections and achieve their full potential. By empowering incarcerated individuals and their families with the tools to communicate effectively, we strive to break the cycle of incarceration and create a brighter future for all.</p>
                </section>

                <section className="values">
                    <h2>Our Values</h2>
                    <ul>
                        <li><strong>Compassion:</strong> We approach every individual and situation with empathy and understanding, recognizing the unique challenges faced by inmates and their families.</li>
                        <li><strong>Integrity:</strong> We adhere to the highest ethical standards, ensuring that our actions are guided by honesty, fairness, and respect.</li>
                        <li><strong>Excellence:</strong> We are committed to providing high-quality services, continually improving our processes, and striving for the best possible outcomes for those we serve.</li>
                        <li><strong>Collaboration:</strong> We foster a spirit of teamwork, working together with our volunteers, partners, and the community to achieve our mission.</li>
                        <li><strong>Empowerment:</strong> We believe in the potential of every individual and are dedicated to providing the resources and support needed to promote personal and professional growth.</li>
                    </ul>
                </section>

                <section className="team">
                    <h2>Our Team</h2>
                    <p>Our team of talented and dedicated volunteers includes experienced writers, educators, and professionals from various backgrounds who are passionate about making a difference. Each member of our team brings their unique skills and perspectives to the table, ensuring that we can offer a wide range of support to those in need.</p>
                </section>

                <section className="get-involved">
                    <h2>Get Involved</h2>
                    <p>If you share our vision and values, we invite you to join us in making a positive impact on the lives of incarcerated individuals and their families. Whether you're interested in volunteering your time and expertise as a writer or supporting our cause through donations, your contribution will help create lasting change and empower individuals to reach their full potential.</p>
                    <p>Together, we can harness the power of words to create a brighter future, one letter at a time.</p>
                </section>
            </div>
        </div>
    );
}

export default AboutUs;