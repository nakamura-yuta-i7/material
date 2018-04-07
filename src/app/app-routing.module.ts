import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TypographyComponent } from './typography/typography.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutComponent } from './layout/layout.component';
import { ButtonsIndicatorsComponent } from './buttons-indicators/buttons-indicators.component';
import { PopupsModalsComponent } from './popups-modals/popups-modals.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'buttons-indicators', component: ButtonsIndicatorsComponent },
  { path: 'popups-modals', component: PopupsModalsComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  declarations: []
})
export class AppRoutingModule { }
