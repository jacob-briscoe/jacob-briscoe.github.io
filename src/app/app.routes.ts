import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'other',
        loadComponent: () => import('./other/other.component').then(m => m.OtherComponent)
    }
];
