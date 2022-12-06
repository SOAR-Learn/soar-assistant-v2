FROM node:16.16.0
WORKDIR /app
COPY . /app
RUN npm install
CMD node .
