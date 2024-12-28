import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  template: `<p>product works!</p>`,
  styleUrl: './product.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent { }
