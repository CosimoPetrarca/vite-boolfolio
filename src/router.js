import { createWebHistory, createRouter } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import AboutPage from './pages/AboutPage.vue';
import ListPage from './pages/ListPage.vue';
import ProjectPage from './pages/ProjectPage.vue';
import TypePage from './pages/TypePage.vue';
import TechnologyPage from './pages/TechnologyPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/list',
            name: 'list',
            component: ListPage
        },
        {
            path: '/list/:slug',
            name: 'project',
            component: ProjectPage
        },
        {
            path: '/types/:slug',
            name: 'type',
            component: TypePage
        },
        {
            path: '/technologies/:slug',
            name: 'technology',
            component: TechnologyPage
        }     
    ]
});

export { router };