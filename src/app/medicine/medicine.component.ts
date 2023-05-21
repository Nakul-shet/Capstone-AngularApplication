import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MedicineServiceService } from '../services/medicine-service.service';
import { IMedicine } from '../models/medicine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent {

    medicines : IMedicine[] = [];
    med : any;
    
    applyStyle : boolean = false;

    medicineSearchName : any;
    searchMedicines : any = [];

    modalProduct : any = {
      name : "",
      price : 0,
      details : "",
      image : ""
    }

    constructor(private _medicineService : MedicineServiceService , private _router : Router){}

    ngOnInit(){

      this._medicineService.getAllMedicine().subscribe((result)=> {
        console.log(result)
        this.medicines = result
      } , (err) => {
        console.log(err)
      })
    }

    addtocart(medicineId : number){

      this.medicines.find((medicine) => {
        if(medicine.medicineId == medicineId){
          this.med = medicine
        }
      })

      let itemToAdd ={
        medicine_id : this.med.medicineId,
        medicine_name: this.med.medicineName,
        medicine_image: this.med.medicineImage,
        medicine_price: this.med.medicinePrice,
        medicine_description: this.med.medicineDescription,
        product_quantity: 1
      }

      if (localStorage.getItem('cart') == null) {
        let cart: any = [];
        cart.push(JSON.stringify(itemToAdd));
        localStorage.setItem('cart', JSON.stringify(cart));
      }else {
        let cart: any = JSON.parse(localStorage.getItem('cart') || '{}');
        let index: number = -1;
        for (var i = 0; i < cart.length; i++) {
          let cartitem = JSON.parse(cart[i]);
          if (cartitem.medicine_id == itemToAdd.medicine_id) {
            index = i;
            break;
          }
        }
        if (index == -1) {
          cart.push(JSON.stringify(itemToAdd));
          localStorage.setItem('cart', JSON.stringify(cart));
        } else {
          let item = JSON.parse(cart[index]);
          item.product_quantity += 1;
          cart[index] = JSON.stringify(item);
          localStorage.setItem("cart", JSON.stringify(cart));
        }
      }

      
    alert("Added to the Cart")

      this._router.navigate(["/cart"])
    }

    viewDetails(medicine : IMedicine){

      this.applyStyle = true
  
      this.modalProduct = {
        name : medicine.medicineName,
        price : medicine.medicinePrice,
        details : medicine.medicineDescription,
        image : medicine.medicineImage
      }

    }

    handleStyleChange(){
      this.applyStyle = false
    }

}
