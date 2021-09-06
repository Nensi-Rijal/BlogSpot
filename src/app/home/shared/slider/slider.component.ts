import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }
  blogs: any;
  constructor(private blogProxy: BlogService) { }

  ngOnInit(): void {
    this.getCategory()
  }
  getCategory(){
    this.blogProxy.getBlog().subscribe((data: any) => {
      this.blogs = data;
      console.log(this.blogs)
    })
  }
}
