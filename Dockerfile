FROM node:14-alpine
COPY . /src
WORKDIR /src
RUN yarn install
EXPOSE 23333
ENTRYPOINT [ "yarn", "start" ]