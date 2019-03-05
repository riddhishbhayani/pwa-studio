# Docker Directory

This directory stores certificates for local SSL/TLS, created by running `run-docker` script, as well as configuration for docker environment setup.

Run the `docker/run-docker` script from the root of the repository to create a container running PWA with a secure https protocol.

This script will:

* copy the `.env.docker` environment variables to `.env` to be easily consumable by `docker-compose`
* add a custom domain, configured in `.env.docker`
* generate a self-signed ssl/tls certificate and trust the certificate using `devcert` in the `makeHostAndCert.js` script
* run `docker-compose build` to build the container network
* run `docker-compose up` to start the container running PWA at the custom domain with https

After `docker/run-docker` is executed from the root of the repository, the default configuration will have the PWA application running at `https://pwa-docker.localhost`.

### Configure a new custom domain

The domain is configurable. Two changes are needed to configure a new domain name.

1. Change `PWA_STUDIO_PUBLIC_PATH` key to the new domain in `docker/.env.docker`.
2. Change the `--host` value in the `watch:docker` script in `packages/venia-concept/package.json` to the new domain.