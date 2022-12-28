FROM node:16-alpine
WORKDIR /app
COPY . .
RUN yarn build
RUN npm install -g http-server
ENV VIRTUAL_HOST=fredrik.gstav.se
ENV LETSENCRYPT_HOST=fredrik.gstav.se
EXPOSE 80
CMD npx http-server -p 80 dist

