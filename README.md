# ☁️ Cloud-Based CMS Automation using DevOps Toolchain

This project demonstrates a full, end-to-end DevOps pipeline for deploying a **Content Management System (CMS)**, similar to a basic blogging platform[cite: 20]. It leverages industry-standard tools to achieve Infrastructure as Code (IaC), continuous configuration, CI/CD, and continuous operational visibility[cite: 35, 36].

The architecture provisions a target **Ubuntu Linux** virtual machine and deploys a containerized MERN-stack application[cite: 24, 22].

## ✨ Key Technology Stack

This project successfully integrates all major DevOps phases: Provisioning, Configuration, CI/CD, and Monitoring.

| Category                | Tool / Technology                           | Purpose                                                                                                            |
| :---------------------- | :------------------------------------------ | :----------------------------------------------------------------------------------------------------------------- |
| **Frontend**            | React.js / HTML, CSS, JavaScript [cite: 29] | User-friendly CMS interface.                                                                                       |
| **Backend**             | Node.js with Express.js [cite: 29]          | Provides RESTful API endpoints for content management.                                                             |
| **Database**            | MongoDB [cite: 29]                          | NoSQL database for storing article content.                                                                        |
| **Containerization**    | Docker [cite: 29]                           | Packages the backend application for consistent deployment.                                                        |
| **IaC Provisioning**    | **Terraform** [cite: 32]                    | Automates the creation of the entire cloud infrastructure (Ubuntu VM, networking, security groups).                |
| **CI/CD Orchestration** | **Jenkins** [cite: 32]                      | Orchestrates the workflow: code pull, Docker build, and deployment via Ansible.                                    |
| **Configuration**       | **Ansible** [cite: 32]                      | Installs dependencies (Node.js, Docker Engine) and handles post-provisioning tasks on the Ubuntu server[cite: 25]. |
| **State Enforcement**   | **Puppet** [cite: 32]                       | Ensures critical configurations, like the NGINX reverse proxy, maintain their desired state over time[cite: 25].   |
| **Monitoring**          | **Nagios** [cite: 32]                       | Provides real-time monitoring of web service uptime and key server health metrics (CPU, RAM, Disk)[cite: 26, 33].  |

## 🚀 Deployment Workflow Overview

The system follows a fully automated continuous delivery model:

1.  **Provisioning:** **Terraform** provisions the base **Ubuntu Linux VM** and networking on the cloud[cite: 24, 32].
2.  **CI/CD Trigger:** A commit to the GitHub repository triggers the **Jenkins** pipeline.
3.  **Build & Deploy:** Jenkins pulls the code, builds the **Docker image** for the Node.js backend, and triggers the Ansible deployment.
4.  **Configuration:** **Ansible** prepares the server (installs Docker Engine) and deploys the containerized application[cite: 32].
5.  **State Management:** **Puppet** ensures the **NGINX** reverse proxy configuration remains correct[cite: 32].
6.  **Monitoring:** **Nagios** provides continuous alerts and operational visibility[cite: 26].

## ⚙️ Project Structure

The repository is organized to clearly separate the application code from the automation scripts:

. ├── application/ # The core MERN CMS application code │ ├── backend/ # Node.js/Express API and Dockerfile │ └── frontend/ # React.js application ├── terraform/ # Infrastructure as Code (.tf files) ├── ansible/ # Ansible playbooks (.yml) ├── puppet/ # Puppet manifests (.pp) ├── jenkins/ # Jenkinsfile for CI/CD pipeline └── nagios/ # Nagios configuration files (.cfg)

## 🛠️ Setup and Execution

### 1. Configure Cloud Provider Credentials

Ensure your cloud provider credentials (AWS, Azure, GCP, etc.) are configured for **Terraform** execution.

### 2. Terraform (Infrastructure Provisioning)

Navigate to the `terraform/` directory and apply the configuration to provision the necessary cloud resources:

```bash
# Initialize Terraform
terraform init

# Review the plan
terraform plan

# Apply the infrastructure changes
terraform apply
```

3. Jenkins (CI/CD Pipeline)
   Configure a Jenkins job to pull this repository and use the provided jenkins/Jenkinsfile. The pipeline will automatically execute the build and deployment steps via Ansible on the newly provisioned Ubuntu VM.

4. Monitoring
   Once deployment is complete, import the configuration files from the nagios/ directory into your Nagios server to begin monitoring the web service and server health.
