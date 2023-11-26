import React from 'react';
import { useDispatch } from 'react-redux';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

// import Loading from '../components/tools/Loading';

const LoadingExample = () => {
    const dispatch = useDispatch();

    const simulateLongRunningTask = () => {
        dispatch(showLoading());
        // Simulasikan tugas yang membutuhkan waktu lama
        setTimeout(() => {
            dispatch(hideLoading());
        }, 3000);
    };

    return (
        <div>
            {/* <Loading /> */}
            <h1>React Redux Loading Bar Example</h1>
            <button onClick={simulateLongRunningTask}>Run Long Task</button>
        </div>
    );
};

export default LoadingExample;
