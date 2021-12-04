FROM node:17
WORKDIR /app
COPY package.json /app
RUN npm install
COPY ./src .
EXPOSE 3000
CMD [ "node", "index.js" ]