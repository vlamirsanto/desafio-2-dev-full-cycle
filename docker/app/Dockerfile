FROM node:alpine

WORKDIR /var/www/html

COPY ./src .

RUN npm install

EXPOSE 3000

CMD [ "node", "index.js" ]