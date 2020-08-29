import home from './components/home.vue'
import about from './components/about.vue'
import projects from './components/projects.vue'
import contact from './components/contact.vue'
import details from './components/details.vue'


export default [{
        path: '/',
        component: home
    },
    {
        path: "/about",
        component: about
    },
    {
        path: "/projects",
        component: projects
    },
    {
        path: "/contact",
        component: contact
    },
    {
        name: 'details',
        path: '/projects/:id',
        component: details
    }
]