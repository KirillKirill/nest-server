#FROM postgres
#ENV POSTGRES_PASSWORD postgres
#ENV POSTGRES_DB testdb
#COPY init.sql /docker-entrypoint-initdb.d/

FROM node:current-slim

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build