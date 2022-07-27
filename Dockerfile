FROM node:16-alpine AS BUILD
WORKDIR /build
COPY . /build
RUN apk add --no-cache curl
RUN npm i -g npm \ 
&& npm i --production \
&& npm cache verify
RUN rm -r /build/Dockerfile /build/package-lock.json 

FROM node:16-alpine AS APP
ENV NODE_ENV "production"
LABEL maintainer="Celendi Team" version="Pre-Release" description="A Pre-Release build of Celendis Site"
EXPOSE 3000/tcp

WORKDIR /bot
COPY --from=BUILD /usr/lib/ /usr/lib/
COPY --from=BUILD /lib/ /lib/
COPY --from=BUILD /usr/bin/curl /usr/bin/curl
COPY --from=BUILD /build/ /bot/

HEALTHCHECK --interval=60s --timeout=10s CMD curl -s -f -o /dev/null http://localhost:3000 || exit 1
ENTRYPOINT ["node", "app.js"]
