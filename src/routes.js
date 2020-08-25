import home from './components/home.vue'
import about from './components/about.vue'
import projects from './components/projects.vue'
import contact from './components/contact.vue'

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
    }
]