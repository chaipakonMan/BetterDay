import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ServicepageComponent } from './components/servicepage/servicepage.component';
import { InputpageComponent } from './components/inputpage/inputpage.component';
import { ResultpageComponent } from './components/resultpage/resultpage.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'services', component: ServicepageComponent},
  { path: 'input', component: InputpageComponent },
  { path: 'result', component: ResultpageComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
