import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {ProductModel} from '@Store/product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public getProductDetails(productId:string):Observable<ProductModel> {
    /*productId will be used in the real project to retrieve the details of this product*/
    return new BehaviorSubject({
      id: "3h2g4jh2323232323423jh4g",
      image: 'https://img.zcdn.com.au/lf/50/hash/35461/18622416/4/Spiegelau%2BAuthentis%2BCrystal%2BBurgundy%2BGlasses.jpg',
      price: '60 AUD',
      title: 'Spiegelau Authentis Crystal Burgundy Glasses (Set of 4)',
      description: `The use of wine tasting descriptors allows the taster to qualitatively relate the aromas and flavors that the taster experiences and can be used in assessing the overall quality of wine. Wine writers differentiate wine tasters from casual enthusiasts; tasters attempt to give an objective description of the wine's taste (often taking a systematic approach to tasting), casual enthusiasts appreciate wine but pause their examination sooner than tasters.`,
    })
  }
}
