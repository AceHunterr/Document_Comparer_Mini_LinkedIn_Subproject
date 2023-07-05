import React, { useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import "./App.css";
function App() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div className="App">
      <div className="job-detail-header-div">
        <h2 className="jobs-text job-detail-heading">Compare Documents</h2>
      </div>
      <div className="row">
        <div className="dropdown">
          <label htmlFor="cerDropdown">CER:</label>
          <br />
          <select id="cerDropdown" className="custom-dropdown">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="ercDropdown">ERC:</label>
          <br />
          <select id="ercDropdown" className="custom-dropdown">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="dropdown">
          <label htmlFor="categoryDropdown">Select Category</label>
          <br />
          <select id="categoryDropdown" className="custom-dropdown">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="sectionDropdown">Select Section</label>
          <br />
          <select id="sectionDropdown" className="custom-dropdown">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="dropdown">
          <label htmlFor="title-text">Title</label>
          <br />
          <input />
        </div>
        <div className="dropdown">
          <label htmlFor="title-text">Type of Document</label>
          <br />
          <input />
        </div>
      </div>

      <div className="row">
        <div className="dropdown">
          <label htmlFor="datePicker">Start Date:</label>
          <br />
          <Datetime
            id="startDatePicker"
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>

        <div className="dropdown">
          <label htmlFor="datePicker">End Date:</label>
          <br />
          <Datetime
            id="endDatePicker"
            value={endDate}
            onChange={handleEndDateChange}
          />
        </div>
      </div>

      {/* <div>
        <label htmlFor="datePicker">Date:</label>
        <Datetime
          id="datePicker"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div> */}

      <div className="row">
        <div className="dropdown">
          <button className="login-btn">Compare</button>
        </div>
        <div className="dropdown">
          <button className="login-btn">Refresh</button>
        </div>
      </div>
    </div>
  );
}

export default App;
