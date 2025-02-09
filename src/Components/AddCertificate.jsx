import React from 'react';
// import './AddCertificate.css';

const AddCertificate = () => {
  return (
    <div className="add-certificate-container">
      <h2>Add Certificate</h2>
      <form>
        <input type="text" placeholder="Certificate ID" />
        <input type="text" placeholder="User ID" />
        {/* Add more input fields as needed */}
        <button type="submit">Add Certificate</button>
      </form>
    </div>
  );
};

export default AddCertificate;