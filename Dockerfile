FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

ARG NEXT_PUBLIC_CAPTCHA_SITE_KEY

ENV NEXT_PUBLIC_CAPTCHA_SITE_KEY=$NEXT_PUBLIC_CAPTCHA_SITE_KEY

RUN npm run build

EXPOSE  3000

CMD ["npm", "start"]