FROM node:22-alpine

WORKDIR /app

COPY package* .

RUN npm install

COPY . .

CMD [ "npm", "run", "start" ]