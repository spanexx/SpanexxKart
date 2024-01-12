import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ContainerComponent } from './container/container.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { RegFormComponent } from './reg-form/reg-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: "full" },
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'container', component: ContainerComponent },
    {path: 'reg-form', component: RegFormComponent },
    {path: 'track-order', component: TrackOrderComponent }
];
