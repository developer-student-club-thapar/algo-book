FROM node:alpine

WORKDIR '/app'

COPY package.json .

RUN npm install
RUN npm i nodemon

COPY src ./src
COPY webpack ./webpack
COPY webpack.config.js .
COPY .babelrc .


CMD ["npm" , "run" , "dev"]
