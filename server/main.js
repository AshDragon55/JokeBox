import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'
import '../lib/collection.js'
Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
  createNewUserAccount(user, pwd) {
    //create a JSON object with the user’s credential
    let options = {
      'username' : user,
      'password' : pwd
    }
    return Accounts.createUser(options)
  }
})

Meteor.publish('ListData', function () {
  return JokeBoxdb.find({}, {
    // fields: { 'first': 1, 'age': 1, 'profile': 1, 'ratings': 1, 'createdOn': 1, 'ownerId': 1 }
  })
})