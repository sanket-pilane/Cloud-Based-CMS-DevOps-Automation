This folder contains a minimal Terraform example to provision an Ubuntu EC2 instance on AWS and run the CMS via docker-compose.

Important

- This is a template/example — you must set your AWS credentials (e.g., via environment variables or the AWS CLI) and replace `repo_url` and `key_name`.
- Review the `user_data` in `main.tf` before applying — it runs `docker compose up -d` on the instance.

Basic usage

1. Initialize terraform:

   terraform init

2. Inspect plan:

   terraform plan -var='repo_url=https://github.com/youruser/your-repo.git' -var='key_name=your-key'

3. Apply:

   terraform apply -var='repo_url=...' -var='key_name=...'
