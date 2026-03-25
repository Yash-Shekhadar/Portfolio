import {
  FaJava, FaPython, FaJs, FaReact, FaNode, FaGit, FaMicrochip, 
  FaCss3Alt, FaDatabase,
} from "react-icons/fa";

import {
  SiCplusplus, SiErlang, SiGo, SiHtml5,
  SiMysql, SiMariadb, SiPostgresql, SiSqlite, SiMongodb,
  SiKeras, SiTensorflow, SiScikitlearn, SiBootstrap,
  SiFlask, SiPandas, SiJira, SiPostman, SiAndroidstudio,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

export default function Skills() {
  const skills = {
  Languages: [
    { name: "Java", icon: <FaJava /*color="#f89820"*/ />, url: "https://www.oracle.com/java/" },
    { name: "Python", icon: <FaPython />, url: "https://www.python.org/" },
    { name: "C/C++", icon: <SiCplusplus />, url: "https://isocpp.org/" },
    { name: "Erlang", icon: <SiErlang />, url: "https://www.erlang.org/" },
    { name: "JavaScript", icon: <FaJs />, url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "Go", icon: <SiGo />, url: "https://go.dev/" },
    { name: "HTML", icon: <SiHtml5 />, url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", icon: <FaCss3Alt />, url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  ],

  Databases: [
    { name: "MySQL", icon: <SiMysql />, url: "https://www.mysql.com/" },
    { name: "MariaDB", icon: <SiMariadb />, url: "https://mariadb.org/" },
    { name: "PostgreSQL", icon: <SiPostgresql />, url: "https://www.postgresql.org/" },
    { name: "SQLite", icon: <SiSqlite />, url: "https://www.sqlite.org/" },
    { name: "MongoDB", icon: <SiMongodb />, url: "https://www.mongodb.com/" },
  ],

  Frameworks: [
    { name: "React", icon: <FaReact />, url: "https://react.dev/" },
    { name: "Node.js", icon: <FaNode />, url: "https://nodejs.org/" },
    { name: "Keras", icon: <SiKeras />, url: "https://keras.io/" },
    { name: "Scikit-Learn", icon: <SiScikitlearn />, url: "https://scikit-learn.org/" },
    { name: "TensorFlow", icon: <SiTensorflow />, url: "https://www.tensorflow.org/" },
    { name: "NLTK", icon: <FaPython />, url: "https://www.nltk.org/" },
    { name: "Bootstrap", icon: <SiBootstrap />, url: "https://getbootstrap.com/" },
    { name: "Flask", icon: <SiFlask />, url: "https://flask.palletsprojects.com/" },
    { name: "Pandas", icon: <SiPandas />, url: "https://pandas.pydata.org/" },
    { name: "OpenMP", icon: <FaMicrochip />, url: "https://www.openmp.org/" },
  ],

  "Developer Tools": [
    { name: "Git", icon: <FaGit />, url: "https://git-scm.com/" },
    { name: "Jira", icon: <SiJira />, url: "https://www.atlassian.com/software/jira" },
    { name: "VS Code", icon: <VscCode />, url: "https://code.visualstudio.com/" }, //no official icon in react-icons
    { name: "Android Studio", icon: <SiAndroidstudio />, url: "https://developer.android.com/studio" },
    { name: "Oracle SQL Developer", icon: <FaDatabase />, url: "https://www.oracle.com/database/sqldeveloper/" },
    { name: "Postman", icon: <SiPostman />, url: "https://www.postman.com/" },
  ],
};

  return (
    <section id="skills" className="section">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>

        <div className="skills-category-wrapper">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skills-category">
              <h3 className="skills-category-title">{category}</h3>

              <div className="skills-grid">
                {items.map((skill, index) => (
                  <a
                    key={index}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-card"
                    title={skill.name}
                  >
                    {skill.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// export default function Skills() {
//   const skills = {
//     Languages: ["Java", "Python", "C/C++", "Erlang", "Javascript", "Go", "HTML/CSS"],
//     Databases: ["MySQL", "MariaDB", "PostegreSQL", "SQLite", "MongoDB"],
//     Frameworks: ["React.js", "Node.js", "Keras", "Scikit-Learn", "Tensorflow", "NLTK", "Bootstrap", "Flask", "Pandas", "OpenMP"],
//     "Developer Tools": ["Git", "Jira", "VS Code", "Android Studio", "Oracle SQL Developer", "Postman"],
//   };

//   return (
//     <section id="skills" className="section">
//       <div className="section-container">
//         <h2 className="section-title">Skills</h2>

//         <div className="skills-category-wrapper">
//           {Object.entries(skills).map(([category, items]) => (
//             <div key={category} className="skills-category fade-in">
//               <h3 className="skills-category-title">{category}</h3>

//               <div className="skills-grid">
//                 {items.map((skill, index) => (
//                   <div key={index} className="skill-card">
//                     {skill}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }