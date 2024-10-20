FROM node:21

WORKDIR /app

ARG NEXT_PUBLIC_CAPTCHA_SITE_KEY
ARG NEXT_PUBLIC_BASE_URL

ENV NEXT_PUBLIC_CAPTCHA_SITE_KEY=$NEXT_PUBLIC_CAPTCHA_SITE_KEY
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL

COPY package*.json ./
RUN npm ci

COPY . .

ENV NEXT_SHARP_PATH=/tmp/node_modules/sharp

RUN npm run build

CMD ["npm", "start"]
