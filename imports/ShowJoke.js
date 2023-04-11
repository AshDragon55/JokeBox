import { Session } from 'meteor/session'

Session.set('myJoke','test joke')

let getJoke = ()=>{
    // function to fetch/read data using a JavaScript promise
    fetch('https://icanhazdadjoke.com/', {
        method:'Get',
        headers: {
            Accept: 'application/json'
        }
    })
    .then(response => response.json()) // convert promise data to json
    .then(data => {
        console.log(data)
        Session.set('myJoke', data.joke)
    }) 
    .catch(err => console.error(err));
}

Template.Showjoke.onCreated(()=>{
    setInterval(getJoke(), 5000)
})


Template.Showjoke.helpers({
    dayJoke(){
        return Session.get('myJoke')
    }
})



