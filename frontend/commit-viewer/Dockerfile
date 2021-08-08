FROM node:14.5.0
RUN mkdir /frontend
WORKDIR /frontend
ENV PATH /frontend/node_modules/.bin:$PATH
ENV NODE_ENV=development
COPY ./package.json ./
RUN yarn add -g relay-compiler
RUN yarn
COPY . .  
EXPOSE 3000

# Final Stage
# FROM nginx

# EXPOSE 3000

# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# COPY --from=builder /app/build /usr/share/nginx/html