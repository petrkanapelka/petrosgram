import { Component } from '@angular/core';
import { ProductComponent } from "./product/product.component";

@Component({
  selector: 'app-test2',
  imports: [ProductComponent],
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.scss'
})
export class Test2Component {

}
