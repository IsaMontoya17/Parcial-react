import React, { useState } from 'react';
import Form from "./components/form/Form";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    favoriteColor: "",
    email: "",
  });
  const [showSummary, setShowSummary] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (
      formData.name.length >= 3 && !formData.name.startsWith(" ") && formData.favoriteColor.length >= 6 && regexEmail.test(formData.email)) {
      setError(false);
      setShowSummary(true);
    } else {
      setError(true);
      setShowSummary(false);
    }
  };

  return (
    <main>
      <h2>Llena el Formulario:</h2>
      <Form formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} showSummary={showSummary} error={error}
      />
    </main>
  );
}

export default App;
