export const commandData = {
  linux: `# Common Linux Commands

## File Operations
ls - List all files in the current directory.
ls -ll - Show all folders including hidden ones with details.
pwd - Display the current path.
mkdir <directory_name> - Create a new directory.
touch <file_name> - Create an empty file.
rm <file> - Remove files or directories.
cp <source> <destination> - Copy files and directories.
mv <source> <destination> - Move or rename files and directories.
chmod <octal code> - Changes the permissions of a file/directory
chown <user>:<group> - Changes the ownership of a file/directoru

## Searching and Filtering
grep <pattern> <file> - Search for a pattern in a file.
grep -r <pattern> <directory> - Search for a pattern recursively in a directory.
grep -lir <value> - Search for the value inside all files in the current directory.
find / -type d -name "opsware" - Find all directories named "opsware".
find /path/to/logs -type f -name "*.log" -newermt "YYYY-MM-DD" ! -newermt "YYYY-MM-DD" - Find all log files for a specific date.
find /var/vols/xxx -type f -exec grep -l "search_term" {} + - Find all files containing a specific term.

## Process Management
ps -aux - List all running processes.
ps -wef | grep <process_name> - Search for a process by name.
jstack <PID> - Check logs for a high-usage Java process.
pkill -9 <process_name> - Force terminate a process.
top - Display system processes and their resource usage.
htop - Interactive process viewer.
journalctl <pidnumber> - Get logs for a specific service or process.

## System Information
uname -a - Show system information.
cat /proc/cpuinfo - Display CPU details.
lscpu - Show detailed CPU information.
df -h - Show disk usage in a human-readable format.
du -sh <directory> - Check the size of a directory.
free -h - Display memory usage.

## Network Commands
netstat -tulnp - List open network connections/ports.
route -n - Display the routing table/default gateway.
ifconfig / ip addr - Show network interfaces.
ping <host> - Test network connectivity.
ssh <user>@<host> - Secure shell remote login.
curl <URL> - Transfer data from/to servers.
iptables-save | grep -P "(--to-destination|--.port)" | grep -v "DROP" | grep -P ":\d+|--dport \d+" - Show all processes using ports.
iptables -L - Check firewall rules.

## Service Management
systemctl list-units --type=service | grep <service_name> - Get service status.
systemctl start <service> - Start a service.
systemctl stop <service> - Stop a service.
systemctl restart <service> - Restart a service.
systemctl status <service> - Check the status of a service.

## Working with Scripts
./scriptname.sh - Run a script in the current directory.

## Text Editing in VIM
:qa - Quit VIM.
:wq - Save and quit VIM.
:q + tab - Check all options in VIM.`,

  docker: `# Common Docker Commands

## Container Management
crictl ps - List running containers.
crictl ps -a - List all containers.
crictl start <container> - Start a container.
crictl stop <container> - Stop a container.
crictl rm <container> - Remove a container.
crictl logs <container> - View container logs.

## Image Management
crictl images - List images.
crictl pull <image> - Pull an image.
crictl build - Build an image from a Dockerfile.
crictl rmi <image> - Remove an image.
crictl load -i imagename - Load an image and check for errors.

## Docker Compose
crictl-compose up - Start services.
crictl-compose down - Stop services.
crictl-compose ps - List services.
crictl-compose logs - View service logs.

## CRI-O Container Management
crictl ps - Display images and the containers they run in.
crictl images - Show all images.
crictl pull <image> - Pull an image from the internal repository.
crictl load -i <image_path> - Load an image from a file.
crictl tag <source_image> <target_image> - Retag an image for reuse.`,

  kubernetes: `# Common Kubernetes Commands

## Pod Management
kubectl get pods -A - Shows all pods in the cluster.
kubectl get pods -A -o wide - Shows all pods in the cluster with details.
kubectl top pods -A - Displays the current memory usage of pods.
kubectl describe pod -n <namespace> <podname> - Describes details of a pod.
kubectl logs -n <namespace> <podname> - Displays logs for all containers in a pod.
kubectl logs -n <namespace> <podname> -c <containername> - Displays logs for a specific container in a pod.
kubectl exec -ti -n <namespace> <podname> -c <containername> /bin/bash - Executes commands inside a pod's container.
watch 'kubectl get pods -A | grep -v 1/1 | grep -v 2/2 | grep -v 3/3 | grep -v 4/4' - Watch pods that are not up and running in real-time.
kubectl delete pods --all -n <namespace> --grace-period=0 --force - Force delete all pods in a namespace.
kubectl get pods -n <namespace> | grep Error | awk '{print $1}' | xargs kubectl delete pod -n <namespace> - Delete all pods in an error state.

## Node Management
kubectl get nodes - Shows all nodes in the cluster.
kubectl top nodes - Displays node resource usage.
kubectl describe node <nodename> - Describe the node

## Deployment and StatefulSet Management
kubectl get deployments -A - List all deployments in all namespaces.
kubectl scale deployment -n <namespace> <deploymentname> --replicas=<number> - Scale a deployment to a specific number of replicas.
kubectl scale statefulset -n <namespace> <deploymentname> --replicas=<number> - Scale a statefulset to a specific number of replicas.

## Configuration and Secrets
kubectl get cm -A - Get all ConfigMaps.
kubectl get secret itom-idm-secret -n itsma-xbtqh -o yaml - Get all secrets from a pod.
get_secret itom_itsma_dba_password_secret_key - Retrieve passwords after executing a command inside a pod.

## Persistent Volume Management
kubectl edit pv <pv-name> -o yaml - Edit the Persistent Volume (PV) YAML file.

## Editing and Modifying Resources
kubectl edit pod <podname> -n <namespace> -o yaml - Edit the pod configuration file to view assigned memory.`,

  sa: `# Server Automation Commands

/etc/init.d/opsware-agent restart - Restart opsware services",
/etc/init.d/opsware-sas health - Check SA health",
strace -o /tmp/hpsa_installer.strace -f -t -v -s 512 <hpsa_install.sh> - DEBUG installer`,
}

