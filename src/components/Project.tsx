import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import pfeDiplome from '../assets/images/pfeDiplome.png';
import cloudproject from '../assets/images/cloudproject.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
            <a href="https://www.linkedin.com/posts/abdelilahelmokhtari_python-pfe-linux-activity-7084234366691733505-DOXQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADm0wssB5xxMg92QfWzIq_1fMCUTYoKNeJs" target="_blank" rel="noreferrer">
                <img src={pfeDiplome} className="zoom" alt="Embedded Linux Security System on Raspberry Pi" width="100%"/>
            </a>
            <a href="https://www.linkedin.com/posts/abdelilahelmokhtari_python-pfe-linux-activity-7084234366691733505-DOXQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADm0wssB5xxMg92QfWzIq_1fMCUTYoKNeJs" target="_blank" rel="noreferrer">
                <h2>Design and Development of an Embedded System on Raspberry Pi for Local Network Security</h2>
            </a>
            <p>
                Designed and implemented a custom embedded Linux system on a Raspberry Pi to enhance the security of a local network. Developed and deployed Python scripts to detect and mitigate attacks such as DHCP Starvation and MAC Flooding. Integrated Kali Linux, EVE-NG, and BusyBox, and configured secure boot with U-Boot and a custom Linux kernel.
            </p>
            </div>

            <div className="project">
            <a href="https://drive.google.com/file/d/1A_pzIEayCzfjVoLEJnxIDQQHpm-kxhNa/view?usp=sharing" target="_blank" rel="noreferrer">
                <img src={cloudproject} className="zoom" alt="Deployment of a Secure Cloud Hosting Environment for ERP & CRM Applications" width="100%"/>
            </a>
            <a href="https://drive.google.com/file/d/1A_pzIEayCzfjVoLEJnxIDQQHpm-kxhNa/view?usp=sharing" target="_blank" rel="noreferrer">
                <h2>Deployment of a Secure Cloud Hosting Environment for ERP & CRM Applications</h2>
            </a>
            <p>
                Designed and deployed a secure multi-region cloud environment leveraging OpenVPN for secure VPN access, Fortigate and Sophos firewalls for network security, and VMware Workstation for virtualization testing. 
                Integrated cloud services for scalable infrastructure, configured Windows Server RDS for remote application access, and implemented endpoint protection with Kaspersky to secure the environment.
            </p>
            </div>
        </div>
    </div>
    );
}

export default Project;