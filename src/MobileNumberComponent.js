import React from 'react';

const MobileNumberComponent = ({text, labelText}) => {
    return (
        <div>
            <label>{labelText}</label>
            <br />
            <input
                className="input"
                type="text"
                placeholder={text}
                maxLength="10"
            />
        </div>
    )
}

export default MobileNumberComponent;
