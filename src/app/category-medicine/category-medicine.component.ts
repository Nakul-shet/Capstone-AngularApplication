import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { ActivatedRoute } from '@angular/router';
import { MedicineServiceService } from '../services/medicine-service.service';

@Component({
  selector: 'app-category-medicine',
  templateUrl: './category-medicine.component.html',
  styleUrls: ['./category-medicine.component.css']
})
export class CategoryMedicineComponent {

  categoryId : any;
  categoryItems : any = []
  categoryName : any;

  constructor(private _medicineCategory : MedicineServiceService , private _route : ActivatedRoute){
    
  }

  ngOnInit(){
    this.categoryId = this._route.snapshot.params['id']
    this.categoryName = this._route.snapshot.params['name']

    this._medicineCategory.getMedicineByCategoryId(this.categoryId).subscribe((result) => {
      console.log(result)

      this.categoryItems = result
    })
  }

}
