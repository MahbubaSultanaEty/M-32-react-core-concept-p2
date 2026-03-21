import { useState } from "react"

export default function Batsman() {
    
    const batsmanStyles = {
        color: "black",
        backgroundColor: "gray",
        margin: "5px",
        border: "2px solid skublue"
    }
    const btnStyle = {
        margin: "5px",
    }

    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    
    const handleSingles = () => {
        const newRun = runs + 1;
        setRuns(newRun);
    }
    const handleFour = () => {
        const newRun = runs + 4;
        setRuns(newRun);
    }
    const handleSix = () => {
        const updatedSixes = sixes + 1;
        setSixes(updatedSixes);
        const newRun = runs + 6;
        setRuns(newRun);
    }


    return (
        <div style={batsmanStyles}>

            <p>Six: { sixes}</p>
            {
                runs>50 && <p>You scored more than 50</p>
            }
            <h2>Player: Mushfik </h2>
            <p>score: {runs} </p>
            <div style={btnStyle}>
                <button onClick={handleSingles}>Singles</button>
                <button onClick={handleFour}>Four</button>
                <button onClick={handleSix}>Six</button>
            </div>
        </div>
    )
}