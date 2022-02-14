import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {CarouselModule} from 'primeng/carousel';
import { ProductserviceService } from '../productservice.service';

import {Product} from './product';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  loginData :any;
  admin: any;
  adminConnect: any;
  products: Product[];
	
	responsiveOptions;

	constructor(private productService: ProductserviceService) { 
		this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 2
            },
            {
                breakpoint: '768px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
	}
    

  ngOnInit() {
    this.productService.getProductsSmall().then(products => {
			this.products = products;
		});
    }


}
