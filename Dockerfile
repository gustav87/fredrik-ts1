FROM node:16-alpine
WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 8080
CMD yarn serve
