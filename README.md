# ☁️ Cloud-Based CMS Automation using DevOps Toolchain

This project demonstrates a complete end-to-end DevOps workflow for deploying a **Content Management System (CMS)** on a cloud-based Ubuntu server. The solution combines Infrastructure as Code, state enforcement, CI/CD, and continuous monitoring to enable a fully automated production-grade deployment.

The architecture provisions a target **Ubuntu Linux virtual machine** and deploys a containerized **MERN-stack CMS application**.

## ✨ Key Technology Stack

| Category                | Tool / Technology                           | Purpose                                                                                                            |
| :---------------------- | :------------------------------------------ | :----------------------------------------------------------------------------------------------------------------- |
| **Frontend**            | React.js / HTML / CSS / JavaScript          | User-friendly CMS interface.                                                                                       |
| **Backend**             | Node.js with Express.js                     | RESTful API endpoints for content management.                                                                      |
| **Database**            | MongoDB                                     | NoSQL database for storing articles and user content.                                                              |
| **Containerization**    | Docker                                      | Packages and runs the backend application in a portable, lightweight container.                                    |
| **IaC Provisioning**    | Terraform                                    | Automates the creation of cloud infrastructure (VM, networking, security groups).                                   |
| **CI/CD Orchestration** | Jenkins                                      | Automates the build process: pull code, build Docker image, and trigger deployment.                                |
| **Configuration**       | Ansible                                      | Installs dependencies (Node.js, Docker Engine) and deploys CMS containers on the server.                           |
| **State Enforcement**   | Puppet                                       | Ensures NGINX reverse-proxy configuration remains in the correct and desired state.                                |
| **Monitoring**          | Nagios                                       | Sends uptime alerts and monitors server resources (CPU, memory, disk, service availability).                       |

## 🚀 Deployment Workflow Overview

1. **Provisioning:** Terraform provisions the cloud Ubuntu VM and networking resources.
2. **Git Push Trigger:** A commit to the repository triggers the Jenkins pipeline.
3. **Build & Deploy:** Jenkins pulls the code, builds the Docker image, and triggers the Ansible deployment.
4. **Server Configuration:** Ansible installs Docker, pulls application images, and deploys containers.
5. **State Management:** Puppet ensures NGINX reverse-proxy configuration stays correct over time.
6. **Monitoring:** Nagios monitors application and server health.

## ⚙️ Project Structure

```
.
├── application/    # MERN CMS source code
│   ├── backend/    # Node.js/Express API + Dockerfile
│   └── frontend/   # React.js application
├── terraform/      # Infrastructure as Code (.tf files)
├── ansible/        # Ansible playbooks (.yml)
├── puppet/         # Puppet manifests (.pp)
├── jenkins/        # Jenkinsfile for CI/CD pipeline
└── nagios/         # Nagios configuration files (.cfg)
```

## 🛠️ Setup & Execution

### 1️⃣ Configure Cloud Credentials
Ensure your cloud provider credentials (AWS, Azure, GCP, etc.) are configured locally for Terraform.

### 2️⃣ Terraform — Provision Infrastructure
```bash
cd terraform
terraform init
terraform plan
terraform apply
```

### 3️⃣ Jenkins — CI/CD Pipeline
Configure a Jenkins job to:
- Pull this repository
- Execute the `jenkins/Jenkinsfile`
- Build Docker image and trigger Ansible deployment

### 4️⃣ Ansible — Deploy CMS
Ansible installs Docker, pulls images, and deploys application containers.

### 5️⃣ Puppet — State Enforcement
Puppet maintains the NGINX reverse-proxy configuration and ensures desired state consistency.

### 6️⃣ Nagios — Monitoring
Import Nagios configuration from the `nagios/` directory to enable server and service health monitoring.

## 🎯 Summary of Automation

| Phase                     | Automated by         |
|---------------------------|----------------------|
| Infrastructure Provision  | Terraform            |
| Build / Deployment        | Jenkins + Docker     |
| Configuration             | Ansible              |
| State Enforcement         | Puppet               |
| Monitoring                | Nagios               |

## 🤝 Contributions
Pull requests and suggestions are welcome.
