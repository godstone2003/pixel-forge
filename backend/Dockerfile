# backend/Dockerfile

FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy the rest of the backend code
COPY . .

# Set environment variables if needed
# ENV MONGO_URI=...

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
