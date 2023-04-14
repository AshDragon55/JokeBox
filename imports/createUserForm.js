Template.createUserForm.events({
    'click .js-createUser'() {
        let firstname = document.querySelector("nu-fname")
        let lastname = document.querySelector("nu-lname")
        let Email = document.querySelector("nu-email")
        let username = document.querySelector("#nu-name")
        let password = document.querySelector("#nu-password")
        let confirmPwd = document.querySelector("#nu-confirmPassword")
        if (password.value != confirmPwd.value) {
            password.classList.add("errBox")
            confirmPwd.classList.add("errBox")
        }
        else {
            Meteor.call('createNewUserAccount', username.value, password.value, (err, result) => {
                if (err)
                    console.error(`create user error: ${err.reason}`)
                else {
                    if (result)
                        console.debug(`success: ${result}`)
                }
               
                
            })
        }
    }
})
