import React, { useState } from 'react';

const SellerForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    category: 'electronics'
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      location: '',
      category: 'electronics'
    });
  };

  return (
    <div className="form-container">
      <h3>Register New Seller</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Seller Name</label>
        <input 
          type="text" 
          id="name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />

        <label htmlFor="email">Seller Email</label>
        <input 
          type="email" 
          id="email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />

        <label htmlFor="location">Seller Location</label>
        <input 
          type="text" 
          id="location" 
          value={formData.location}
          onChange={handleChange}
          required 
        />

        <label htmlFor="category">Product Category</label>
        <select 
          id="category" 
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="furniture">Furniture</option>
        </select>

        <button type="submit">Register Seller</button>
      </form>
    </div>
  );
};

export default SellerForm;