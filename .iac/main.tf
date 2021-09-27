terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=2.48.0"
    }
  }
}
provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "rg" {
  name     = "my-resource-group"
  location = "northeurope"
}

# "azurerm_kubernetes_cluster" is the actual resource, that manages an Azure Kubernetes cluster.
# "cluster" is the locally given name for that resource that is only to be used as a reference inside the scope of the module.
resource "azurerm_kubernetes_cluster" "cluster" {
  name                = "my-k8s-cluster"
  location            = azurerm_resource_group.rg.location # references location variable in the above resource block
  resource_group_name = azurerm_resource_group.rg.name
  dns_prefix          = "my-k8s-cluster"

  # Worker nodes specification
  default_node_pool {
    name       = "default"
    node_count = "2"
    vm_size    = "standard_d2_v2"
  }

  # Azure will automatically create the required roles and permissions, and you won't need to manage any credentials.
  # More about types: https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview#managed-identity-types
  identity {
    type = "SystemAssigned"
  }

  # AKS addon to enable the use of Ingress controller
  addon_profile {
    http_application_routing {
      enabled = true
    }
  }
}