import React, { useState } from 'react';
import '../style/PasswordInput.css'; // Import your CSS file

const PasswordInput = ({ onUnlock }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctPassword = 'yourpassword'; // Change this to your desired password
    if (password === correctPassword) {
      onUnlock();
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="password-container">
      {/* <div className="eyeballs">
        <div className="eye eye-left"></div>
        <div className="eye eye-right"></div>
      </div> */}
      <div className="shushing-finger"></div>
      <form onSubmit={handleSubmit} className="password-form">
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter Password"
        />
        <button type="submit">Unlock</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default PasswordInput;
