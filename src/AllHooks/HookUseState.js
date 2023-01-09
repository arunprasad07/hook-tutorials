import { useState } from "react";


function HookUseState() {

    const [AsyncCount, setAsyncCount] = useState(0);
    const [SyncCount, setSyncCount] = useState(0);
    const [objectCount, setObjectCount] = useState({
        id: 0,
        objName: 'TestObjectName'
    });

    const asyncIncrementHandler = () => {
        setAsyncCount(AsyncCount + 1);
        setAsyncCount(AsyncCount + 1); // Increment only once because of asynchrous operation
        console.log(AsyncCount);
    }
    const asyncDecrementHandler = () => {
        setAsyncCount(AsyncCount - 1);
        console.log(AsyncCount);
    }

    const syncIncrementHandler = () => {
        setSyncCount((prevState) => prevState + 1);
        setSyncCount((prevState) => prevState + 1); // Increment twice
    }
    const syncDecrementHandler = () => {
        setSyncCount((prevState) => prevState - 1);
    }

    const objectIncrementHandler = () => {
        setObjectCount((prev) => {
            return {
                ...prev,
                id: prev.id + 1
            }
        });
    }
    const objectDecrementHandler = () => {
        setObjectCount((prev) => {
            return {
                ...prev,
                id: prev.id - 1
            }
        });
    }

    return (
        <>
            <div>
                <button onClick={asyncIncrementHandler} >+</button>
                <span>{AsyncCount} Asynchronous counter variable</span>
                <button onClick={asyncDecrementHandler}>-</button>
            </div>
            <div>
                <button onClick={syncIncrementHandler} >+</button>
                <span>{SyncCount} Synchronous counter variable</span>
                <button onClick={syncDecrementHandler}>-</button>
            </div>
            <div>
                <button onClick={objectIncrementHandler} >+</button>
                <span>{objectCount.id} Object counter</span>
                <button onClick={objectDecrementHandler}>-</button>
            </div></>
    )
}

export default HookUseState;