import { FlowRouter } from 'meteor/ostrio:flow-router-extra'

BlazeLayout.setRoot('.mainContainer')

const normalRoute = FlowRouter.group()
const userRoutes = FlowRouter.group({
    triggersEnter: [
        (context, redirect) => {
            if (!Meteor.userId()) {
                if (context.route.name != 'index')
                    redirect('index')
            }
        }
    ]
})

normalRoute.route('/', {
    name: 'index',
    action() {
        BlazeLayout.render('appBody', { header: 'navBar', body: 'Showjoke' })
    }
})

userRoutes.route('/Showjoke', {
    name: 'Showjoke',
    action() {
        BlazeLayout.render('appBody', { header: 'navBar', body: 'Showjoke' })
    }
})

FlowRouter.route('/createuser', {
    name: 'createUser',
    action() {
        BlazeLayout.render('appBody', { header: 'navBar', body: 'createUserForm' })
    }
})
// FlowRouter.route('/showjokes', {
//     name: 'createUser',
//     action() {
//         BlazeLayout.render('appBody', { header: 'navBar', body: 'sh' })
//     }
// })

normalRoute.route('/login', {
    name: 'login',
    action() {
        BlazeLayout.render('appBody', { header: 'navBar', body: 'loginForm' })
    }
})

// catch-all
FlowRouter.route('*', {
    name: 'err404',
    action() {
        this.render('notFound')
    }
})