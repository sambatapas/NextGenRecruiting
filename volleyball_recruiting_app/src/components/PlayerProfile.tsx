import React, { useState } from 'react';

const PlayerProfile = () => {
  const [profile, setProfile] = useState({
    position: '',
    graduationYear: '',
    height: '',
    verticalReach: '',
    gpa: '',
    preferredRegion: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Profile submitted:', profile);
  };

  return (
    <div className="pt-16">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-white">Player Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Position</label>
            <input
              type="text"
              name="position"
              value={profile.position}
              onChange={handleChange}
              className="input-field w-full"
              placeholder="Enter your position"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Graduation Year</label>
            <input
              type="text"
              name="graduationYear"
              value={profile.graduationYear}
              onChange={handleChange}
              className="input-field w-full"
              placeholder="Enter your graduation year"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Height</label>
            <input
              type="text"
              name="height"
              value={profile.height}
              onChange={handleChange}
              className="input-field w-full"
              placeholder="Enter your height"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Vertical Reach</label>
            <input
              type="text"
              name="verticalReach"
              value={profile.verticalReach}
              onChange={handleChange}
              className="input-field w-full"
              placeholder="Enter your vertical reach"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">GPA</label>
            <input
              type="text"
              name="gpa"
              value={profile.gpa}
              onChange={handleChange}
              className="input-field w-full"
              placeholder="Enter your GPA"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">Preferred Region</label>
            <input
              type="text"
              name="preferredRegion"
              value={profile.preferredRegion}
              onChange={handleChange}
              className="input-field w-full"
              placeholder="Enter preferred region"
            />
          </div>
          <button type="submit" className="btn-primary w-full mt-4">Submit Profile</button>
        </form>
      </div>
    </div>
  );
};

export default PlayerProfile;
