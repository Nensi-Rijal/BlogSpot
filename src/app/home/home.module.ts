import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './home.component';
import { CardComponent } from './shared/card/card.component';
import { SliderComponent } from './shared/slider/slider.component';
import { DetailsComponent } from './components/details/details.component';
import { MainPageComponent } from './components/main-page/main-page.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CardComponent,
    SliderComponent,
    DetailsComponent,
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CKEditorModule,
    CarouselModule
  ]
})
export class HomeModule { }
