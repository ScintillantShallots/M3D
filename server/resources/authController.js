
// const mongoose = require('mongoose');
// // const bcrypt = require('bcrypt');
// const User = require('../models/userSchema');
// const jwt = require('jsonwebtoken');

// var crypto = require('crypto')
//   , key = 'salt_from_the_user_document'
//   , plaintext = 'password'
//   , cipher = crypto.createCipher('aes-256-cbc', key)
//   , decipher = crypto.createDecipher('aes-256-cbc', key);

// const saveUser = function (userId, password, cb) {
//     bcrypt.hash(password, 8, (err, hash) => {
//         var newUser = new User({
//             userId: userId, 
//             projects: [],
//             password: hash
//         });
//         console.log('userId', userId)
//         console.log('assword', password)
//         console.log('hashed', hash)
//         User.findOne({userId: userId})
//             .then((result) => {
//                 if (result) {
//                     console.log('a user with that name already exists')
//                     cb(400);
//                 } else {
//                     console.log('didnt find a user with that name')
//                     let newUser = new User({
//                         userId: userId,
//                         projects: [], 
//                         password: hash
//                     });
//                     newUser.save()
//                         .then((result) => {
//                             console.log('saved user to db', result)
//                             // secret should really be a private key
//                             jwt.sign({
//                                 data: userId
//                             }, 'secret', { expiresIn: '1h' }, function (err, token) {
//                                 console.log('token :', token)
//                                 cb(200, token);
//                             });
//                         })
//                         .catch((err) => {
//                             console.log(err);
//                             cb(500);
//                         });
//                 }
//          })
//     })
// }

// const validateUser = function(userId, password, cb) {
//     let retrievedHash;

// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const User = require('../models/userSchema');
// const Project = require('../models/projectSchema');
// const jwt = require('jsonwebtoken');

// let grabProjectsAndComponents = function(userId, callback) {
//   console.log('ISNIDE ABOUT TOGRAB PROJECTS AND COMPONENTS')
//   Project.find({userId: userId})
//     .then((projects) => {
//       console.log('sending projects back!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1');
//       callback(projects);
//     })
//     .catch((err) => {
//       console.log('ERROR IN GRABBING ALL THE PROJECTS BY THIS DUDE');
//       console.log(err);
//     });
// }

// const saveUser = function (userId, password, cb) {
//   User.findOne({userId: userId})
//   .then((result) => {
//     if (result) {
//       console.log('a user with that name already exists')
//       cb(400);
//     } else {
//       console.log('didnt find a user with that name')
//       bcrypt.hash(password, 8, (err, hash) => {
//         let newUser = new User({
//           userId: userId,
//           projects: [],
//           password: hash
//         });
//         newUser.save()
//         .then((result) => {
//           console.log('saved user to db', result)
//           // secret should really be a private key
//           jwt.sign({
//             data: userId
//           }, 'secret', { expiresIn: '1h' }, function (err, token) {
//             console.log('token :', token)
//             cb(200, token, {});
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//           cb(500);
//         });
//       })
//     }
//   })
// }

// const validateUser = function(userId, password, cb) {
//   let retrievedHash;

//   User.findOne({userId: userId}, (err, result) => {
//     console.log('db result', result)
//     if (result) {
//       retrievedHash = result.password;
//       bcrypt.compare(password, retrievedHash, function(err, res) {
//         if (res) {
//           jwt.sign({
//             data: userId
//           }, 'secret', { expiresIn: '1h' }, function (err, token) {
//             console.log('token :', token)
//             grabProjectsAndComponents(userId, function(projects) {
//               console.log('===============================================================================')
//               cb(true, token, projects);
//             })
//           });
//         } else {
//           console.log('bcrypt wrong password')
//           cb(false)
//         }
//       })
//     } else {
//       cb(400)
//     }


//   })
// }

// QUICK COPY AND PASTE FROM CONTROLLER. CAN BE TAKEN OUT AND EXPORTED INSTEAD

//     User.findOne({userId: userId}, (err, result) => {
//         console.log('db result', result)
//         if (result) {
//             retrievedHash = result.password;
//             bcrypt.compare(password, retrievedHash, function(err, res) {
//                 if (res) {
//                     // secret should really be a private key
//                     jwt.sign({
//                         data: userId
//                     }, 'secret', { expiresIn: '1h' }, function (err, token) {
//                         console.log('token :', token)
//                         cb(res, token);
//                     });
//                 } else { 
//                     console.log('bcrypt wrong password')
//                     cb(false)
//                 }
//             })
//         } else { 
//             cb(400)
//         }

//     })
// }   
 
// module.exports.saveUser = saveUser;
// module.exports.validateUser = validateUser;
