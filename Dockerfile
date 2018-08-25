FROM node:8.11.4-jessie

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

CMD yarn start
