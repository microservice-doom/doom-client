FROM node:8.11.4-jessie

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

CMD yarn serve
