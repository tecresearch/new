import React from "react";

const Radio = ({ sortBy, selected }) => {
  return (
    <div className="layout-row align-items-center justify-content-center mt-75">
      <label htmlFor="sortBy">Sort By</label>

      <input
        type="radio"
        id="nameRadio"
        value="name"
        name="sortBy"
        data-testid="name"
        title="Sort by name"
        checked={selected === "name"}
        onChange={(e) => sortBy(e.target.value)}
      />
      <label htmlFor="nameRadio" className="px-4">
        Name
      </label>

      <input
        type="radio"
        id="ageRadio"
        value="age"
        name="sortBy"
        data-testid="age"
        title="Sort by age"
        checked={selected === "age"}
        onChange={(e) => sortBy(e.target.value)}
      />
      <label htmlFor="ageRadio" className="px-4">
        Age
      </label>
    </div>
  );
};

export default Radio;
