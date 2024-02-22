#!/bin/bash

# Check if argument is provided
if [ -z "$1" ]; then
  echo "Usage: ./port_scan.sh <target>"
  exit 1
fi

# Set target IP address
target="$1"

# Define common ports to scan
ports="21,22,23,25,53,80,110,143,443,3306,8080"

echo "Scanning ports on $target..."

# Perform port scan using nmap
/nmap -p "$ports" "$target"
