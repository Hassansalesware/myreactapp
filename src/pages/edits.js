import React, { useState, useEffect } from 'react';

export default function Edits() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make an API request to update the data
    fetch("http://saleswareltd.com/PMS_Hamza_API/api/doctor/update", {
      method: "PUT", // or "PATCH" depending on your API
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Handle the API response here
        alert("Data updated successfully.");
      })
      .catch((error) => {
        console.error("API request failed:", error);
        alert("Data update failed.");
      });
  };

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch("http://saleswareltd.com/PMS_Hamza_API/api/doctor/getall")
      .then((res) => res.json())
      .then((data) => {
        // Set the API data as the initial state for the form fields
        setFormData(data[0]);
      });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstname"
        value={formData.firstname || ''}
        onChange={handleChange}
        placeholder={formData.firstname || 'First Name'}
      />
      <input
        type="text"
        name="lastname"
        value={formData.lastname || ''}
        onChange={handleChange}
        placeholder={formData.lastname || 'Last Name'}
      />
      <input
        type="email"
        name="email"
        value={formData.email || ''}
        onChange={handleChange}
        placeholder={formData.email || 'Email'}
      />
      <input
        type="date"
        name="dob"
        value={formData.dob || ''}
        onChange={handleChange}
        placeholder={formData.dob || 'Date Of Birth'}
      />
      <input
        type="text"
        name="contact"
        value={formData.contact || ''}
        onChange={handleChange}
        placeholder={formData.contact || 'Contact'}
      />
      <input
        type="text"
        name="address"
        value={formData.address || ''}
        onChange={handleChange}
        placeholder={formData.address || 'Address'}
      />
      <input
        type="text"
        name="country"
        value={formData.country || ''}
        onChange={handleChange}
        placeholder={formData.country || 'Country'}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
