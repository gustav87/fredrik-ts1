FROM node:16-alpine
WORKDIR /app
COPY . .
RUN yarn build
RUN npm install -g http-server
ENV VIRTUAL_HOST=fredrik.gstav.se
EXPOSE 8080
CMD npx http-server dist

