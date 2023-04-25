JokeBoxdb = new Mongo.Collection("JokeBox")

// Meteor.methods({
//     addJoke(joke) {
//       JokeBoxdb.insert({text: joke});
//     }
//   });

  JokeBoxdb.allow({
    insert(){
      return true
    },
    update() {
      return true
    },
    remove() {
      return true
    }
  })