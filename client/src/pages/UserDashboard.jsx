import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserDashboard() {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    axios.get('/api/profile')
     .then(response => {
        setProfile(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put('/api/profile', profile)
     .then(response => {
        setProfile(response.data);
      })
     .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <h2>Profile</h2>
      <form onSubmit={handleUpdate}>
        <label>
          Name:
          <input type="text" value={profile.name} onChange={(event) => setProfile({...profile, name: event.target.value })} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={profile.email} onChange={(event) => setProfile({...profile, email: event.target.value })} />
        </label>
        <br />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default UserDashboard;