# Use the official Node.js image as base
FROM node:18.17.1-alpine3.18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Expose the port that the Next.js app will run on
EXPOSE 3000

CMD npm run dev
