import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { RegisterFormComponent } from './register-form/register-form.component';
import { AppLoadModule } from './shared/app-load/app-load.module';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content-section/content.component';
import { HomeComponent } from './home/home.component';
import { PressReleaseComponent } from './press-release-component/press-release.component';
import { AADComponent } from './AADPage/AAD.component';
import { AADFormComponent } from './AADForm/AADForm.component';
import { AADContentComponent } from './AADContent/AADContent.component';
import { AADHeroImage } from './AADHeroImage/AADHeroImage.component';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from './shared/serializer/serializer.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero-component/hero.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { SliderComponent } from './slider-component/slider.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { AboutDreamSection } from './about-dream-section/about-dream.component';
import { RequestFormComponent } from './requested-printed-report-form/request-form.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { VideoSliderComponent } from './video-slider/video-slider.component';
import { SwiperModule } from 'swiper/angular';
import { ShutterstockSectionComponent } from './shutterstock-section/shutterstock-section.component';
import { DisclaimerSectionComponent } from './disclaimer-section/disclaimer-section.component';
import { VideoComponent } from './video/video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    PressReleaseComponent,
    AADComponent,
    AADFormComponent,
    AADContentComponent,
    AADHeroImage,
    HeaderComponent,
    HeroComponent,
    AboutSectionComponent,
    SliderComponent,
    ImageGridComponent,
    AboutDreamSection,
    RequestFormComponent,
    MobileMenuComponent,
    VideoSliderComponent,
    ShutterstockSectionComponent,
    DisclaimerSectionComponent,
    VideoComponent
  ],
  imports: [
    AppRoutingModule,
    YouTubePlayerModule,
    AppLoadModule,
    SharedModule,
    FontAwesomeModule,
    NgxMasonryModule,
    SwiperModule
  ],
  providers: [
    {
      provide: UrlSerializer,
      useClass: LowerCaseUrlSerializer
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
