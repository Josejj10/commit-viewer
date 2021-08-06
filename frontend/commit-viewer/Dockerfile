FROM node:14
RUN mkdir /frontend
WORKDIR /frontend
ENV PATH /frontend/node_modules/.bin:$PATH
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn
ADD . .  
EXPOSE 3000
