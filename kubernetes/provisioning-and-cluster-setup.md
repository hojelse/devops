# Provision and setup cluster

## Using doctl
https://github.com/digitalocean/doks-example/


1. Create your Kubernetes cluster: `doctl k8s cluster create example`
2. Check that your cluster is available: `kubectl --context do-nyc1-example get nodes`
3. Deploy a workload to your cluster: `kubectl --context do-nyc1-example apply -f manifest.yaml`
4. Wait for the service to be ready: script/wait-for-service do-nyc1-example doks-example
5. Open the returned IP address in your browser, or run `open http://$(kubectl --context do-nyc1-example get service doks-example --template="{{range .status.loadBalancer.ingress}}{{.ip}}{{end}}")`

## Manually

### Create cluster

Create server instances

Create master nodes (control plane)
- Install master process

Create worker nodes
- Install worker processes
  - Kubectl
  - kube proxy
  - Container runtime

### Create data persistence for deploying databases

- Create physical storage
- Create persistent volumes
- Attach volumes to your database

### Load balancing and ingress(manage route incoming requests)

- Install and run Ingress controller in cluster
- Configure routing rules

### Setup SSL
