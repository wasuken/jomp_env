FROM node:latest

# Node.jsの設定
WORKDIR /app
COPY ./src/package*.json ./
RUN chown node: -R .

USER node

RUN npm install

CMD ["npm", "run", "dev"]
