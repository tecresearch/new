import React from "react";

const Preview = ({ setForm, setPreview, setSuccess, setFormData,formData ,validate}) => {

  const handleClear = (e) => {
    e.preventDefault();
    setPreview(false);
    setForm(true);
    setFormData({
      name: '',
      email: '',
      experience: ''
    })
    validate(true);
  }
  const handleSubmit=(e)=>{
       e.preventDefault();
       setPreview(false);
       setSuccess(true);
  }
  return (
    <div data-testid="preview">
      <h2>Preview Your Application</h2>
      <p data-testid="preview-name">
        <strong>Name:</strong> {formData.name}
      </p>
      <p data-testid="preview-email">
        <strong>Email:</strong> {formData.email}
      </p>
      <p data-testid="preview-experience">
        <strong>Experience:</strong> {formData.experience} years
      </p>
      <button data-testid="clear-button"
        onClick={handleClear}
      >Clear</button>
      <button data-testid="submit-button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Preview;
