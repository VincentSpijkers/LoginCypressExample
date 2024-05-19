FROM node:lts AS build
WORKDIR /app
COPY . .
COPY package*.json ./
RUN npm install
RUN npm run build --prod
FROM nginx:alpine
COPY --from=build /app/dist/login-cypress-example/browser/* /usr/share/nginx/html/
COPY /nginx.conf /etc/nginx/conf.d/default.conf
