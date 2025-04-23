import React from 'react';
import srm from '../assets/srm.png';
import ManikantaImage from '../assets/umkc.png';
const Education = () => {
  return (
    <section className="education">
      <h2>My Education</h2>
      <div className="education-card">
        <div className="education-logo">
        <img 
  src={ManikantaImage} 
  alt="Manikanta Reddy Kandula" 
  className="umkc-img" 
/>
        </div>
        <div className="education-details">
  <h3>Master's in Computer Science</h3>
  <p>University of Missouri-Kansas City</p>
  <p>Graduated in 2023</p>
  <ul>
    <li>Specialization in AI</li>
  </ul>
</div>

      </div>
      {/* If you don't need a second image, you can remove it, or provide a valid image path */}
      <div className="education-card1">
        <div className="education-details">
          <h3>Bachelor of Computer Science</h3>
          <p>SRM University</p>
          <p>Graduated in 2020</p>
        </div>
        <div className="education-logo">
        <img 
  src={srm}
  alt="srm" 
  className="srm-img" 
/>
        </div>
      </div>
    </section>
  );
};

export default Education;
