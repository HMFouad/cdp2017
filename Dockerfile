FROM node:latest

WORKDIR /home/node/app/

COPY ./GGHB/ /home/node/app/

RUN npm install

EXPOSE 4200

CMD [ "npm", "start" ]
