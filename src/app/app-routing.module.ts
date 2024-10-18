import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFeedComponent } from './components/main-feed/main-feed.component';
import { FormDialogComponent } from './components/form-dialog/body.component';

const routes: Routes = [
  {path:'', component:MainFeedComponent },
  {path:'test', component:FormDialogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
