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

## Pod Management
kubectl get pods - List pods
kubectl describe pod <pod> - Show pod details
kubectl logs <pod> - View pod logs
kubectl delete pod <pod> - Delete pod

## Cluster Management
kubectl get nodes - List nodes
kubectl get services - List services
kubectl get deployments - List deployments
kubectl apply -f <file> - Apply a configuration
kubectl delete -f <file> - Delete a configuration

## Namespace Management
kubectl get namespaces - List namespaces
kubectl create namespace - Create namespace
kubectl delete namespace - Delete namespace`,

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

