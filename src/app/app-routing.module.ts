import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { CreateClientComponent } from './create-client/create-client.component';

const routes: Routes = [
  {path: 'clients', component: ClientListComponent},
  {path: 'create-client', component: CreateClientComponent},
  {path: '', redirectTo: 'clients', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
