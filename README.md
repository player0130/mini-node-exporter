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


# Grafana dashboard
![](https://cdn.jsdelivr.net/gh/player0130/image@master/1629959961473-%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202021-08-26%201.24.52.png)
