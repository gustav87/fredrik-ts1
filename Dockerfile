FROM node:16-alpine
WORKDIR /app
COPY . .
RUN yarn build
RUN npm install -g http-server
EXPOSE 8080
CMD npx http-server dist

