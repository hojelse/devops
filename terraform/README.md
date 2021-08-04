# Terraform and Azure

## Terraform

1. Install [Terraform](https://learn.hashicorp.com/tutorials/terraform/install-cli)
2. Install [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
3. Install [Kubectl](https://kubernetes.io/docs/tasks/tools/)
4. Get "id" from `az account list`
5. Create a Contributor Service Principal `az ad sp create-for-rbac --role="Contributor" --scopes="/subscriptions/<id>"` and get "appId", "password", and "tenant"
6. Using powershell set environment variables ```
   $Env:ARM_CLIENT_ID = "<appId>"
   $Env:ARM_SUBSCRIPTION_ID = "<id>"
   $Env:ARM_TENANT_ID = "<tenant>"
   $Env:ARM_CLIENT_SECRET = "<password>"
   ```
7. Initialize Terraform (downloads Azure provider translate the Terraform instructions into API calls and create state file) `terraform init`
8. Move the generated config file `mv .\kubeconfig ~\.kube\config`
9. Checks if the configuration is valid `terraform validate`
10. Plan and apply `terraform plan` and `terraform apply`
11. Teardown by `terraform destroy`

## Azure CLI Kubernetes Cluster

### Setup

2. Install [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli)
3. Install [Kubectl](https://kubernetes.io/docs/tasks/tools/)
4. Run `az login`
5. Create Azure Resource Group `az group create --name my-resource-group --location northeurope`
6. Register a resource provider `az provider register -n Microsoft.ContainerService`
7. Create AKS cluster `az aks create -g my-resource-group -n my-k8s-cluster --generate-ssh-keys --node-count 2`
8. Get credentials `az aks get-credentials --resource-group my-resource-group --name my-k8s-cluster`

### Teardown

1. Delete cluster `az aks delete --name my-k8s-cluster --resource-group MyResourceGroup`
2. Delete resource group `az group delete --resource-group MyResourceGroup`

`az aks show --name my-k8s-cluster --resource-group my-resource-group -o yaml`

### References

Steps from Guide: [learnk8s.io/terraform-aks](https://learnk8s.io/terraform-aks)