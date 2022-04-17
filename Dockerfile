FROM node:16-alpine

WORKDIR /pet_app/client

COPY client/package*.json ./

RUN npm install

COPY client/. .

RUN npm run build

WORKDIR /pet_app/server

COPY server/package*.json ./

RUN npm install

COPY server/. .

CMD ["npm", "start"]