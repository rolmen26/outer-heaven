FROM node:21-alpine3.20 as builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:1.26.0-alpine3.19

RUN apk add --no-cache nodejs npm

WORKDIR /app

COPY --from=builder /app/dist /app
COPY --from=builder /app/package*.json /app

RUN npm ci --omit=dev

COPY ./etc/nginx/nginx.conf /etc/nginx/nginx.conf

COPY ./etc/bash/start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 80

CMD ["/start.sh"]
