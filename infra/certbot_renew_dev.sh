#!/bin/bash

docker compose -f docker-compose-dev.yaml exec -ti certbot certbot renew --quiet --non-interactive
docker compose -f docker-compose-dev.yaml restart nginx
