# IP Addy

This repository contains the source code for running your own instance of the IP Addy service, which you can learn more about at <a href="https://use.ipaddy.net" target="_blank">use.ipaddy.net</a>

## Options

The `serverless` folder contains the Cloudflare Worker script, which is the current live configuration. It returns your IP Address whether you visit <a href="https://ipaddy.net" target="_blank">ipaddy.net</a> in your browser, or query the URL in a terminal using `cURL`.

The `openresty` folder contains the default NGINX configuration file that was used in the previous iteration of IP Addy — a vanilla OpenResty server that listened on *ipaddy.net*, responding with the visitor's IP when hit with an HTTP GET request. This was deprecated in favor of Cloudflare Workers due to the lower cost and higher scalability of serverless edge computing.
