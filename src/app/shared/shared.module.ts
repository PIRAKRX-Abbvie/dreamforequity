import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from './icon/icon.component';
import { BtnComponent } from './btn/btn.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecaptchaModule } from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';
import { SectionContentComponent } from './section-content/section-content.component';

@NgModule({
  declarations: [
    BtnComponent,
    IconComponent,
    CarouselComponent,
    SectionContentComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule, 
    NgbModule,
    RecaptchaModule
  ],

  exports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    RecaptchaModule,
    BtnComponent,
    IconComponent,
    CarouselComponent,
    SectionContentComponent
  ],
})

export class SharedModule {}
