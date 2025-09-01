import React from "react";

const JobApplicationForm = ({formData,setFormData,setForm,setPreview,setSuccess,validate,errors}) => {
  
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value});
  }
  const handleReset=(e)=>{
    e.preventDefault();
    setFormData({
      name:'',
      email:'',
      experience:''
    });
    validate(true);
  }
  const handlePreview=(e)=>{
     e.preventDefault();  
   
    if( validate(false)){
       setPreview(true);
       setForm(false);
       setSuccess(false);
    }
    
  }
  return (
    <form data-testid="job-application-form" className="layout-column ml-auto">
      <h2 className="ma-auto pa-20">Provide your details</h2>
      <div>
        <label className="font-weight-bold">
          Name:
          <input
            data-testid="input-name"
            type="text"
            name="name"
            value={formData.name}
            className="pa-10 ml-120"
            onChange={handleChange}
          />
        </label>
       {errors.name!=="" &&<p data-testid="error-name" className="error">
          {errors.name}
        </p>}
      </div>
      <div>
        <label className="font-weight-bold">
          Email:
          <input
            data-testid="input-email"
            type="email"
            name="email"
            value={formData.email}
            className="pa-10 ml-120"
             onChange={handleChange}
          />
        </label>
        {errors.email!=="" &&<p data-testid="error-email" className="error">
          {errors.email}
        </p>}
      </div>
      <div>
        <label className="font-weight-bold">
          Experience (years):
          <input
            data-testid="input-experience"
            type="text"
            name="experience"
            value={formData.experience}
            className="pa-10 ml-20"
             onChange={handleChange}
          />
        </label>
        {errors.experience!=="" &&<p data-testid="error-experience" className="error">
          {errors.experience}
        </p>}
      </div>
      <div className="ml-100">
        <button data-testid="preview-button" type="submit" className="mx-50"
         onClick={handlePreview}
        >
          Preview
        </button>
        <button data-testid="reset-button" type="button" className="mx-50"
         onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default JobApplicationForm;
