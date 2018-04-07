import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyMaterialModule } from './my.material.module';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TypographyComponent } from './typography/typography.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutComponent } from './layout/layout.component';
import { ButtonsIndicatorsComponent } from './buttons-indicators/buttons-indicators.component';
import { ButtonsComponent } from './buttons-indicators/buttons/buttons.component';
import { ButtonTogglesComponent } from './buttons-indicators/button-toggles/button-toggles.component';
import { ChipsComponent } from './buttons-indicators/chips/chips.component';
import { ProgressComponent } from './buttons-indicators/progress/progress.component';
import { PopupsModalsComponent } from './popups-modals/popups-modals.component';
import { DialogSampleComponent } from './popups-modals/dialog-sample/dialog-sample.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TypographyComponent,
    NavigationComponent,
    LayoutComponent,
    ButtonsIndicatorsComponent,
    ButtonsComponent,
    ButtonTogglesComponent,
    ChipsComponent,
    ProgressComponent,
    PopupsModalsComponent,
    DialogSampleComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MyMaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
