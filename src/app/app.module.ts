import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { NameFilterPipe } from './pipe/name-filter.pipe';
import { ProfileGalleryComponent } from './profile-gallery/profile-gallery.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SetupDateComponent } from './setup-date/setup-date.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileGalleryComponent,
    NameFilterPipe,
    SetupDateComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
