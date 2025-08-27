import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { LinksComponent } from './pages/links/links.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'certs', component: CertificationsComponent },
  { path: 'links', component: LinksComponent }
];