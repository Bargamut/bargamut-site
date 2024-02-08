### STAGE 1: Build ###

FROM node:20.11.0-alpine as builder

LABEL maintainer="Paul Petrov (paul@bargamut.ru)"

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy npm package files
COPY package*.json ./

RUN ping -c 1 bargamut.ru && npm set progress=false && npm ci --no-audit --omit=optional --silent

# Copy app files to out container
COPY . .

RUN npm run build



### STAGE 2: Setup ###

FROM nginx:1.14-alpine

LABEL maintainer="Paul Petrov (paul@bargamut.ru)"

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

# Copy build files from first image to nginx dir
COPY --from=builder /usr/src/app/public/ /usr/share/nginx/html/

CMD ["nginx", "-g", "daemon off;"]