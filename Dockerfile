FROM node:20-alpine

WORKDIR /app

COPY package.json .
COPY package-lock.json .


RUN npm install

COPY src ./src
COPY tsconfig.json ./tsconfig.json
COPY nest-cli.json ./nest-cli.json

RUN npm run build

EXPOSE 3002

CMD npm run start:dev
