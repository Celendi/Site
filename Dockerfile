FROM alpine
RUN apk add node
RUN mkdir -p /usr/src/soon
WORKDIR /usr/src/soon
COPY package.json /usr/src/soon
RUN npm install
COPY . /usr/src/soon
CMD ["node", "app.js"]
