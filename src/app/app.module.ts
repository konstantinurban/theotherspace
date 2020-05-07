import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CoWorkComponent } from './co-work/co-work.component';
import { CafeComponent } from './cafe/cafe.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ExhibitImagesComponent } from './gallery/exhibit-images/exhibit-images.component';
import { ImagesLoadedDirective } from './_directives/images-loaded.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    GalleryComponent,
    CoWorkComponent,
    CafeComponent,
    ContactComponent,
    AboutComponent,
    ExhibitImagesComponent,
    ImagesLoadedDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
