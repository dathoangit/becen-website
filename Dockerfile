FROM node:18.17.0

RUN npm i -g next react

WORKDIR /usr/src/app

COPY package*.json /usr/src/app
COPY yarn.lock /usr/src/app
RUN cd /usr/src/app && yarn

COPY .  /usr/src/app

RUN cp .env.production .env
RUN yarn build

CMD ["yarn", "run", "start"]
