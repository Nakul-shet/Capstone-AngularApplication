import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  constructor(private _categoryService : CategoryService , private _router : Router){}

  itemToAdd : any = {
    categoryName : "",
    categoryDescription : ""
  }

  addcategory(){
    this._categoryService.addNewCategory(
      {
        "categoryName" : this.itemToAdd.categoryName,
        "categoryDescription" : this.itemToAdd.categoryDescription
      }
    ).subscribe((result) => {
      console.log(result)
      alert("Category Addedby Admin")
      this._router.navigate(['/AdminCategory'])
    })
  }
}
