import React from 'react';
import Navbar from '../components/Navbar';
import BoardMembers from '../components/BoardMembers';
import AboutInfo from '../components/AboutInfo';

const About: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-start p-6" style={{ backgroundColor: '#170566' }}>
    <div className="w-full max-w-7xl">
      <Navbar />
      <div className="mb-12" />
      <AboutInfo />
      <div className="mt-12" />
      <BoardMembers />
    </div>
  </div>
);

export default About; 