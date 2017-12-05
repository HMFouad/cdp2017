FROM node:latest

COPY . /cdp2017

RUN cd cdp2017 && npm install
RUN ls
RUN echo $USER

EXPOSE 8080

CMD [ "npm", "start" ]
