import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = 'https://script.google.com/macros/s/AKfycbwaKfLQQuKvWY42B_IcAnx5v54-XvexdG0nwsiw11seG-6q3NtMVRZwOteSp8E12gasTA/exec';

    try {
      const form = new FormData();
      form.append('name', name);

      const response = await axios.post(url, form);
      setMessage(response.data);
      setName('');
    } catch (error) {
      setMessage('Error submitting name.');
    }
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>Save Name to Google Sheet</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
          style={{ padding: '10px', width: '250px', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Submit
        </button>
      </form>
      <p style={{ marginTop: '20px' }}>{message}</p>
    </div>
  );
}

export default App;
