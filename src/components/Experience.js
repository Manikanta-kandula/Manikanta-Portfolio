import React from 'react';

const Experience = () => {
  return (
    <section className="experience">
      <h2>My Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Systems Project Consultant</h3>
            <p className="company">Florida Dept. of Agriculture and Consumer Services</p>
            <p className="description">
           - Led the development, implementation, and maintenance of enterprise software applications to meet operational needs of the department.
<br/>
- Designed, developed, tested, and deployed software solutions, ensuring alignment with business objectives.
<br/>
- Managed security and rights management roles for external systems, such as the Driver and Vehicle Information Database (DAVID), ensuring secure and efficient operation.
<br/>
- Collaborated with cross-functional teams to define and implement project requirements, ensuring timely and cost-effective delivery.
<br/>
- Contributed to system troubleshooting and optimization, improving overall application performance and user experience.
            </p>
            <p className="date">Aug 2024 – Present</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>IT Specialist 2</h3>
            <p className="company">NYS Office of ITS</p>
            <p className="description">
           - Managed the installation, configuration, and maintenance of enterprise software applications, ensuring their optimal performance.
           <br/>
- Coordinated system upgrades and migrations, using version control and SQL scripts to ensure smooth transitions.
<br/>
- Developed and maintained detailed technical documentation, including installation guides and system manuals.
<br/>
- Provided on-call support for system troubleshooting and emergency migrations, minimizing operational disruptions.
<br/>
- Collaborated with cross-functional teams to implement new procedures and resolve technical issues in a timely manner.


            </p>
            <p className="date">Jan 2024 – Jul 2024</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3>Software Developer</h3>
            <p className="company">Maxicure Pharma Pvt. Ltd. </p>
            <p className="description">
            - Spearheaded frontend development using React.js to create intuitive and user-friendly interfaces for mobile repair automation applications, as a full-stack software engineer.
            <br/>
- Collaborated with UI/UX designers to translate design specifications into responsive and visually appealing frontend components, significantly improving the user experience.
<br/>
- Facilitated seamless collaboration between frontend and backend teams to ensure cohesive integration of user interfaces with backend functionalities in mobile repair automation solutions.
<br/>
- Utilized state management libraries and advanced React.js features to optimize application performance and responsiveness.
<br/>
- Developed new features using  Next.js, Python, JavaScript, Tailwind CSS, MySQL, and REST APIs.
<br/>
- Created an email notification system to send weekly/monthly summaries to merchants, detailing Paytm cart activities (created, paid, and cancelled).
<br/>
Integrated Paytm into numerous stores, ensuring seamless payment processing across platforms.
            </p>
            <p className="date">May 2020 – Dec 2021</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
