import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutWirthlinComponent } from './components/about-wirthlin/about-wirthlin.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProspectsComponent } from './components/prospects/prospects.component';
import { RepresentationsComponent } from './components/representations/representations.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  { path: 'about-wirthlin', component: AboutWirthlinComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'prospects', component: ProspectsComponent},
  { path: 'representations', component: RepresentationsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingProviders: any[] = [
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
