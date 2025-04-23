import React from 'react';

function Skills() {
  const skills = [
    'JavaScript',
    'React',
    'GraphQL',
    'Next.js',
    'Networking',
    'Restful API',
    'PowerBI',
    'Java',
    'Node.js',
    'Python',
    'HTML',
    'CSS',
    'Git',
    'MySQL',
    'PostgreSQL',
    'Linux',
    'AWS',
    'Docker'
  ];

  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
