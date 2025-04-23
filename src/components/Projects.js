import React from 'react';
import ManikantaImage from '../assets/chat.jpeg';
import discounts from '../assets/Discounts.jpeg';
import quiz from '../assets/Quiz_application.png';
import result from '../assets/result.png';
function Projects() {
  return (
    
    <div className="projects">
        
      <h2>My Projects</h2>

      <div className="projects-container">
        {/* Project 1 */}
        <div className="project-card">
          <div className="project-info">
            <h3>Travel Guide</h3>
            <p>
            Developed an AI-powered travel itinerary planner using Amazon Bedrock’s Claude 3.5 Sonnet model, enabling chat-based interaction to generate personalized day-by-day travel plans. Built a CLI application in Python with Boto3, incorporating structured dialogue, retry mechanisms, and itinerary generation with local recommendations. Future scope includes web interface, voice assistant integration, and PDF export features.
            </p>
            <div className="tech-stack">
            <p><b>Skills:</b>Python, Amazon Bedrock, CLI Application Development, API Integration, Boto3 (AWS SDK for Python)</p>
            </div>
            <div className="project-links">
              <a href="https://github.com/Manikanta-kandula/Travel-Guide" className="github-link">GitHub</a>
            </div>
          </div>
          <div className="project-image">
          <img 
          src={ManikantaImage} 
          alt="Manikanta Reddy Kandula" 
          className="project1-img" 
        />
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <div className="project-info">
            <h3>Sales Dasboard</h3>
            <p>
            Built a serverless e-commerce sales analytics solution using AWS services including S3, Glue, Athena, and QuickSight. Developed ETL pipelines in AWS Glue to clean and transform raw CSV data for analysis. Queried large datasets with Athena and visualized insights like revenue trends and top-selling products using interactive QuickSight dashboards. Automated schema cataloging and enabled efficient, scalable reporting on customer behavior and regional performance.
            </p>
            <div className="tech-stack">
            <p><b>Skills:</b>JavaScript, ExpressJs, NodeJs, PortgreSQL, Css, Rest API, Json</p>
            </div>
            <div className="project-links">
              <a href="https://github.com/Manikanta-kandula/Sales-Dashboard/tree/main" className="github-link">GitHub</a>
            </div>
          </div>
          <div className="project-image">
          <img 
          src={discounts} 
          alt="discounts" 
          className="project1-img" 
        />
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <div className="project-info">
            <h3>Accurate Rainfall Prediction</h3>
            <p>
            I developed a precise rainfall prediction model using supervised machine learning, utilizing a comprehensive dataset with parameters such as temperature and humidity. After thorough preprocessing, the dataset is input into Support Vector Machine (SVM) and Artificial Neural Network (ANN) classifiers, producing outputs indicating the likelihood of rainfall.
            </p>
            <div className="tech-stack">
            <p><b>Skills:</b>Python,Matlab</p>
            </div>
            <div className="project-links">
              <a href="https://github.com/Manikanta-kandula/ML-Rainfall" className="github-link">GitHub</a>
            </div>
          </div>
          <div className="project-image">
          <img 
          src={result} 
          alt="result" 
          className="project1-img" 
        />
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <div className="project-info">
            <h3>Quiz Application</h3>
            <p>
            This application is a quiz platform designed to challenge users on their knowledge of various programming languages. Users can select different difficulty levels - Basic, Medium, or Hard, and then choose the programming language they want to be quizzed on. For instance, if a user selects Python, the application will present questions related to Python programming.
            </p>
            <div className="tech-stack">
            <p><b>Skills:</b>AWS (S3, Glue, Athena, QuickSight), Python, SQL, Data Visualization, ETL Pipelines, Cloud Analytics</p>
            </div>
            <div className="project-links">
              <a href="https://github.com/Manikanta-kandula/Quiz-Application" className="github-link">GitHub</a>
            </div>
          </div>
          <div className="project-image">
          <img 
          src={quiz} 
          alt="quiz-alt" 
          className="project1-img" 
        />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
