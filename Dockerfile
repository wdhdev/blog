FROM node:22

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 4321

CMD ["npm", "run", "build", "&&", "npm", "start"]
