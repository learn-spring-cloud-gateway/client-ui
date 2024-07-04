import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'student', loadChildren: () => import('./modules/student/student.module').then(m => m.StudentModule) },
  { path: '', redirectTo: '/auth', pathMatch: 'full' } // Optionnel, redirige vers 'auth' par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
