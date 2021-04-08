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


@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    NavItemComponent,
    CenterbarComponent,
    HeaderbarComponent,
    RightSidebarComponent,
    MainbodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
