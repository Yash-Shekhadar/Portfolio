export default function Projects() {
  return (
    <section id = "projects" className="section">
      <h2>Projects</h2>

      <div className="card-grid">

        <div className="card">
          <h3>Crypto Currency Mining</h3>
          <p>Sept 2022 - Oct 2022</p>
          <p>Distributed Systems, Networking, Erlang </p>
          <ul>
            <li>
              Developed a distributed crypto-currency mining system using Actor Model in Erlang. The system is capable to scan 80 million records in under a minute while working asynchronously
            </li>
            <li>
              Deployed system onto the local network and distributed the workload over multiple actors spread over the local network
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Smart Trading System</h3>
          <p>March 2022 - April 2022</p>
          <p>Python, Time Series, Deep Learning, Keras </p>
          <ul>
            <li>
              Developed and trained a CNN+LSTM model on 40 years of time series data of S&P500 and Schiller P/E ratio  
              </li>
            <li>
              Integrated the model generated market signals to create a smart trading system that can predict buy/sell values of stocks and generate a portfolio gain of 300% over 5 years
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>P2P Distributed File Sharing System</h3>
          <p>Sept 2021 - Dec 2021</p>
          <p>Java, Networking, Distributed Systems</p>
          <ul>
            <li>
              Developed a distributed and multi-threaded peer-to-peer file sharing system using Java with structured peer communication algorithm for efficient and fault-tolerant file transmission
            </li>
            <li>
              Obtained 3 times better transmission speed over traditional file transfer architecture with fair and distributed network utilization
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>QuizMe: NLP based Quiz Generator</h3>
          <p>Jan 2021 - Feb 2021</p>
          <p>NLP, Data Mining, Web Development</p>
          <ul>
            <li>
              Implemented a fast and robust quiz generation bot which can generate sensible objective questions from any text data provided to it from over 400k stories
            </li>
            <li>
              Word2Vec and NER KB was used to generate the blank type or objective questions. Rule based generation was used for generating WH questions
            </li>
          </ul>
        </div>

        <div className="card">
          <h3>Ground Water Analytics Dashboard</h3>
          <p>June 2020 - August 2020</p>
          <p>Python, ML, Javascript, Bootstrap</p>
          <ul>
            <li>
              Deployed a country-wide Data Analytics dashboard to analyse groundwater levels and categorise a state/district/block as Improving or Declining using Time Series Analysis algorithms
            </li>
            <li>
              Visualized the analysed results on an interactive map using SVG, Javascript and Kepler (ArcGIS tool)
            </li>
            <li>
              This solution won 1st prize of $1500 at Smart India Hackathon 2020 and the App for the same has 10,000+ downloads on Google Play Store
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
