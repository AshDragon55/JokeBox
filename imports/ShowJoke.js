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

.then(response => response.json())
        .then(data => {
            document.querySelector("#jokeId").innerHTML = data.id
            document.querySelector("#jokeData").innerHTML = data.joke
            console.log(data)
        })
}

Template.Showjoke.onCreated(function () {
    getJoke()
    setInterval(getJoke, 5000)
}),



