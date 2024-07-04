import React, { useState } from 'react';
import './Vd.css';

const Vd = () => {
  const [name, setName] = useState('');
  const [channel, setChannelName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('channel', channel);
    formData.append('description', description);
    formData.append('image', image);

    try {
      const response = await fetch('http://localhost:8082/insertvalues', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error uploading data');
      }
      const result = await response.json();
      setSuccess(result.message);
      console.log(result);
    } catch (error) {
      setError(error.message);
      console.error('Error uploading data:', error);
    }
  };

  return (
    <>
      <div className="detailscontainer">
        <div className="detailbox">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="channel">Channel Name:</label>
              <input
                type="text"
                id="channel"
                value={channel}
                onChange={(e) => setChannelName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="image">Photo:</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </div>
            <button type="submit" className='vbtn'>Submit</button>
          </form>
          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}
        </div>
      </div>
    </>
  );
};

export default Vd;
