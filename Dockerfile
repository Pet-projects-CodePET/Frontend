FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

ARG NEXT_PUBLIC_CAPTCHA_SITE_KEY

ENV NEXT_PUBLIC_CAPTCHA_SITE_KEY=$NEXT_PUBLIC_CAPTCHA_SITE_KEY

ENV NODE_ENV production

ENV NEXT_SHARP_PATH=/node_modules/sharp

RUN npm run build

EXPOSE  3000

CMD ["npm", "start"]