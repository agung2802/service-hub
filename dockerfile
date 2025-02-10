FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate --schema=prisma/schema.prisma

RUN npm run build

CMD [ "node", "dist/main" ]

EXPOSE 3000