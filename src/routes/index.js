import { DefaultLayout, Layout2, Layout21, Layout22 } from '~/components/Layout';
import {
    Home,
    Property,
    PropertyDetails,
    Agent,
    AgentDetails,
    Agencies,
    AgenciesDetails,
    Carrer,
    LoanProcess,
    Blog,
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
        component: Property,
        layout: Layout2, // Layout có header, SearchTop và sidebar-left
    },
    {
        path: '/propertydetails',
        component: PropertyDetails,
        layout: DefaultLayout, // Layout có header và sidebar
    },
    {
        path: '/agent',
        component: Agent,
        layout: DefaultLayout, // Layout chỉ có header
    },
    {
        path: '/agentdetails',
        component: AgentDetails,
        layout: Layout22, // Layout có header và sidebar-right
    },
    {
        path: '/agencies',
        component: Agencies,
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
        component: Blog,
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
