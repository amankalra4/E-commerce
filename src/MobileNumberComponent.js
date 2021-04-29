import React from 'react';

const MobileNumberComponent = () => {
    return (
        <div>
            <label>Mobile Number</label>
            <br />
            <input
                className="input"
                type="text"
                placeholder="Enter 10 digit mobile number"
                maxLength="10"
            />
        </div>
    )
}

export default MobileNumberComponent;
