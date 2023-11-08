import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireModule } from '@angular/fire/compat';
import { FirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BottomTabNavBarComponent } from './bottom-tab-nav-bar/bottom-tab-nav-bar.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AppMaterialModule } from './app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodayComponent } from './today/today.component';


@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent, 
    SplashScreenComponent,
    NavbarComponent,
    BottomTabNavBarComponent,
    AddTaskComponent,
    TodayComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    // AngularFirestoreModule, 
    AppMaterialModule,
    FirestoreModule, 
    // AngularFireModule.initializeApp(environment.firebase), 
    FormsModule, ReactiveFormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
  
}
