const Feedback = ({
    feedback: { good, neutral, bad },
    totalFeedback, positiveFBPercentage,
}) => {
    return (
        <div>
            <h2></h2>
            <p>Good: {good}</p>
            <p>Neutrual: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total {totalFeedback}</p>

            <p>Positive Percentage {positiveFBPercentage}</p>
        </div>
    )
};



export default Feedback;