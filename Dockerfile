FROM node:14 

# create app directory in container , which will be wokring directory
WORKDIR /app

# copy package.json and package-lock.json to containe beacuse we need to install dependencies
COPY package*.json ./

# install dependecies
RUN npm install

# bundle app source to container beacuse we need to run our app
COPY . .

# expose port 3000 to the outside world beacuse we need to access our app from outside
EXPOSE 3000

# run the app with node command
CMD ["node", "index.js"]