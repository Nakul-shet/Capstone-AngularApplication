import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent {

  category : any = [];

  constructor(private _categoryService : CategoryService){}

  ngOnInit(){
    this._categoryService.getAllCategory().subscribe((result) => {
      console.log(result);

      this.category = result
    })
  }

  deleteCategory(id : any){

    this._categoryService.deleteCategory(id).subscribe((result) => {
      console.log(result)

      alert("Category Deleted by Admin")

      window.location.reload();
    })
  }

}
