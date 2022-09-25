import { useState, useEffect } from "react";
export default function Second() {

    const [num, setNum] = useState(23)
    const [num2, setNum2] = useState(21)
    // componentDidMount()
    useEffect(() => {
        console.log("Second Mount Run.......")
    }, [])
    // componenetDidUptade()
    useEffect(() => {
        console.log("num CHANGE.......")
    }, [num])
    console.log("Second Run.......")
    return <>
        <h2> Second Componenet : {num},{num2}</h2>
        <button onClick={() => setNum(num + 1)}>Change</button>
        <button onClick={() => setNum2(num2 + 1)}>Change</button>
    </>
}