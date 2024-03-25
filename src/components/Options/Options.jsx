const Options = ({
    updateFeedback, totalFeedback
}) => {
    return (
        <div>
            <button className="button" onClick={() => {
                updateFeedback("good")
            }}>Good</button>

             <button className="button" onClick={() => {
                updateFeedback("neutral")
            }}>Neutral</button>

             <button className="button" onClick={() => {
                updateFeedback("bad")
            }}>Bad</button>


            {totalFeedback > 0 && <button className="button" onClick={() => {
                updateFeedback("reset")}}>Reset</button>}
        </div>
    )
}

export default Options;