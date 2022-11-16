FROM node:16.17.1 as build
WORKDIR "/app"
COPY . /app
RUN yarn
RUN yarn build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 8008
CMD ["nginx", "-g", "daemon off;"]

ENV FTP_PROXY="ftp://bighug.ujaen.es:8008"
ENV HTTP_PROXY="http://bighug.ujaen.es:8008"
ENV HTTPS_PROXY="https://bighug.ujaen.es:8008"
ENV NO_PROXY="*.es,127.0.0.0/8"