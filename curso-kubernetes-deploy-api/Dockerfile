FROM node:latest

WORKDIR /aplicación

COPY ./package.json .

RUN yarn

COPY . .

CMD ["node", "app.js"] #Importantes las comillas dobles