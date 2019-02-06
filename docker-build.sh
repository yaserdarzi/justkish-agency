#!/usr/bin/env bash

npm ci
npm run build

docker image build -t dr.putech.app:9595/arioo-web .
docker image push dr.putech.app:9595/arioo-web
