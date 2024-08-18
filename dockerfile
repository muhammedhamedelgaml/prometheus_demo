FROM node:16.13.0 
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install

EXPOSE 8080
CMD ["node", "start"]

