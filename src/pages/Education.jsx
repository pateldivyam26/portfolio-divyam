import React from "react";
import Section from "../components/Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">INDIAN INSTITUTE OF TECHNOLOGY, JODHPUR</h3>
          <div className="subheading mb-3">B.TECH IN ELECTRICAL ENGINEERING</div>
          <div><b>Courses: </b>Data Structures & Algorithms, Introduction to Computer Science, Pattern Recognition & Machine Learning, Probability, Statistics & Stochastic Processes, Signals & Systems, Digital Logic & Design, Embedded Systems, Computer Architecture</div>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">Dec 2020 - Present</span>
        </div>
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">HG INTERNATIONAL SCHOOL, ABU ROAD</h3>
          <div className="subheading mb-3">CBSE - Class 12<sup>th</sup></div>
          <div><b>Courses: </b>Physics, Chemistry, Maths, English, Computer Science</div>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">2019</span>
        </div>
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">ROYAL RAJASTHAN PUBLIC SCHOOL, ABU ROAD</h3>
          <div className="subheading mb-3">CBSE - Class 10<sup>th</sup></div>
          <div><b>Courses: </b>English, Hindi, Maths, Science, Social Science, Information Technology</div>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary"> 2017 </span>
        </div>
      </div>
    </Section>
  );
}
