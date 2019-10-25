FROM node:latest
LABEL maintainer="adrian.durran@digital.homeoffice.gov.uk"
RUN yarn global add nodemon
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN yarn install
EXPOSE 4050
RUN chmod +x /wait
CMD yarn start