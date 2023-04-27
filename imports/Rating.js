Template.Rating.helpers({
    Ratings() {
        // console.info(this.ratings, Number(this.ratings))
        if (Number(this.Ratings) != NaN)
            return this.Ratings
        return null
    }
})

Template.Rating.events({
    'click .js-rate'(event) {
        // console.warn(this._id, event.currentTarget.id)
        JokeBoxdb.update({ _id: this._id },
            {
                $set: {
                    Ratings: parseInt(event.currentTarget.id)
                }
            })
    },

    

    'click .js-like'() {
        console.log()
        JokeBoxdb.update({ _id: this._id },
            
                {$inc: {like:1}}
                
            )
            
    },

    'click .js-dislike'(){
        JokeBoxdb.update({_id: this._id},

            {$inc:{dislike:-1}}
        )
   

    }
})

