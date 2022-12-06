FROM node:16 as compilada
WORKDIR /aplicación
COPY ./package.json . 
RUN yarn
COPY . . 
RUN yarn build

FROM nginx:1.15
COPY --from=compilada /aplicación/dist /usr/share/nginx/html

