import React from "react";
import Section from "../components/Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Experience 1</h3>
          <div className="subheading mb-3">Company</div>
          <p>
            <strong>Roles/Responsibilities</strong><br />
            <li>List 1</li>
            <li>List 2</li>
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">June 2022 - Present</span>
        </div>
      </div>
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">Experience 2</h3>
          <div className="subheading mb-3">Company</div>
          <p>
            <li>List 1</li>
            <li>List 2</li>
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">May 2021 - Present</span>
        </div>
      </div>
    </Section>
  );
}
