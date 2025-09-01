import React, { useState } from "react";
import "./index.css";

function CustomerList() {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);

  const handleSubmit = () => {
    if (input === '')
      return;
    setData([...data, input]);
    setInput('');
  }

  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="large"
          placeholder="Name"
          data-testid="app-input" />
        <button
          onClick={handleSubmit}
          type="submit"
          className="ml-30"
          data-testid="submit-button">Add Customer</button>
      </section>

      {data.length > 0 && <ul className="styled mt-50" data-testid="customer-list">
        {data.map((item, index) => (
          <li className="slide-up-fade-in" data-testid={`list-item${index}`} key={index} >{item}</li>
        ))
        }
      </ul>}
    </div>
  );
}

export default CustomerList