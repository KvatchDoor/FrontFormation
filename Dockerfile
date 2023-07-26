# Stage 1
FROM node:16.20.0-slim as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod
# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/display-formation /usr/share/nginx/html
