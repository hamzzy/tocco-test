# Base image
FROM node:latest

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the ports
EXPOSE 3000 4000

# Define the command to start the app
RUN npx prisma generate
