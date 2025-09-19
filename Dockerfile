# ------------------------
# 1. Build stage
# ------------------------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Build Next.js app
RUN npm run build

# ------------------------
# 2. Production stage
# ------------------------
FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV=production

# Copy only the necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Install only production dependencies
RUN npm install --production --frozen-lockfile

# Expose port (Next.js defaults to 3000)
EXPOSE 3000

# Start Next.js in production mode
CMD ["npm", "start"]
