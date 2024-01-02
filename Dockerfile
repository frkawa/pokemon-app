FROM node:20.10-alpine3.18
ENV NODE_ENV=development

WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm install

COPY . .