import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreciesComponent } from './components/precies/precies.component';
import { ProtectedComponent } from './components/protected/protected.component';
import { AuthGuardService } from './services/auth-guard.service';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'precies', component: PreciesComponent },
    {
        path: 'protected', component: ProtectedComponent,
        canActivate: [ AuthGuardService ]
    },
    { path: '**', pathMatch: 'full', redirectTo: '/home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
