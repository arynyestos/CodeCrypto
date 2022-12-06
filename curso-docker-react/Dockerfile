FROM node:16 AS miIMagen
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM nginx:latest
COPY --from=miIMagen /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]