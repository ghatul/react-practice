import React, { useState } from "react";

const App = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name required";
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email";
    if (form.password.length < 6) newErrors.password = "Min 6 chars";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      alert("Submitted");
      setForm({ name: "", email: "", password: "" });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({...form, name: e.target.value})}/>
      <p>{errors.name}</p>

      <input placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({...form, email: e.target.value})}/>
      <p>{errors.email}</p>

      <input type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({...form, password: e.target.value})}/>
      <p>{errors.password}</p>

      <button type="submit">Submit</button>
    </form>
  );
};

export default App;