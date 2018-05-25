import { AppComponent } from './app.component';

import { Routes } from '@angular/router';
import { ProfileRegistrationComponent } from './profile-registration/profile-registration.component';

export const routes: Routes = [
    {
        path: 'profile',
        component: ProfileRegistrationComponent
    },
    {
        path: '',
        component: AppComponent,
        pathMatch: 'full'
    }
];
