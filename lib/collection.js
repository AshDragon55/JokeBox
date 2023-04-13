JokeBoxdb = new Mongo.Collection("JokeBox")

Meteor.methods({
    addJoke(joke) {
      Jokes.insert({text: joke});
    }
  });