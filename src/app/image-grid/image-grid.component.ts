import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryOptions, NgxMasonryComponent } from 'ngx-masonry';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss']
})
export class ImageGridComponent implements OnInit {
  public masonryOptions: NgxMasonryOptions = {
    percentPosition: true,
    gutter: 20
  };

  @ViewChild(NgxMasonryComponent) masonry: NgxMasonryComponent;

  masonryImages = [
    {
      url: '/assets/img/IMAGE_GRID_1.png'
    },
    {
      content:
        '<b>1 in 4 Black, Hispanic, and Multiracial women</b> believe that society’s beauty standards are racist.'
    },
    {
      url: '/assets/img/IMAGE_GRID_3.png'
    },
    {
      url: '/assets/img/IMAGE_GRID_4.png'
    },
    {
      url: '/assets/img/IMAGE_GRID_5.png'
    },
    {
      url: '/assets/img/IMAGE_GRID_6.png'
    },
    {
      content:
        '<b>Only 31% of women</b> agree that beauty standards are achievable.'
    },
    {
      url: '/assets/img/IMAGE_GRID_8.png'
    },
    {
      content:
        '<b>38% of Black women</b> feel more beautiful than how they believe society perceives them to be.'
    },
    {
      content:
        '<b>96% of women</b> said feeling beautiful impacts how they feel about themselves, ranging from Low to Completely.'
    },
    {
      url: '/assets/img/IMAGE_GRID_11.png'
    },
    {
      url: '/assets/img/IMAGE_GRID_12.png'
    },
    {
      url: '/assets/img/IMAGE_GRID_13.png'
    },
    {
      url: '/assets/img/IMAGE_GRID_14.png'
    },
    {
      url: '/assets/img/IMAGE_GRID_15.png'
    }
  ];

  ngOnInit() {}
}
