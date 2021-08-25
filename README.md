A node metrics exporter (Node.js)

# Endpoint

| Path | Body |
| ---- | ---- |
|`/info/hostname`| hostname with plain text|
|`/info/uptime`| uptime of the system in seconds with plain text|
|`/info/load`|load average in 1m, 5m and 15m with JSON|
|`/metrics`| metrics for prometheus `node_load` `node_uptime`|

# Docker image
[yuhuashi1117/mini-node-exporter](https://hub.docker.com/r/yuhuashi1117/mini-node-exporter)