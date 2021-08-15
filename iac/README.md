# Azure, Terraform and Kubernetes

## Terraform

1. Install [Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli)
2. Install [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
3. Install [Kubectl](https://kubernetes.io/docs/tasks/tools/)
4. Link your account to the Azure CLI `az login`
5. Get "id" from `az account list`
6. Create a Contributor Service Principal `az ad sp create-for-rbac --role="Contributor" --scopes="/subscriptions/<id>"` and get "appId", "password", and "tenant"
7. Using powershell set environment variables
```
$Env:ARM_CLIENT_ID = "<appId>"
$Env:ARM_SUBSCRIPTION_ID = "<id>"
$Env:ARM_TENANT_ID = "<tenant>"
$Env:ARM_CLIENT_SECRET = "<password>"
```
8. Initialize Terraform (downloads Azure provider translate the Terraform instructions into API calls and create state file) `terraform init`
9. Move the generated config file `mv .\kubeconfig ~\.kube\config`
10. Checks if the configuration is valid `terraform validate`
11. Plan and apply `terraform plan` and `terraform apply`
12. Teardown by `terraform destroy`

### References

These notes are inspired by this Guide: [learnk8s.io/terraform-aks](https://learnk8s.io/terraform-aks)

## Kubernetes and GitHub Container Registry setup

1. Create GitHub PAT with read:packages [github.com/settings/tokens](https://github.com/settings/tokens)

2. Get GitHub email [github.com/settings/emails](https://github.com/settings/emails)

`kubectl create secret docker-registry creative-nest-pull-secret-gh-auth --docker-server=https://ghcr.io --docker-username=<github-username> --docker-password=<github-pat> --docker-email=<github-email>`

```
kubectl apply -f .\manifest.yaml
kubectl describe ingress my-ingress
```
