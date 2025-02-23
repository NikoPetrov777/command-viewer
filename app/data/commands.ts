export const commandData = {
  linux: `# Common Linux Commands

## File Operations
ls - List directory contents
cd - Change directory
pwd - Print working directory
mkdir - Create a directory
touch - Create an empty file
rm - Remove files or directories
cp - Copy files and directories
mv - Move/rename files and directories

## System Information
top - Display system processes
htop - Interactive process viewer
df - Show disk usage
free - Display memory usage
uname -a - Show system information
cat /proc/cpuinfo - Display CPU information

## Network
ifconfig/ip addr - Show network interfaces
ping - Test network connectivity
netstat - Network statistics
ssh - Secure shell remote login
curl - Transfer data from/to servers`,

  docker: `# Common Docker Commands

## Container Management
docker ps - List running containers
docker ps -a - List all containers
docker start <container> - Start a container
docker stop <container> - Stop a container
docker rm <container> - Remove a container
docker logs <container> - View container logs

## Image Management
docker images - List images
docker pull <image> - Pull an image
docker build - Build an image from Dockerfile
docker rmi <image> - Remove an image

## Docker Compose
docker-compose up - Start services
docker-compose down - Stop services
docker-compose ps - List services
docker-compose logs - View service logs`,

  kubernetes: `# Common Kubernetes Commands

 1/ kubectl get pods -A - Shows you all pods in the cluster
 2/ kubectl get pods -A -o wide - Shows you all pods in the cluster with details
 3/ kubectl top nodes - Displays nodes resource usage
 4/ kubectl get nodes - Shows you all nodes in the cluster",
 5/ kubectl get deployments -A - List all deployments in all namespaces",
 6/ kubectl scale deployment -n (namespace) (deploymentname) --replicas=(number) - Scales a deployment to a specific number of replicas",
 7/ kubectl scale statefulset -n (namespace) (deploymentname) --replicas=(number) - Scales a statefulset to a specific number of replicas",
 8/ kubectl scale deployment -n (namespace) (deploymentname) --replicas=(number) - Scales a deployment to a specific number of replicas",
 9/ kubectl exec -ti -n (namespace) (podname) -c (containername) /bin/bash - Executes commands inside a pod's container",
 10/ kubectl describe pod -n (namespace) (podname) - Describes details of a pod",
 11/ kubectl logs -n (namespace) (podname) -c (containername) - Displays logs for a specific container in a pod",
 12/ kubectl logs -n (namespace) (podname) - Displays you all the available containers",
 13/ kubectl get secret itom-idm-secret -n itsma-xbtqh -o yaml - Gets all secrets from a pod",
 14/ get_secret itom_itsma_dba_password_secret_key - Gets passwords, it can be run after you have used the exec command",
 15/ watch 'kubectl get pods -A | grep -v 1/1 | grep -v 2/2 | grep -v 3/3 | grep -v 4/4' - Watch pods which are not up and running in real time",
 16/ kubectl top pods -A - Shows the current memory usage from the pods",
 17/ kubectl edit pod <podname> -n <namespace> -o yaml - Editing the pod config file, you can see the assignem memory here",
 18/ kubectl delete pods --all -n --grace-period=0 --force - Force delete all pods", 
 19/ kubectl edit pv <pv name> - o yaml - edit PV yaml file",
 20/ kubectl get pods -n NameSpace | grep Error| awk '{print $1}' | xargs kubectl delete pod -n NameSpace - delete all pods in error steate",
 21/ kubectl get cm -A - get all configmaps`,

  sa: `# System Administrator Commands

## User Management
useradd - Create a new user
usermod - Modify user account
userdel - Delete user account
passwd - Change password

## Service Management
systemctl start <service> - Start service
systemctl stop <service> - Stop service
systemctl status <service> - Check service status
systemctl enable <service> - Enable service at boot

## Security
chmod - Change file permissions
chown - Change file owner
sudo - Execute command as another user
firewall-cmd - Configure firewall`,
}

