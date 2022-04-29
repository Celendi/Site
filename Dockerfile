FROM node:16-alpine AS APP
WORKDIR /app
COPY . /app
RUN npm i -g npm && npm i --production
CMD ["node", "app.js"]
