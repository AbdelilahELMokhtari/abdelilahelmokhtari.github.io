import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud, faShieldAlt, faServer, faBriefcase  } from "@fortawesome/free-solid-svg-icons";
import { faMicrosoft} from '@fortawesome/free-brands-svg-icons';

import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const cloudStack = [
  "VMware ESXi",
  "Proxmox VE",
  "VirtualBox",
  "EVE-NG",
  "Ubuntu Server",
  "Windows Server",
  "IBM Cloud",
  "Red Hat Enterprise Linux",
  "SSH",
  
];

const securityStack = [
  "CCNA",
  "Fortinet",
  "pfSense",
  "OPNsense",
  "Wireshark",
  "SIEM",
  "Firewalling",
  "IDS/IPS",
  "NAT",
  
  "VPN",
];

const sysadminStack = [
  "Linux (Ubuntu, Debian)",
  "Windows Server",
  "Active Directory",
  "Bash",
  "PowerShell",
  "Network Monitoring",
  
  "DNS / DHCP / FTP",
  "TCP/IP",
];

const m365Stack = [
  "Microsoft 365 Admin Center",
  "Exchange Online",
  "SharePoint Online",
  "Microsoft Teams",
  "OneDrive for Business",
  "Azure AD",
  "Security & Compliance",
  
];

const projectStack = [
  "Raspberry Pi",
  "Python (YOLO)",
  "Secure Cloud Lab",
  "EVE-NG",
  "Proxmox + pfSense",
  "Git / GitHub",
  "Docker",
  "CI/CD Basics",
];

const Expertise = () => {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">

          {/* Cloud & Virtualization */}
          <div className="skill">
            <FontAwesomeIcon icon={faCloud} size="3x" />
            <h3>Cloud & Virtualization</h3>
            <p>
              I design and deploy secure, scalable infrastructure using virtualization and cloud technologies.
              I’ve worked with both on-prem and virtualized environments using tools like VMware and Proxmox,
              and have hands-on experience setting up cloud services and managing Ubuntu/Windows servers.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {cloudStack.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Network & Cybersecurity */}
          <div className="skill">
            <FontAwesomeIcon icon={faShieldAlt} size="3x" />
            <h3>Network & Cybersecurity</h3>
            <p>
              I implement security best practices for systems and networks, configure firewalls, and monitor threats
              using SIEM platforms. My background includes CCNA-level networking knowledge and hands-on firewalling and network segmentation.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {securityStack.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* System & Network Administration */}
          <div className="skill">
            <FontAwesomeIcon icon={faServer} size="3x" />
            <h3>System & Network Administration</h3>
            <p>
              Experienced in managing both Linux and Windows infrastructures, ensuring availability, performance, and security.
              I automate tasks, supervise network health, and manage user roles and permissions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {sysadminStack.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Microsoft 365 Administration */}
          <div className="skill">
            <FontAwesomeIcon icon={faMicrosoft} size="3x" />
            <h3>Microsoft 365 Administration</h3>
            <p>
              I configure, manage, and troubleshoot Microsoft 365 environments, supporting cloud-based productivity and communication for users.
              This includes Exchange Online, OneDrive, SharePoint, Teams, and Azure AD integration for identity and access control.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {m365Stack.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          

        </div>
      </div>
    </div>
  );
};

export default Expertise;
