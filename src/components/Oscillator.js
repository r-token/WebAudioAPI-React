import React from 'react';

const Oscillator = ({changeFrequency, frequency}) => {
    return (
        <div>
            <input 
                value={frequency}
                onChange={changeFrequency}
                type="range" 
                id="frequency"
                max="5000"
            >
            </input>
        </div>
    )
}

export default Oscillator