#!/bin/sh

# Start the Node.js application in the background
node /app/index.js &

# Start Nginx in the foreground
nginx -g 'daemon off;'
