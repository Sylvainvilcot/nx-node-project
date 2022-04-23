FROM node:14-alpine as builder

WORKDIR /usr/src/app

RUN npm install -g @nrwl/cli

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build api-klassiq

FROM node:14-alpine as production
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist/apps/api/klassiq .
RUN npm install
EXPOSE 3000
CMD ["node", "main.js"]