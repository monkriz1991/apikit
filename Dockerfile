FROM node:20-alpine as builder
WORKDIR /app
RUN apk --no-cache add openssh g++ make python3 git
COPY package.json /app/
COPY package-lock.json /app/
RUN npm ci && npm cache clean --force
ADD . /app
COPY Docker/env.prod /app/.env

# build the project
RUN npm run build

# start final image
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app  /app
RUN npm install pm2 -g
ENV HOST 0.0.0.0
EXPOSE 3000
#ENTRYPOINT ["node", ".output/server/index.mjs"]
CMD ["pm2-runtime", ".output/server/index.mjs"]
