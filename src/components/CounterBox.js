import React, {useState, useEffect} from 'react';
let counter = 0
const CounterBox = () => {
    counter++
    // const [counter, setCounter] = useState(0)
    useEffect(() => {
    //     setCounter(counter + 1)
    console.log(counter)
        return () => {alert(123)}
    }, [counter]);
    return (
        <div>
            {counter}
            <br/>
            <button onClick={() => counter++}>Tăng</button>   
            <button onClick={() => counter--}>Giảm</button>            
        </div>
    );
}

export default CounterBox;
