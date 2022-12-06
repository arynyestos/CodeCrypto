FROM node:18
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn
COPY . .
EXPOSE 13080
CMD ["node", "server.js"]