# Use the official Node.js image
FROM node:20-alpine

#pnpm install global
RUN npm install -g pnpm


# Set working directory
WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the source code
COPY . .

# Compile TypeScript to JavaScript
RUN pnpm build

# Expose the app's port
EXPOSE 8000

# Start the application
CMD ["pnpm", "start"]
