<<<<<<< HEAD
FROM node:16
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied where available (npm@5+)
COPY package*.json ./
RUN npm install sequelize@5.21.3 && npm install pg@8.2.1
RUN npm ci 
# Bundle app source
COPY . .
EXPOSE 8080
CMD [ "npm", "run", "prod" ]
=======
FROM node:12
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied where available (npm@5+)
COPY package*.json ./
RUN npm ci
# Bundle app source
COPY . .
EXPOSE 8080
CMD [ "npm", "run", "prod" ]
>>>>>>> 29b55cd4011b52eece6768a684693f6aa3e0b435
