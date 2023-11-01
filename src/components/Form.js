import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Validate first name
    if (firstName.trim() === "") {
      setErrors(["First name is required"]);
      return;
    }

    const formData = { firstName, lastName };
    const dataArray = [...submittedData, formData];

    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
    setErrors([]);
  }

  const listOfSubmissions = submittedData.map((data, index) => (
    <div key={index}>
      {data.firstName} {data.lastName}
    </div>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleFirstNameChange}
          value={firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleLastNameChange}
          value={lastName}
        />
        <button type="submit">Submit</button>
      </form>
      <h3>Submissions</h3>
      {errors.length > 0 && (
        errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      )}
      {listOfSubmissions}
    </div>
  );
}

export default Form;
