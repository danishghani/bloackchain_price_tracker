FROM node:16-alpine
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./
COPY ./dist /app/dist
# Install dependencies
RUN npm install

# Install Nest CLI globally (so it can be used during build)
RUN npm install -g @nestjs/cli

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Start the application
CMD ["npm", "run", "start:prod"]
