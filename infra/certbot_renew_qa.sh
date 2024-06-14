#!/bin/bash

docker compose -f docker-compose-prod.yaml exec -ti certbot certbot renew --quiet --non-interactive
docker compose -f docker-compose-prod.yaml restart nginx
