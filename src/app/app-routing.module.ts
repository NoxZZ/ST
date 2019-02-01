import { NgModule } from '@angular/core';
import { UserComponent } from './components/user/user.component';
import { RouterModule,Routes  } from '@angular/router';
import { IndexComponent } from './components/index/index.component';

const routes:Routes = [
  {path : '',redirectTo:'/index',pathMatch:'full'},
  {path : 'user' ,component : UserComponent},
  {path : 'index' , component :IndexComponent }
];

@NgModule({
  declarations: [],
  imports : [RouterModule.forRoot(routes)],

  exports : [
    RouterModule
  ]
 
})
export class AppRoutingModule { }
