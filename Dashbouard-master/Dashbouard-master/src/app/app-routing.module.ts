import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { DetailAdminComponent } from './admin/detail-admin/detail-admin.component';
import { ListAdminComponent } from './admin/list-admin/list-admin.component';
import { UpdateAdminComponent } from './admin/update-admin/update-admin.component';
import { AddBoutiqueComponent } from './boutique/add-boutique/add-boutique.component';
import { DetailBoutiqueComponent } from './boutique/detail-boutique/detail-boutique.component';
import { ListBoutiqueComponent } from './boutique/list-boutique/list-boutique.component';
import { UpdateBoutiqueComponent } from './boutique/update-boutique/update-boutique.component';
import { AddBoutiquierComponent } from './boutiquier/add-boutiquier/add-boutiquier.component';
import { DetailBoutiquierComponent } from './boutiquier/detail-boutiquier/detail-boutiquier.component';
import { ListBoutiquierComponent } from './boutiquier/list-boutiquier/list-boutiquier.component';
import { UpdateBoutiquierComponent } from './boutiquier/update-boutiquier/update-boutiquier.component';
import { AddCategoryComponent } from './Category/add-category/add-category.component';
import { DetailCategoryComponent } from './Category/detail-category/detail-category.component';
import { ListCategoryComponent } from './Category/list-category/list-category.component';
import { UpdateCategoryComponent } from './Category/update-category/update-category.component';
import { GuardService } from './guard.service';
import { AddlocaliteComponent } from './localite/addlocalite/addlocalite.component';
import { DetaillocaliteComponent } from './localite/detaillocalite/detaillocalite.component';
import { ListlocaliteComponent } from './localite/listlocalite/listlocalite.component';
import { UpdatelocaliteComponent } from './localite/updatelocalite/updatelocalite.component';
import { LoginComponent } from './login/login.component';
import { AddProduitComponent } from './produit/add-produit/add-produit.component';
import { DetailProduitComponent } from './produit/detail-produit/detail-produit.component';
import { ListProduitComponent } from './produit/list-produit/list-produit.component';
import { UpdateProduitComponent } from './produit/update-produit/update-produit.component';



const routes: Routes = [

 { path: '', component: LoginComponent,},
   { path: 'login', component: LoginComponent },
  { path: 'accueil', component: AccueilComponent },
  {path: 'listAdmin', component: ListAdminComponent},
  {path: 'addAdmin', component: AddAdminComponent},
  {path: 'updateAdmin/:id', component: UpdateAdminComponent},
  {path: 'detailAdmin/:id', component: DetailAdminComponent},

  {path: 'addBoutique', component: AddBoutiqueComponent},
  {path: 'listBoutique', component: ListBoutiqueComponent},
  {path: 'detailBoutique/:id', component: DetailBoutiqueComponent},
  {path: 'updateBoutique/:id', component: UpdateBoutiqueComponent},
  

  {path: 'addProduit', component: AddProduitComponent},
  {path: 'listProduit', component: ListProduitComponent},
  {path: 'detailProduit/:id', component: DetailProduitComponent},
  {path: 'updateProduit/:id', component: UpdateProduitComponent},

  {path: 'addBoutiquier', component: AddBoutiquierComponent},
  {path: 'listBoutiquier', component: ListBoutiquierComponent},
  {path: 'detailBoutiquier/:id', component: DetailBoutiquierComponent},
  {path: 'updateBoutiquier/:id', component: UpdateBoutiquierComponent},

  {path: 'addCategorie', component: AddCategoryComponent},
  {path: 'listCategorie', component: ListCategoryComponent},
  {path: 'detailCategorie/:id', component: DetailCategoryComponent},
  {path: 'updateCategorie/:id', component: UpdateCategoryComponent},

  {path: 'addLocalite', component: AddlocaliteComponent},
  {path: 'listLocalite', component: ListlocaliteComponent},
  {path: 'detailLocalite/:id', component: DetaillocaliteComponent},
  {path: 'updateLocalite/:id', component: UpdatelocaliteComponent},

 




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
