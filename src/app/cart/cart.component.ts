import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items : any;
  total : number = 0;

  ngOnInit(){
    this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart') || '{}');
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.items.push({
        id : item.medicine_id,
        name : item.medicine_name,
        price : item.medicine_price,
        image : item.medicine_image,
        description : item.medicine_description,
				quantity: item.product_quantity
			});
			this.total += item.medicine_price * item.product_quantity;
		}
  }

  isCartEmpty() : boolean{
    if(this.items.length === 0){
      return true
    }else{
      return false
    }
  }

  removeItem(productID : any){

    let cart: any = JSON.parse(localStorage.getItem('cart') || '{}');

    cart.splice(productID , 1);

		localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload()
  }

}
