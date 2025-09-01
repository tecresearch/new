import React from "react";

const SuccessMessage = ({ setForm, setFormData,setSuccess,validate }) => {
  const handleHome = (e) => {
    setFormData({
      name: '',
      email: '',
      experience: ''
    })
    setForm(true);
    setSuccess(false);
    validate(true);
  }
  return (
    <div data-testid="success-message">
      <h2>Application Submitted Successfully!</h2>
      <p>Thank you for your application. We will review it soon.</p>
      <button className="ma-auto" data-testid="reset-button"
        onClick={handleHome}>
        Home
      </button>
    </div>
  );
};

export default SuccessMessage;
