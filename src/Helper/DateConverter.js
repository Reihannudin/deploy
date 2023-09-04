
import React, { useState } from 'react';

function formatDate(inputDate) {
    // The formatDate function from the previous example...
    // Copy the same code here
}

function DateConverter({ initialDate }) {
    const [inputDate, setInputDate] = useState(initialDate);
    const [formattedDate, setFormattedDate] = useState(formatDate(initialDate));

    const handleInputChange = (event) => {
        const newInputDate = event.target.value;
        setInputDate(newInputDate);
        setFormattedDate(formatDate(newInputDate));
    };

    return (
        <div>
            <label>
                Input Date:
                <input
                    type="text"
                    value={inputDate}
                    onChange={handleInputChange}
                />
            </label>
            <p>Formatted Date: {formattedDate}</p>
        </div>
    );
}

export default DateConverter;
