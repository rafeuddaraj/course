import { useEffect, useState } from "react";

export default function App() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        
    },[]);
    return (
        <>
            <h1>The current time is:</h1>
            <p>{time.toLocaleTimeString()}</p>
        </>
    );
}
