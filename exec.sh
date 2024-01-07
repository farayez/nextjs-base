#!/bin/bash
docker build --file Dockerfile.prod -t nextjs-base-01 .
docker run --init -p 3000:3000 -p 3001:3001 -it nextjs-base-01
