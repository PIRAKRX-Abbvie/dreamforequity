import { Component, ViewEncapsulation, ViewChild, OnInit, ElementRef } from "@angular/core";
import { SwiperComponent } from "swiper/angular";
import { iconTypes } from "../shared/icon/icon.constants";
import { buttonStyles } from "../shared/btn/btn.component";

type videoData = { 
  id: string;
  poster: string;
  title: string;
  content: string;
}
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation, Scrollbar]);
 type Auto = 'auto'

@Component({
  selector: 'app-video-slider',
  templateUrl: './video-slider.component.html',
  styleUrls: ['./video-slider.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class VideoSliderComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper?: SwiperComponent;
  @ViewChild('videoCarouselContainer') videosContainer: ElementRef;

  buttonStyles = buttonStyles;
  iconTypes = iconTypes
  auto: Auto = 'auto';

  videos: videoData[] = [
    {
      id: 'jvBK8WdhHhs',
      poster: '/assets/img/Taneal_Video-tb.png',
      title: 'Defining Beauty',
      content: 'Eurocentric beauty standards exclude women of color. Taneal shares her experience of not only acknowledging her beauty, but celebrating it as a Black woman with pronounced skin conditions.'
    },
    {
      id: '-XZs_oI7MJc',
      poster: '/assets/img/Mariah_Video-tb.png',
      title: 'History of Beauty Standards',
      content: 'Society has long prized Eurocentric beauty standards, but the shifting face of America is changing that. Here, Mariah speaks to how that impacts her as a woman of Native American descent.'
    },
    {
      id: '35V8f_FIwHo',
      poster: '/assets/img/Kiyah_Video-tb.png',
      title: 'Appropriation',
      content: 'Beauty trends that originate with Black women often go uncredited. Kiyah speaks on appropriation, both from the perspective of a Black woman and a makeup artist.'
    },
    {
      id: 'ooruSsFuSxc',
      poster: '/assets/img/Ansa_Video-tb.png',
      title: 'Empowering Uniqueness',
      content: 'Beauty standards should not be defined by one look. Ansa shares what she thinks authentic representation looks like, how we can achieve it, and how it positively impacts women of color.'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  slideNext() {
    this.swiper?.swiperRef.slideNext(1000);
  }
  slidePrev() {
    this.swiper?.swiperRef.slidePrev(1000);
  } 

}
