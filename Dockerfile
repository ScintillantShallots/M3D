FROM node:6

RUN mkdir -p /usr/src
WORKDIR /usr/src

COPY package.json /usr/src
RUN npm install

ADD . /data

ENV PORT 8000
EXPOSE $PORT

CMD npm start