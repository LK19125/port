import React, { useState } from "react";
import "../styles/contactStyle.css";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    access_key: "095c3044-ef7c-4369-95ef-fb08cce0f581",
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Please wait...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const json = await response.json();

      if (response.status === 200) {
        setResult(json.message);
      } else {
        setResult(json.message || "Something went wrong!");
      }

      setFormData({
        name: "",
        email: "",
        message: "",
        access_key: "your-access-key-here",
      });

      setTimeout(() => {
        setResult("");
      }, 3000);
    } catch (error) {
      console.log(error);
      setResult("Something went wrong!");
    }
  };

  return (
    <>
      <h1 className="title">Contact</h1>
      <div className="contact">
        <div></div>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value={formData.access_key} />
          <input
            type="text"
            name="name"
            placeholder="enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="message here"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <input type="submit" value="Submit" />
          <p>{result}</p>
        </form>
      </div>
    </>
  );
};

export default Contact;
