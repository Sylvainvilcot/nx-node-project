FROM node:14-alpine as builder

WORKDIR /usr/src/app

RUN npm install -g @nrwl/cli

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build client-classik

FROM nginx:alpine as production
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist/apps/client/classik /usr/share/nginx/html