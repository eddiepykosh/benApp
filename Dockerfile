FROM node:18.17.0

WORKDIR /benApp

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]