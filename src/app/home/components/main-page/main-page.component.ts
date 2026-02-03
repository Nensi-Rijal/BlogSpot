import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  blogs: any[] = [];
  categories: any[] = [
    { name: 'Technology', icon: 'fas fa-laptop-code', count: 25 },
    { name: 'Travel', icon: 'fas fa-plane', count: 18 },
    { name: 'Food', icon: 'fas fa-utensils', count: 32 },
    { name: 'Lifestyle', icon: 'fas fa-heart', count: 28 }
  ];

  constructor(
    private blogService: BlogService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.loadBlogs();
    this.loadCategories();
  }

  loadBlogs(): void {
    this.blogService.getBlog().subscribe((data: any) => {
      this.blogs = data;
    });
  }

  loadCategories(): void {
    this.categoryService.getCategory().subscribe((data: any) => {
      if (data && data.length > 0) {
        this.categories = data.map((cat: any, index: number) => ({
          name: cat.name || cat,
          icon: this.getCategoryIcon(index),
          count: Math.floor(Math.random() * 30) + 10
        }));
      }
    });
  }

  getCategoryIcon(index: number): string {
    const icons = [
      'fas fa-laptop-code',
      'fas fa-plane',
      'fas fa-utensils',
      'fas fa-heart',
      'fas fa-camera',
      'fas fa-music',
      'fas fa-book',
      'fas fa-gamepad'
    ];
    return icons[index % icons.length];
  }
}
