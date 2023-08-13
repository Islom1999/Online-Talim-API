FROM node:16

WORKDIR /islom/src/app

COPY package*.json ./

COPY . .

RUN npm i
RUN npm run build

RUN npx prisma generate

# Yaratgan faylni Docker konteyneriga nusxalash
COPY init-prisma.sh .  
# Faylga ijro huquqini berish
RUN chmod +x init-prisma.sh  
# Prisma migratsiyalarini bajarish
RUN ./init-prisma.sh  

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
