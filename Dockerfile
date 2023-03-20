#FROM node:12.13-alpine
#
#WORKDIR /app
#
#COPY package*.json ./
#
#RUN npm install
#
#COPY . .
#
#COPY ./dist ./dist
#
#CMD ["npm", "run", "start:dev"]




# Use the official Node.js image as base
FROM node:14-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json to container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code to container
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application
#CMD ["npm", "start"]
CMD ["npm", "run", "start:dev"]



