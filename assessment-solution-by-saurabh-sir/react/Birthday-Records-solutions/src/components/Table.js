import React from "react";

const Table = ({ parameter }) => {
  const people = [
    { name: "Rhianna Johnson", birth: "11/30/2011" },
    { name: "Aiden Shaw", birth: "09/16/1992" },
    { name: "Trevon Floyd", birth: "01/16/1992" },
    { name: "Melanie Yates", birth: "12/12/2001" },
    { name: "Chris Andrews", birth: "02/09/1891" },
    { name: "Jacinda Miller", birth: "12/01/1982" },
    { name: "Will Davis", birth: "11/30/2011" },
    { name: "Eliza Baxter", birth: "10/31/1999" },
  ];

  let sortedPeople = [...people];

  if (parameter === "name") {
    sortedPeople.sort((a, b) => a.name.localeCompare(b.name));
  } else if (parameter === "age") {
    // older first => sort by ascending birthdate
    sortedPeople.sort(
      (a, b) => new Date(a.birth).getTime() - new Date(b.birth).getTime()
    );
  }

  return (
    <div className="table-div">
      <div className="card w-50 mx-auto mt-20 pb-30">
        <table data-testid="table">
          <thead>
            <tr>
              <th className="course-name">Person Name</th>
              <th className="duration">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {sortedPeople.map((person, index) => (
              <tr key={index}>
                <td>{person.name}</td>
                <td>{person.birth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
