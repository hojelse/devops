# Kubernetes and GitHub Container Registry setup

1. Create GitHub PAT with read:packages [github.com/settings/tokens](https://github.com/settings/tokens)

2. Get GitHub email [github.com/settings/emails](https://github.com/settings/emails)

`kubectl create secret docker-registry creative-nest-pull-secret-gh-auth --docker-server=https://ghcr.io --docker-username=<github-username> --docker-password=<github-pat> --docker-email=<github-email>`

`doctl auth init`

`kubectl apply -f deployment.yaml`

`kubectl apply -f service.yaml`

## View and edit afterwards

`kubectl get services`

`kubectl edit svc kubernetes`

`kubectl get deployments`

`kubectl edit deployment.v1.apps/creative-nest`

```yml
spec:
  ...
  imagePullSecrets: # Add this
  - name: creative-nest-pull-secret-gh-auth # and this
  ...
  containers:
    ...
```