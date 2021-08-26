FROM node:alpine

WORKDIR /var/www/html

COPY ./src .

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "node", "index.js" ]
