import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { ListAdminComponent } from './admin/list-admin/list-admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule, ToastContainerModule, ToastrService } from 'ngx-toastr';
import {ToastModule} from 'primeng/toast';
import { UpdateAdminComponent } from './admin/update-admin/update-admin.component';
import { DetailAdminComponent } from './admin/detail-admin/detail-admin.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { AddBoutiqueComponent } from './boutique/add-boutique/add-boutique.component';
import { ListBoutiqueComponent } from './boutique/list-boutique/list-boutique.component';
import { UpdateBoutiqueComponent } from './boutique/update-boutique/update-boutique.component';
import { DetailBoutiqueComponent } from './boutique/detail-boutique/detail-boutique.component';
import { AddProduitComponent } from './produit/add-produit/add-produit.component';
import { ListProduitComponent } from './produit/list-produit/list-produit.component';
import { DetailProduitComponent } from './produit/detail-produit/detail-produit.component';
import { UpdateProduitComponent } from './produit/update-produit/update-produit.component';
import { AddBoutiquierComponent } from './boutiquier/add-boutiquier/add-boutiquier.component';
import { ListBoutiquierComponent } from './boutiquier/list-boutiquier/list-boutiquier.component';
import { DetailBoutiquierComponent } from './boutiquier/detail-boutiquier/detail-boutiquier.component';
import { UpdateBoutiquierComponent } from './boutiquier/update-boutiquier/update-boutiquier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {AccordionModule} from 'primeng/accordion'; 
import {Message} from 'primeng//api';
import {MessageService} from 'primeng/api';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import {RippleModule} from 'primeng/ripple';
import { AddCategoryComponent } from './Category/add-category/add-category.component';
import { DetailCategoryComponent } from './Category/detail-category/detail-category.component';
import { ListCategoryComponent } from './Category/list-category/list-category.component';
import { UpdateCategoryComponent } from './Category/update-category/update-category.component';
import { AddlocaliteComponent } from './localite/addlocalite/addlocalite.component';
import { ListlocaliteComponent } from './localite/listlocalite/listlocalite.component';
import { DetaillocaliteComponent } from './localite/detaillocalite/detaillocalite.component';
import { UpdatelocaliteComponent } from './localite/updatelocalite/updatelocalite.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    HeaderComponent,
    MenuComponent,
    AddAdminComponent,
    ListAdminComponent,
    UpdateAdminComponent,
    DetailAdminComponent,
    ConfirmationDialogComponent,
    AddBoutiqueComponent,
    ListBoutiqueComponent,
    UpdateBoutiqueComponent,
    DetailBoutiqueComponent,
    AddProduitComponent,
    ListProduitComponent,
    DetailProduitComponent,
    UpdateProduitComponent,
    AddBoutiquierComponent,
    ListBoutiquierComponent,
    DetailBoutiquierComponent,
    UpdateBoutiquierComponent,
    AddCategoryComponent,
    DetailCategoryComponent,
    ListCategoryComponent,
    UpdateCategoryComponent,
    AddlocaliteComponent,
    ListlocaliteComponent,
    DetaillocaliteComponent,
    UpdatelocaliteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    NgxPaginationModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ToastContainerModule,
    ReactiveFormsModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    BrowserAnimationsModule,
    AccordionModule,
    CarouselModule,
    ButtonModule,
    MessagesModule,
    MessageModule,
   
    RippleModule
  

  ],
  providers: [ToastrService, MessageService,ConfirmationDialogService],
  bootstrap: [AppComponent]
})
export class AppModule {}
