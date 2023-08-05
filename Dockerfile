FROM node:18.17.0

WORKDIR /benApp

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 2360

CMD ["node", "server.js"]