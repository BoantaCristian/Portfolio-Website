import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

import { MatToolbarModule, MatCardModule, MatInputModule, MatButtonModule, MatTooltipModule } from '@angular/material';
import { AngularFontAwesomeModule  } from 'angular-font-awesome';

import { ToastrModule } from 'ngx-toastr';

import { SwiperModule } from "swiper/angular";
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    MatToolbarModule, MatCardModule, MatInputModule, MatButtonModule, SwiperModule, AngularFontAwesomeModule, NgxGalleryModule, MatTooltipModule,
    ToastrModule.forRoot({positionClass: 'toast-top-right'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
