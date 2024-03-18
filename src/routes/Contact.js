
import React, { useState } from 'react';
import "./Contact.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    name: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can handle form submission logic here
  };

  return (
    <div>
      <Navbar />
      <div className="content">
        <div className="form-page">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <textarea id="address" name="address" value={formData.address} onChange={handleChange}></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="message">
          <p>Insert your details so that we will contact you for more updates. Best of luck for upcoming sessions.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
