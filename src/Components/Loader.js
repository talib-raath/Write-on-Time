import React, { useEffect, useState } from "react";
import "../Styles/Loader.css";

function LoadingSpinner({ isSuccessful, isFailed, message,_count }) {
    const [timer, setTimer] = useState(10);
    useEffect(() => {
        window.scrollTo(0, 0);
        let interval;
        if(_count!==undefined)
        {
            setTimer(Number(_count));
        }
        if (isSuccessful || isFailed) {
            interval = setInterval(() => {
                setTimer((timer) => timer - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isSuccessful, isFailed,_count]);
    if (isSuccessful) {
        return (
            <div className="success-container">
                <div className="success-icon">&#10004;</div>
                {message ? <div className="success-para">{message}</div> : <div className="success-para">Form submitted successfully!</div>}
                <div className="success-para2">We are redirecting you back to page in {timer} seconds.</div>
            </div>
        );
    } else if (isFailed) {
        return (

            <div className="failure-container">
                <div className="failure-icon">&#10060;</div>
                {message ? <div className="failure-para">{message}</div> : <div className="failure-para">Sorry! We are unable to record your response. Please try again.</div>}
                <div className="failure-para2">We are redirecting you back to page in {timer} seconds.</div>
            </div>
        );
    } else {
        return (
            <div className="loader-cotainer">
                <div className="spinner-container">
                    <div className="loading-spinner"></div>
                    {message ? <div className="Loading-para">{message}</div> : <div className="Loading-para">Please wait while we are gathering data....</div>}
                </div>
            </div>
        );
    }
}

export default LoadingSpinner;
