export default function Work() {
  return (
    <section id="work" className="section">
      <h2>Work Experience</h2>

      <div className="timeline">

        <div className="timeline-item">
          <span>Aug. 2023 – Present</span>
          <h3>Software Engineer</h3>
          <h4>Barclays</h4>
          <p>
            Implemented Java-based server-side components and React user interface functionality for onboarding a partner within Fraud
            Prevention Suite, writing and modifying application code in accordance with technical specifications
          </p>
          <p>
            Built end-to-end data sourcing logic for three feeds by writing Java and SQL code to retrieve data from Config tables or feed
            files, persist data to relational DB, and load data into Java BDM components for application processing and retrieval
          </p>
          <p>
            Refactored and modified application code across 4 repositories to migrate programs from Java 11 to Java 17, updating dependencies and resolving compatibility issues to ensure successful build and execution
          </p>
        </div>

        <div className="timeline-item">
          <span>Jun. 2022 – May. 2023</span>
          <h3>Research Intern</h3>
          <h4>University of Florida, Radiation Oncology Dept.</h4>
          <p>
            Developed a generative adversarial network based super-resolution algorithm in collaboration with Nvidia AITC for
            enhancing the spatial resolution of 2-D MRI scans with a reconstruction score of 98% on test data
          </p>
          <p>
            Reduced model training time by 25% using a transfer learning approach. Trained and tested the GAN model on Nvidia A100 using SLURM
          </p>
        </div>

        <div className="timeline-item">
          <span>Jul. 2020 – Oct. 2020</span>
          <h3>Software Engineering & Machine Learning Intern</h3>
          <h4>Suzlon Global Services (Data Analytics Dept.)</h4>
          <p> 
            Designed and implemented a data analytics portal using Node.js to visualize performance, and detect anomalies in the
            behavior of wind turbines backed by time series analysis, machine learning, and deep learning models. The website along with
            an extensive data pre-processing pipeline was tested on 12000+ turbines to provide valuable insights
          </p>
          <p>
            Implemented an MS-SQL-based backend to fetch sensor data, process the data, and execute ML/DL models on it and storing
            the analytical results back into the database leading to a 90 % reduction in data loading and processing times
          </p>
        </div>

        <div className="timeline-item">
          <span>Jul. 2020 – Oct. 2020</span>
          <h3>Software Engineer Intern (Web & App Development)</h3>
          <h4>TERRE Policy Center (Smart Campus Cloud Network)</h4>
          <p> 
            Developed a data collection website using Bootstrap, JS, and PHP to gather data on direct and indirect sources of
            greenhouse gas(GHG) emissions
          </p>
          <p>
            Deployed a mobile application using the Flutter framework by Google to visualize data of GHG emissions from 12 sources
            and 3 scopes to give a detailed overview of emission-causing sources in an organization
          </p>
        </div>

      </div>
    </section>
  );
}
