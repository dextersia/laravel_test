import Home from './vue/Home';
import Station from './vue/Station';

export default {
    mode: 'history',
    routes : [
        {
            path: '/',
            component: Home
        },
        {
            path: '/portal/station',
            component: Station
        }
    ]
};