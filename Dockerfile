FROM alpine:3.15
RUN apk add npm
RUN mkdir -p /usr/src/soon
WORKDIR /usr/src/soon
COPY package.json /usr/src/soon
RUN npm install
COPY . /usr/src/soon
CMD ["node", "app.js"]
