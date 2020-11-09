import { Component } from "@angular/core";

import { products } from "../products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert("The product has been shared!");
  }

  share_(product) {
    window.alert("The product " + product.name + " has been shared!");
  }

  onNotify(name) {
    window.alert("'You will be notified when the product "+name+" goes on sale");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
