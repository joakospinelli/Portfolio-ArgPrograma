import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactoComponent, ContactoItem } from './components/contacto/contacto.component';
import { EducacionComponent, EducacionItem, EducacionDialog, EducacionCreate } from './components/educacion/educacion.component';
import { Error404Component } from './components/error404/error404.component';
import { ExperienciaComponent, ExperienciaDialog, ExperienciaItem } from './components/experiencia/experiencia.component';
import { HabilidadesComponent, HabilidadesItem } from './components/habilidades/habilidades.component';
import { LoginComponent, LoginDialogComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProyectosComponent, ProyectosItem } from './components/proyectos/proyectos.component';
import { SobreMiComponent, SobreMiCreate } from './components/sobre-mi/sobre-mi.component';
import { InfoComponent } from './components/info/info.component';
import { InterceptorService } from './services/interceptor.service';
import { FlashMessagesModule } from 'flash-messages-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactoComponent,
    ContactoItem,
    EducacionComponent,
    EducacionItem,
    EducacionDialog,
    EducacionCreate,
    Error404Component,
    ExperienciaComponent,
    ExperienciaDialog,
    ExperienciaItem,
    HabilidadesComponent,
    HabilidadesItem,
    LoginComponent,
    LoginDialogComponent,
    PortfolioComponent,
    ProyectosComponent,
    ProyectosItem,
    SobreMiComponent,
    SobreMiCreate,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatNativeDateModule,
    MatDialogModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 60,
      outerStrokeWidth: 16,
      outerStrokeColor: '#FA58B6',
      showSubtitle: false,
      showInnerStroke: false,
      showUnits: false,
      showImage: true,
      imageHeight: 45,
      imageWidth: 45,
      lazy: true
    }),
    FlashMessagesModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
