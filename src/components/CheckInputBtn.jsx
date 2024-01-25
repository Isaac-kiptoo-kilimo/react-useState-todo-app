// CheckInputBtn.jsx

import React, { useState } from 'react';
import './CheckInputBtn.scss';

const CheckInputBtn = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`check-input ${isChecked ? 'checked' : ''}`}>
      <input
        className="checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default CheckInputBtn;
