FROM nginxinc/nginx-unprivileged:1.28.0-alpine

ENV TZ=Europe/Zurich

ADD ./dist-cdn/releases.tar.xz /var/www

EXPOSE 8080
