FROM node:18

LABEL maintainer="alexiadisanton@gmail.com harrypapadakis02@gmail.com nikolasbv10@gmail.com"

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --production

COPY . .

RUN apt-get update && apt-get install -y curl

EXPOSE 3008

HEALTHCHECK --interval=60s --timeout=10s --retries=3 CMD curl -f http://localhost:3008/health || exit 1

CMD [ "node", "server.js" ]
