import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

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
