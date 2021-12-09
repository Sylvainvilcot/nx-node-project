FROM node:14-alpine

WORKDIR /usr/src/app

EXPOSE 4200

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build