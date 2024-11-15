import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFeedComponent } from './components/main-feed/main-feed.component';
import { FormDialogComponent } from './components/form-dialog/body.component';
import { SingleViewComponent } from './components/single-view/single-view.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth-guard';

const routes: Routes = [
  {path:'login', component:LoginComponent },
  {path:'', component:MainFeedComponent,/* canActivate:[AuthGuard] */ },
  // {path:'test', component:FormDialogComponent,canActivate:[AuthGuard] },
  {path:'blog/:id', component:SingleViewComponent ,/* anActivate:[AuthGuard] */},
  {path:'**',redirectTo:'',pathMatch:'full'  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
