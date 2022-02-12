import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton";

const Counter = function () {

    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    return (
                <div className="countr">
                    <h1>{count}</h1>
                    <MyButton onClick={increment}>LIKE</MyButton>
                </div>
    )
}

export default Counter;
