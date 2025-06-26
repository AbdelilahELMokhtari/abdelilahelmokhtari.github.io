import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function CareerHistory() {
  return (
    <div id="career-history" className="container">
      <h1>Career History</h1>

      {/* Education Section */}
      <h2>Education & Certifications</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#f0f0f0", color: "#222" }}
          contentArrowStyle={{ borderRight: "7px solid #f0f0f0" }}
          date="2023 - 2024 "
          iconStyle={{ background: "#007acc", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">
            Professional Bachelor's Degree (Licence professionnelle) - Cybersecurity & Cloud Technologies
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Institut à Sidi Bennour, Morocco
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#f0f0f0", color: "#222" }}
          contentArrowStyle={{ borderRight: "7px solid #f0f0f0" }}
          date="2021 - 2023"
          iconStyle={{ background: "#007acc", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">
            Technical Degree (BTS) - Systems & Network Administration
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Centre des Classes Préparatoires au BTS, Morocco
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "#f0f0f0", color: "#222" }}
          contentArrowStyle={{ borderRight: "7px solid #f0f0f0" }}
          date="2020 - 2021"
          iconStyle={{ background: "#007acc", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title">
            Baccalauréat - Physical Sciences
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Lycée Ahmed Chawki, Salé, Morocco
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>

      {/* Experience Section */}
      <h2>Internships & Experience</h2>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "rgb(39, 40, 34)" }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="2024 - Present"
          iconStyle={{ background: "#5000ca", color: "white" }}
          icon={<FontAwesomeIcon icon={faLaptopCode} />}
        >
          <h3 className="vertical-timeline-element-title">Administrator Cloud and Support IT</h3>
          <h4 className="vertical-timeline-element-subtitle">Wassla Digital, Morocco</h4>
          <p>
            Managing and supporting cloud infrastructure, virtualization platforms (VMware ...), 
            firewall configurations, Microsoft 365 administration, and providing IT support to ensure system security and availability.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "rgb(39, 40, 34)" }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="2023 - 2024"
          iconStyle={{ background: "#5000ca", color: "white" }}
          icon={<FontAwesomeIcon icon={faLaptopCode} />}
        >
          <h3 className="vertical-timeline-element-title">
            Final Internship (Professional Bachelor's Degree)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Wassla Digital, Morocco</h4>
          <p>
            Worked on cloud service deployment and assisted in securing infrastructure using pfSense and Vpn.
            Participated in internal security audits and vulnerability assessments.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "rgb(39, 40, 34)" }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="2021 - 2023"
          iconStyle={{ background: "#5000ca", color: "white" }}
          icon={<FontAwesomeIcon icon={faLaptopCode} />}
        >
          <h3 className="vertical-timeline-element-title">Final Internship (BTS)</h3>
          <h4 className="vertical-timeline-element-subtitle">Insight Solution, Morocco</h4>
          <p>
            Developed a Moroccan license plate recognition system using YOLO, deployed on a Raspberry Pi with local network security measures. 
            Focused on detection accuracy, real-time performance, and secure system integration in an embedded environment.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#fff", color: "rgb(39, 40, 34)" }}
          contentArrowStyle={{ borderRight: "7px solid white" }}
          date="2020"
          iconStyle={{ background: "#5000ca", color: "white" }}
          icon={<FontAwesomeIcon icon={faLaptopCode} />}
        >
          <h3 className="vertical-timeline-element-title">Introductory Internship</h3>
          <h4 className="vertical-timeline-element-subtitle">Redal, Morocco</h4>
          <p>
            Assisted IT department with basic system administration tasks, monitored user tickets, and managed IT inventory.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default CareerHistory;
