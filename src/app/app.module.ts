import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccesMapComponent } from './components/acces-map/acces-map.component';
import { IconsGridComponent } from './components/icons-grid/icons-grid.component';
import { TextBasicComponent } from './components/text-basic/text-basic.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfilePhotoComponent } from './components/profile-photo/profile-photo.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BioComponent } from './components/bio/bio.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ArrowsAnimComponent } from './components/arrows-anim/arrows-anim.component';
import { ClientsBannerComponent } from './components/clients-banner/clients-banner.component';
import { FeaturesListComponent } from './components/features-list/features-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    AccesMapComponent,
    IconsGridComponent,
    TextBasicComponent,
    ImageSliderComponent,
    FooterComponent,
    NavComponent,
    ProfilePhotoComponent,
    ListComponent,
    HomeComponent,
    ContactComponent,
    BioComponent,
    PricingComponent,
    ArrowsAnimComponent,
    ClientsBannerComponent,
    FeaturesListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
