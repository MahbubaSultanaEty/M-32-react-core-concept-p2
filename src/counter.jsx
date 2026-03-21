import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);
    const handleAdd = () => {
       const newCount = count + 1;
        setCount(newCount)
    }

// internel react function
//     function useState(initialValue) {
//     let state = initialValue;

//     function setState(newValue) {
//         state = newValue;
//     }

//     return [state, setState];
// }


    const counterStyle = {
        border: "2px solid blue"
    }
    return (
        <div style={counterStyle}>
            <p>Count: { count}</p>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}