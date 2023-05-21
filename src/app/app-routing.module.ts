import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineComponent } from './medicine/medicine.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminMedicineComponent } from './admin-medicine/admin-medicine.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';
import { AdminGuardGuard } from './services/admin-guard.guard';
import { UserGuardGuard } from './services/user-guard.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryMedicineComponent } from './category-medicine/category-medicine.component';
import { SearchComponent } from './search/search.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { LandingComponent } from './landing/landing.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { SuccessfullComponent } from './successfull/successfull.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path : "" , redirectTo : "home" , pathMatch : "full"},
  {path : "home" , component : LandingComponent},
  {path : "medicine" , component : MedicineComponent , canActivate : [UserGuardGuard]},
  {path : "register" , component : RegisterComponent},
  {path : "login" , component : LoginComponent},
  {path : "cart" , component : CartComponent , canActivate : [UserGuardGuard]},
  {path : "checkout" , component : CheckoutComponent , canActivate : [UserGuardGuard]},
  {path : "AdminDashboard" , component : AdminMedicineComponent , canActivate : [AdminGuardGuard]},
  {path : "AdminCategory" , component : AdminCategoryComponent , canActivate : [AdminGuardGuard]},
  {path : "users" , component : UsersComponent},
  {path : "category" , component : CategoriesComponent},
  {path : "categoryMedicine/:id/:name" , component : CategoryMedicineComponent},
  {path : "search" , component : SearchComponent},
  {path : "addMedicine" , component : AddMedicineComponent , canActivate : [AdminGuardGuard]},
  {path : "updateMedicine/:id" , component : UpdateMedicineComponent},
  {path : "addCategory" , component : AddCategoryComponent},
  {path : "updateCategory/:id" , component : UpdateCategoryComponent},
  {path : "successfull" , component : SuccessfullComponent},
  {path : "**" , component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
