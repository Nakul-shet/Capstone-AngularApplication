import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { ICategory } from '../models/category';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {

  categoryId : any;
  category : any;

  constructor(private _route : ActivatedRoute , private _categoryService : CategoryService , private _router: Router){}
  
  ngOnInit(){

    this.categoryId = this._route.snapshot.params['id']
    console.log(this.categoryId) 

    this._categoryService.getCategoryById(this.categoryId).subscribe((result) => {
      console.log(result);

      this.category = result
    })
  }

  updateCategory(){

    this._categoryService.updateCategory(this.categoryId , {
      "CategoryName" : this.category[0].categoryName,
      "CategoryDescription" : this.category[0].categoryDescription
    }).subscribe((result) => {
      console.log(result);

      alert("Category Updated");
      
      this._router.navigate(['/AdminCategory'])
    })
  }

}
