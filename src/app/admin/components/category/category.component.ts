import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryProxy: CategoryService) { }

  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(){
    this.categoryProxy.getCategory().subscribe((data: any) => {
      this.categories = data;
    })
  }
}
