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
    'mouseover .js-rate'() {
        console.warn("leave me alone")
    }
})