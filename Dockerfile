FROM node:17-alpine

WORKDIR /app
ENV PATH="./node_modules/.bin:$PATH"


COPY package.json .

RUN npm install 

COPY /src .

EXPOSE 3000

CMD ["npm", "start"]