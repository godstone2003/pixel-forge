# frontend/Dockerfile

FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the source code
COPY . .

# Build the production-ready app
RUN npm run build

# Install `serve` to serve the built app
RUN npm install -g serve

EXPOSE 3001

# Serve the build output on port 3000
CMD ["serve", "-s", "dist", "-l", "3001"]
