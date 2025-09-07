import React, { useState } from "react";

const Profile = () => {

  const [formData, setFormData] = useState({
    firstName: "Sherlock",
    lastName: "Holmes",
    email: "sherlockholmes@email.com"
  })
  const [isClicked, setIsClicked] = useState(false);


  const handleChange = (e) => {
    if (!isClicked)
      return;
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }

  const handleToggle = (e) => {
    e.preventDefault();
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.email.trim()) {
      alert("Please enter all profile fields");

    } else
      if (isClicked) {
        alert("Profile updated successfully")
        setIsClicked(false);
      } else {

        setIsClicked(true);
      }

  }
  return (
    <div className="w-40 mr-75">
      <div className="card pa-50">
        <h1>User Profile</h1>
        <form>
          <div className="layout-column mb-15">
            <label htmlFor="firstname" className="mb-3">
              First Name
            </label>
            {
              isClicked ? (<input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={handleChange}
                data-testid="firstNameInput"
              />) : (<div className="card pa-8" data-testid="firstNameDiv">
                {formData.firstName}
              </div>)
            }


          </div>
          <div className="layout-column mb-15">
            <label htmlFor="lastname" className="mb-3">
              Last Name
            </label>
            {
              isClicked ? (<input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter Last Name"
                data-testid="lastNameInput"
                value={formData.lastName}
                onChange={handleChange}
              />) : (<div className="card pa-8" data-testid="lastNameDiv">{formData.lastName}</div>)
            }

          </div>
          <div className="layout-column mb-30">
            <label htmlFor="email" className="mb-3">
              Email
            </label>
            {isClicked ? (<input
              type="text"
              id="email"
              name="email"
              placeholder="Enter Email"
              data-testid="emailInput"
              value={formData.email}
              onChange={handleChange}
            />) : (<div className="card pa-8" data-testid="emailDiv">{formData.email}</div>)}

          </div>
          <div className="layout-row justify-content-end">
            {
              !isClicked ? (<button
                onClick={handleToggle}
                type="submit" className="mx-0" data-testid="changeButton"
              >
                Edit Profile
              </button>) : (<button
                onClick={handleToggle}
                type="submit" className="mx-0" data-testid="changeButton"
              >
                Save Changes
              </button>)
            }
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
