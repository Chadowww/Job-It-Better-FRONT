FROM node:18.17.1

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y nginx && rm -rf /var/lib/apt/lists/*

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

#COPY ./nginx.conf /etc/nginx/conf.d/default.conf
#
#CMD ["nginx", "-g", "daemon off;"]
CMD [ "npm", "run", "serve" ]
EXPOSE 8080