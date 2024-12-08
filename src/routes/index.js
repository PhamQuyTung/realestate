import { DefaultLayout, Layout2, Layout21, Layout22 } from '~/components/Layout';
import {
    Home,
    PropertyContent,
    PropertyDetails,
    AgentContent,
    AgenciesDetails,
    AgenciesContent,
    AgentDetails,
    LoanProcess,
    Carrer,
    BlogContent,
    BlogDetails,
    Contact,
    Dashboard,
} from '~/pages';

const publicRoutes = [
    {
        path: '/',
        component: Home,
        layout: DefaultLayout, // Layout chỉ có header
    },
    {
        path: '/property',
        component: PropertyContent,
        layout: Layout21, // Layout có header, SearchTop và sidebar-left
    },
    {
        path: '/propertydetails',
        component: PropertyDetails,
        layout: DefaultLayout, // Layout có header và sidebar
    },
    {
        path: '/agent',
        component: AgentContent,
        layout: DefaultLayout, // Layout chỉ có header
    },
    {
        path: '/agentdetails',
        component: AgentDetails,
        layout: Layout22, // Layout có header và sidebar-right
    },
    {
        path: '/agencies',
        component: AgenciesContent,
        layout: Layout22, // Layout có header và sidebar-right
    },
    {
        path: '/agenciesdetails',
        component: AgenciesDetails,
        layout: Layout22, // Layout có header và sidebar-right
    },
    {
        path: '/loanprocess',
        component: LoanProcess,
        layout: DefaultLayout, // Layout chỉ có header
    },
    {
        path: '/career',
        component: Carrer,
        layout: DefaultLayout, // Layout chỉ có header
    },
    {
        path: '/blog',
        component: BlogContent,
        layout: Layout22, // Layout có header và sidebar-right
    },
    {
        path: '/blogdetails',
        component: BlogDetails,
        layout: Layout22, // Layout có header và sidebar-right
    },
    {
        path: '/contact',
        component: Contact,
        layout: DefaultLayout, // Layout chỉ có header
    },
    // {
    //     path: '/dashboard',
    //     component: Dashboard,
    //     // requiresAuth: true
    // },
    //... more routes here
];

const privateRoutes = [
    // {
    //     path: '/dashboard',
    //     component: Dashboard,
    //     // requiresAuth: true
    // },
    //... more routes here
];

export { publicRoutes, privateRoutes };