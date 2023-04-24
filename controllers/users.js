const User = require('../models/user');

// in this controller we will define the functions theta will be use in routes
// Crud controllers

// get all users 
exports.getUsers = (req, res, next) => {
    
    // findAll function is provided by sequelize to get all users
    User.findAll()
        .then(users => {
            res.status(200).json({users: users});
        })
        .catch(err => console.log(err));

}

// get a single user by id - here we will use params beacuse we will get id form url 
exports.getUser = (req, res, next) => {

    const userId = req.params.userId;

    // findByPk is provided by sequelize to get a single user by id while passing id as a parameter
    User.findByPk(userId)
        .then(user => {
            if(!user){
                return res.status(404).json({message: 'user not found'});
            }
            res.status(200).json({user:user});
        })
        .catch(err => console.log(err));

}

// create a user - here we will use body beacuse we will get data from body and we will use post method
exports.createUser = (req, res, next) => {

    const name = req.body.name;
    const email = req.body.email;
    
    // create function is provided by sequelize to create a user while pssing paramter as an object with name and email
    User.create({
        name: name,
        email: email
    })
    .then(result =>{
        console.log('created user');
        res.status(201).json({ message: 'user created successfully', user: result})
    })
    .catch(err =>{
        console.log(err);
    })

}

// update a user - here we will use body beacuse we wil get data from body and we will use put method
// we need user id and body data to update a user and the we find user by PrimaryKey and upddate it
exports.updateUser = (req, res, next) => {

    const userId  = req.params.userId;
    const updatedName = req.body.name;
    const updatedEmail = req.body.email;

    // find user by id and update it
    User.findByPk(userId).then(user =>{
        if(!user){
            return res.status(404).json({message: 'user not found'});
        }

        user.name = updatedName;
        user.email = updatedEmail;
        return user.save();
    })
    .then(result =>{
        res.status(200).json({message: 'user updated!', user: result})
    }).catch(err => console.log(err));

}

// delete a user - here we will use params to get id from url and we will delete user by id
exports.deleteUser = (req, res, next) =>{

    const userId = req.params.userId;
    User.findByPk(userId).then(user =>{
        if(!user){
            return res.status(404).json({message: 'user not found!'})
        }
        return User.destroy({
            where:{
                id: userId
            }
        });
    })
    .then (result =>{
        res.status(200).json({message : 'user deleted!'});
    }).catch(err => console.log(err));
}

// now we want our user of app to use this functions so we will create routes for this functions