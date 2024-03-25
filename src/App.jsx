import { useState, useEffect } from "react";
import "./App.css";

import Options from "./components/Options/Options";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification"


const App = () => {
    const [feedback, setFeedback] = useState(() => {
        const handleFeedback = localStorage.getItem("feedback");
        if (handleFeedback !== null) {
            return JSON.parse(handleFeedback);
        }
        return {
            good: 0,
            neutral: 0,
            bad: 0,
        };
        
    });

    const handleReset = (feedbackType) => {
        if (feedbackType === "reset") {
            setFeedback({
                good: 0,
                neutral: 0,
                bad: 0,
            });
        return;
    
        }
        setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
    };
    
    useEffect(() => {
        localStorage.setItem("feedback", JSON.stringify(feedback));
    }, [feedback]);

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const positiveFBpercentage = Math.round(
        ((feedback.good + feedback.neutral) / totalFeedback) * 100);
    
    return (
        <div className="box">
            <Description />
            <Options totalFeedback={totalFeedback} handleReset={handleReset} />
            {totalFeedback > 0 ? (<Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFBPercentage={positiveFBpercentage}
            />) : (<Notification/>)}
        </div>
    );
};

export default App;