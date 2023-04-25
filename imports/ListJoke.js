import * as bootstrap from 'bootstrap'
import { Session } from 'meteor/session'

Session.set('filter', 'all')

Template.ListJoke.onCreated(function () {
    // this.autorun(() => {
    this.subscribe('ListData');
    // });
})

Template.ListJoke.helpers({
    ListEmpty(){
        if (JokeBoxdb.find().count() > 0)
            return false
        return true
    }
})
Template.ListJoke.events({
    
})