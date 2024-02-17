FROM node:18
WORKDIR /app
COPY . .
EXPOSE 42069
CMD ["node", "src/main.mjs"]
