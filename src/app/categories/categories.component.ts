import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  category : any = [];

  constructor(private _categoryService : CategoryService){}

  ngOnInit(){
    this._categoryService.getAllCategory().subscribe((result) => {
      console.log(result);

      this.category = result
    })
  }


}
