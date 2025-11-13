variable "aws_region" {
  type    = string
  default = "us-east-1"
}

variable "instance_type" {
  type    = string
  default = "t3.micro"
}

variable "key_name" {
  type    = string
  default = ""
  description = "SSH key name registered in AWS to allow access"
}

variable "repo_url" {
  type    = string
  default = "https://github.com/youruser/your-repo.git"
}
