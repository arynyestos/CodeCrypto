FROM node:16 as compilado
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
RUN yarn build

FROM nginx:1.15
COPY --from=compilado /app/dist /usr/share/nginx/html
