import React from "react";

interface Person {
  name: string;
  birth: string;
}

interface TableProps {
  parameter: string;
}

const Table: React.FC<TableProps> = ({ parameter }) => {
  const people: Person[] = [
    {
      name: "Rhianna Johnson",
      birth: "11/30/2011",
    },
    {
      name: "Aiden Shaw",
      birth: "09/16/1992",
    },
    {
      name: "Trevon Floyd",
      birth: "01/16/1992",
    },
    {
      name: "Melanie Yates",
      birth: "12/12/2001",
    },
    {
      name: "Chris Andrews",
      birth: "02/09/1891",
    },
    {
      name: "Jacinda Miller",
      birth: "12/01/1982",
    },
    {
      name: "Will Davis",
      birth: "11/30/2011",
    },
    {
      name: "Eliza Baxter",
      birth: "10/31/1999",
    },
  ];


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
        </table>
      </div>
    </div>
  );
};

export default Table;
