import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement,reset } from '../redux/counterSlice';
const Counter = () => {
    const count  = useSelector ((state)=> state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <h1 className='text-center text-2xl border-2 w-1/2 m-auto p-6 text-red-600'>Count :{count} </h1>
            <div className='flex justify-evenly mt-4'>

                <button onClick={
                    ()=> dispatch(increment())
                    } 
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Increment
                </button>

                <button 
                onClick={
                    ()=> dispatch(decrement())
                    } 
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Decrement
                </button>
                <button
                onClick={
                    ()=> dispatch(reset())
                    }  
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Counter;