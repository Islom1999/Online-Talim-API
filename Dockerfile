FROM node:16

WORKDIR /islom/src/app

COPY package*.json ./

COPY . .

RUN npm i
RUN npm run build

# Yaratgan faylni Docker konteyneriga nusxalash
COPY init-prisma.sh .  
# Faylga ijro huquqini berish
RUN chmod +x /islom/src/app/init-prisma.sh  
# Prisma migratsiyalarini bajarish
RUN /islom/src/app/init-prisma.sh  

RUN npx prisma generate


EXPOSE 3000

CMD ["npm", "run", "start:prod"]
