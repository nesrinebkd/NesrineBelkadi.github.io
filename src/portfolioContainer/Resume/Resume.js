import React, { useEffect } from "react";
import "./Resume.css";
import { FaUserGraduate } from "react-icons/fa";
import { RiComputerFill } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import { IoMdColorWand } from "react-icons/io";
import ProgressBar from "@ramonak/react-progress-bar";
import useFetch from "./useFetch";
import { useState } from "react";
function Resume() {
  const [education, setEducation] = useState(true);
  const [programs, setPrograms] = useState(false);
  const [projects, setProjects] = useState(false);
  const [interts, setInterst] = useState(false);
  const [details, setDetails] = useState(false);
  const { data, error, isPending } = useFetch(
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/437133"
  );
  const resume = [
    {
      h1: "The Higher National School of Telecoms and ICT",
      h2: "Engineer Degree,Telecoms and Digital Technologie",
      h3: "Oran-Algeria",
      year: "2018-2023",
    },
    {
      h1: "High School",
      h2: "Maths field",
      h3: "Oran-Algeria",
      year: "2015-2018",
    },
  ];
  const programmingLanguges = [
    {
      field: "Web Devolpement",
      languages: ["Reactjs", "Nodejs", "Tensorfowjs", "Dnafojs", "PHP","MySQL","Mongodb"],
      pourcentages: [65, 65, 70, 70, 50,80,50],
    },
    {
      field: "Machine Learning",
      languages: ["Python", "Pandas", "Numpy", "Tensorflow", "scikit-learn"],
      pourcentages: [70, 80, 80, 70, 75],
    },
  ];
  const prjcts = [
    {
      field: "Web Develpmement",
      title: ["Integration of machine learning tools into web applications"],
      details: [
        [
          "Develop a fully independent tool in Reactjs, that can be integrated in any web application, which is qualified to detect the learning type (Regression or Classification) based on the data supplied by the user",
          "The user can select inputs and output from fields detected by the tool and architecture his own neural network without any programming expertise.",
          "A Browser-based Solution for data scientist",
          "Used Libraries: TensorFlowJS, DanfoJs, ReactJS, MaterialUI",
        ],
      ],
      link: ["https://github.com/nesrinebkd/my-app"],
    },
    {
      field: "Machine Learning",
      title: [
        "Fake/Real News classification.",
        "Algerian Forest fire classification.",
        "Xgboost Sales Prediction.",
        "Churn models",
        "Kmeans Iris project",
      ],
      details: [[], [], [], [], []],
      link: [
        "https://colab.research.google.com/drive/1M52v9KL0tqyWL97oz1od7AeXFDSe-qL-",
        "https://colab.research.google.com/drive/1X8ntYFhAtQJ9_ERBGCo694jHOsyuC2gv",
        "https://colab.research.google.com/drive/1vW7p1e0v5JEPVGKGZ5I_R1LFE6ELBjGB",
        "#",
        "https://colab.research.google.com/drive/1rVE4Fx906l_QC_XekJRuPbd1zeX8Ezb4",
      ],
    },
    {
      field: "Network Security",
      title: ["Design a secure network for a Bank"],
      details: [
        [
          "become familiar with the components of a LAN and WAN network: routers,switches, (L2, L3), firewalls, servers (antivirus, DHCP, DNS)",
          "protocols: OSPF, MPLS/VPN, DHCP, DNS, STP, VLAN, interVlan ",
          "network security: port Security , ACL , SSH",
        ],
      ],
      link: ["#"],
    },
  ];

  return (
    <div className="resume-container">
      <div className="resume-parent">
        <h1>Resume</h1>
        <h6>My Formal Bio Details</h6>
      </div>
      <div className="resume-details">
        <div className="resume-details-titles">
          <ul className="resume-details-list">
            <li>
              {" "}
              <button
                className="btn highlighted-button"
                onClick={() => {
                  setEducation(true);
                  setPrograms(false);
                  setProjects(false);
                  setInterst(false);
                }}
              >
                <FaUserGraduate className="icon" />
                <span>Education</span>
              </button>
            </li>
            <li>
              {" "}
              <button
                className="btn highlighted-button"
                onClick={() => {
                  setEducation(false);
                  setPrograms(true);
                  setProjects(false);
                  setInterst(false);
                }}
              >
                <RiComputerFill className="icon" />
                <span>Programming skills</span>
              </button>
            </li>
            <li>
              {" "}
              <button
                className="btn highlighted-button"
                onClick={() => {
                  setEducation(false);
                  setPrograms(false);
                  setProjects(true);
                  setInterst(false);
                }}
              >
                <GrProjects className="icon" />
                <span>Projects</span>
              </button>
            </li>
            <li>
              {" "}
              <button
                className="btn highlighted-button"
                onClick={() => {
                  setEducation(false);
                  setPrograms(false);
                  setProjects(false);
                  setInterst(true);
                }}
              >
                <IoMdColorWand className="icon" />
                <span>Interstes</span>
              </button>
            </li>
          </ul>
        </div>
       <div className="right">
       {education === true && (
          <ul className="resume-details-about">
            
              {resume.map((item) => (
                <li>

                    <h3>{item.h1}</h3>
                    <h5>{item.h2}</h5>
                    <h6>{item.h3}</h6>
                    <h5 className="special">{item.year}</h5>
                  
                </li>
              ))}{" "}
            </ul>
          
        )}
       
        

        {programs === true && (
          <ul className="resume-details-about">
            {programmingLanguges.map((item) => (
              <li>
              
                
                  <h3>{item.field}</h3>
                
                  <div className="grid-container">
                  {item.languages.map((index, indexo) => {
                    return (
                      <div className=" ">
                        <h6>{index}</h6>
                        <ProgressBar
                          completed={item.pourcentages[indexo]}
                          bgColor="#391ae7"
                        />
                      </div>
                    );
                  })}</div>
               
             
           </li> ))}
          </ul>
        )}

        {projects === true && (
          <ul className="resume-details-about">
            {prjcts.map((item) => (
              <li>
                <h3>{item.field}</h3>
                <ul>
                  {item.title.map((ind, indo) => {
                    return (
                      <div>
                        <li>
                          <a href={item.link[indo]}>{ind}</a>
                          
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </li>
            ))}
           </ul>
        )}

        {interts === true && (
          <ul className="resume-details-about">
            
              <li><h3>Reading</h3></li>
              <li>
                <h3>vincnet Van Gogh drawings</h3>
                <button
                  className="btn highlighted-button"
                  onClick={() => {
                    setDetails(true);
                  }}
                >
                  Show drawings
                </button>

                {details && isPending && <div>Loading...</div>}
                {details && error && <div>{error}</div>}
                {details && data && (
                  <div className="image">
                    <img src={data.primaryImage} alt={data.title} />
                    <h6>{data.title}</h6>
                  </div>
                )}
              </li>
            </ul>
         
        )}
        </div>
      </div>
    </div>
  );
}

export default Resume;
