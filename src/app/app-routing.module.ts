import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ProjectDetailsGuard } from './guards/project-details.guard';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'projects', component: ProjectDetailsComponent, canActivate: [ProjectDetailsGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
