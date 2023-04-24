# Crud-Node-Application

## Flow of the project 
- initiate node js app
- Util/databse.js : connection between postgres  and databse
- models/user.js : we want to create table of users in databse, define a model of user, which will use to create tabel in databse,we have id, it will increment automatically when we add new user, we have name and email
- controllers/users.js : Crud controllers -> in this controller we will define the functions theta will be use in routes
- routes/users.js : we have defined all the routes in the controller file and we are using them here in the routes file
- index.js : parse body of the request into json, set headers, test routes, crud routes, error handling, sync databse
- Dockerfile : write docker file for node js app
- Docker-compose.yml : Services --> node_app & node_db -> this file is used to define the services that make up your app with docker-compose which is a tool for defining and running multi-container docker applications.


## Database 
![image](https://user-images.githubusercontent.com/99068989/233877276-c9e74357-493a-4d6b-bbdc-fc10c2e7b4bd.png)

## Postman API
![image](https://user-images.githubusercontent.com/99068989/233877302-5b49504c-1bea-4f28-81fe-d508b4660942.png)

