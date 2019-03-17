import { NgModule } from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { RouterModule,Routes  } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { GetUserComponent } from './components/get-user/get-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';

const routes:Routes = [
  {path : '',redirectTo:'index',pathMatch:'full'},
  {path : 'user' ,component : UserComponent},
  {path : 'index' , component :IndexComponent },
  { path: 'get-user', component : GetUserComponent },
  { path: 'update-user', component : UpdateUserComponent },
{ path: 'delete-user', component: DeleteUserComponent }
];

@NgModule({
  declarations: [],
  imports : [RouterModule.forRoot(routes)],

  exports : [
    RouterModule
  ]
 
})
export class AppRoutingModule { }
