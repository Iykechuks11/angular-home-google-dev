import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes = [
    {
        path: '', // Whenever users visit the app, we want them to be routed to the home page by default, that's why this path is empty
        component: HomeComponent,
        title: 'Home Page'
    },

    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Details Page'
    }
];

export default routeConfig;