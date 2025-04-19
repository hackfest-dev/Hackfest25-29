import React, { useState } from 'react';

const WarehouseForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    maxCapacity: ''
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
      location: '',
      maxCapacity: ''
    });
  };

  return (
    <div className="bg-[#292929] p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <h3 className="text-2xl text-[#ADD8E6] mb-6">Register New Warehouse</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="text-[#ADD8E6]">Warehouse Name</label>
        <input 
          type="text" 
          id="name" 
          value={formData.name}
          onChange={handleChange}
          required 
          className="w-full p-3 mb-4 bg-[#444] rounded-md text-white focus:outline-none"
        />

        <label htmlFor="location" className="text-[#ADD8E6]">Location</label>
        <input 
          type="text" 
          id="location" 
          value={formData.location}
          onChange={handleChange}
          required 
          className="w-full p-3 mb-4 bg-[#444] rounded-md text-white focus:outline-none"
        />

        <label htmlFor="maxCapacity" className="text-[#ADD8E6]">Max Capacity</label>
        <input 
          type="number" 
          id="maxCapacity" 
          value={formData.maxCapacity}
          onChange={handleChange}
          required 
          className="w-full p-3 mb-6 bg-[#444] rounded-md text-white focus:outline-none"
        />

        <button type="submit" className="w-full py-3 bg-[#ADD8E6] text-[#292929] font-bold rounded-md">Register Warehouse</button>
      </form>
    </div>
  );
};

export default WarehouseForm;
