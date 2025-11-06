import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login/login';
import { Contact } from './contact/contact';
import { Header } from './header/header';

const routes: Routes = [
{path: '', component: Header},
{path: 'login', component: Login},
{path: 'contact/:id', component: Contact}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
