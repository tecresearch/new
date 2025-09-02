import React, { useState } from "react";
import "./App.css";
import "h8k-components";
import JobApplicationForm from "./components/JobApplicationForm";
import Preview from "./components/Preview";
import SuccessMessage from "./components/SuccessMessage";

const title = "Job Application Portal";

const App = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    experience: ''
  });

  const [isForm, setForm] = useState(true);
  const [isPreview, setPreview] = useState(false);
  const [isSuccess, setSuccess] = useState(false);


  const validate = (isClear) => {
    if (isClear) {
      setErrors({
        name: '',
        email: '',
        experience: ''
      });
      return false;
    }
    let isValid = true;
    const newErrors = { name: '', email: '', experience: '' };


    if (!formData.name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    const simpleEmailPattern = /.+@.+\..+/;
    /**
     * Explanation
      .+: Ensures there is at least one character before the @ symbol.
      @: Requires the presence of the @ symbol.
      .+: Ensures there is at least one character after the @ symbol.
      \.: Requires at least one dot (.) in the domain.
      .+: Ensures at least one character after the dot.
     */
    let email = formData.email;

    // Check conditions
    const hasAtSymbol = email.includes('@');
    const hasDotAfterAt = hasAtSymbol && email.indexOf('.', email.indexOf('@')) > email.indexOf('@');
    const hasCharactersBeforeAt = email.indexOf('@') > 0;

    const isValidEmail = hasAtSymbol && hasCharactersBeforeAt && hasDotAfterAt;

    if (!formData.email || !isValidEmail) {
      newErrors.email = "Enter a valid email address.";
      isValid = false;
    }


    if (!formData.experience || Number(formData.experience) < 0) {
      newErrors.experience = "Experience must be a positive number.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  return (
    <div className="App pt-30 ma-auto" data-testid="app">
      <h8k-navbar header={title}></h8k-navbar>
      {
        isForm && <JobApplicationForm
          formData={formData}
          setFormData={setFormData}
          setForm={setForm}
          setPreview={setPreview}
          setSuccess={setSuccess}
          validate={validate}
          errors={errors}

        />
      }
      {
        isPreview && <Preview
          setForm={setForm}
          setPreview={setPreview}
          setSuccess={setSuccess}
          setFormData={setFormData}
          formData={formData}
          validate={validate}
          error={errors}


        />
      }
      {
        isSuccess && <SuccessMessage
          setFormData={setFormData}
          setForm={setForm}
          setSuccess={setSuccess}
          validate={validate}
          error={errors}

        />
      }
    </div>
  );
};

export default App;
