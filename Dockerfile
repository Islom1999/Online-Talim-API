FROM node:16

WORKDIR /islom/src/app

COPY package*.json ./

COPY . .

RUN npm i
RUN npm run build

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "start:prod"]