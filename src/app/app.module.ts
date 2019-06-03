import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SociallinksComponent } from './sociallinks/sociallinks.component';
import { MusicComponent } from './music/music.component';
import { BioComponent } from './bio/bio.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BookingsComponent } from './bookings/bookings.component';
import { MenuComponent } from './menu/menu.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { TourComponent } from './tour/tour.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const appRoutes: Routes = [
  { path: 'app-tour', component: TourComponent },
  { path: 'app-bio', component: BioComponent },
  { path: 'app-gallery', component: GalleryComponent },
  { path: 'app-music', component: MusicComponent },
  { path: 'app-bookings', component: BookingsComponent },
  { path: '**', component: LandingComponent },
  { path: '', component: LandingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SociallinksComponent,
    MusicComponent,
    BioComponent,
    GalleryComponent,
    BookingsComponent,
    MenuComponent,
    TopnavbarComponent,
    TourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
