import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineServiceService } from '../services/medicine-service.service';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent {

  medicineId : any;
  medicine : any;

  constructor(private _route : ActivatedRoute , private _medicineService: MedicineServiceService , private _router : Router){}

  ngOnInit(){

    this.medicineId = this._route.snapshot.params['id']

    this._medicineService.getMedicineById(this.medicineId).subscribe((result) => {
      this.medicine = result
      console.log(result)
      console.log(this.medicine)
    })
  }

  updateMedicine(){

    this._medicineService.updateMedicine(this.medicineId , {
      "medicineName" : this.medicine[0].medicineName,
      "medicinePrice" : this.medicine[0].medicinePrice,
      "medicineImage" : this.medicine[0].medicineImage,
      "medicineDescription" : this.medicine[0].medicineDescription,
      "seller" : this.medicine[0].seller,
      "categoryId" : this.medicine[0].categoryId
    })
    .subscribe((result) => {
        console.log(result)
        alert("Medicine Updated")
        this._router.navigate(['/AdminDashboard'])
    })
  }

}
