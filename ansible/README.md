Ansible playbook to deploy the CMS application to an Ubuntu host.

Usage

1. Install Ansible and the community.docker collection:

   sudo apt update
   sudo apt install -y ansible
   ansible-galaxy collection install community.docker

2. Edit `inventory.ini` and `site.yml` (set `repo_url` to your Git repository).

3. Run the playbook:

   ansible-playbook -i inventory.ini site.yml

Note: The playbook uses `docker.io` and `docker-compose-plugin` from the distro packages for simplicity. For production, prefer the official Docker install instructions.
