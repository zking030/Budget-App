import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { NavItemComponent } from './left-sidebar/nav-item/nav-item.component';
import { CenterbarComponent } from './centerbar/centerbar.component';
import { HeaderbarComponent } from './centerbar/headerbar/headerbar.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { MainbodyComponent } from './centerbar/mainbody/mainbody.component';
import { IonicModule } from '@ionic/angular';
import { ZippyComponent } from './left-sidebar/zippy/zippy.component';
import { ChartsComponent } from './charts/charts.component';
import { QuickSectionComponent } from './left-sidebar/quick-section/quick-section.component';
import {ReactiveFormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { CapComponent } from './centerbar/mainbody/cap/cap.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './centerbar/mainbody/dashboard/dashboard.component';
import { ZippyCardComponent } from './centerbar/mainbody/cap/zippy-card/zippy-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    NavItemComponent,
    CenterbarComponent,
    HeaderbarComponent,
    RightSidebarComponent,
    MainbodyComponent,
    ZippyComponent,
    ChartsComponent,
    QuickSectionComponent,
    CapComponent,
    DashboardComponent,
    ZippyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'dashboard' , component: DashboardComponent},
      {path:'cap' , component: CapComponent}
    ])
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
