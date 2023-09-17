



import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { MaterialModule } from './modulo-material/modulo-material.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoginAdministradorComponent } from './components/login-administrador/login-administrador.component';
import { LoginEstudianteComponent } from './components/login-estudiante/login-estudiante.component';
import { StudentsComponent } from './components/students/students.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialComponent } from './components/material/material.component';
import { MaterialModule } from './material.module';
import { EditarCursoDialogComponent } from './components/editar-curso-dialog/editar-curso-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ToolbarComponent,
    LoginAdministradorComponent,
    LoginEstudianteComponent,
    StudentsComponent,
    NavbarComponent,
    MaterialComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule,MaterialModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
