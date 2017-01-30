FROM node

WORKDIR /app

ADD package.json package.json

RUN npm install

ADD .babelrc .babelrc
ADD webpack.config.js webpack.config.js

ADD src src
ADD test test

CMD ["npm", "start"]
