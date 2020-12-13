import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CursoListComponent } from './curso-list/curso-list.component';
import { CursoFormComponent } from './curso-form/curso-form.component';
import { CursoService } from './service/curso.service';

@NgModule({
  declarations: [
    AppComponent,
    CursoListComponent,
    CursoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CursoService],
  bootstrap: [AppComponent]
})
export class AppModule { }