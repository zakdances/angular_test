import { Component } from '@angular/core';
import { ModelService } from '../model.service';
import { ActivatedRoute, Router } from '@angular/router'
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  product: FormGroup = new FormGroup({});
  modelLoaded = false;
  title = "Loading";

  constructor(public model: ModelService, private route: ActivatedRoute, private router: Router) {

    this.model.jsonData.subscribe((data) => {
      let id = this.route.snapshot.paramMap.get('id');
      let foundProduct = data.find((v: any) => {
        return v.id == id;
      });

      if (foundProduct) {
        var newControls: any = {}
        Object.keys(foundProduct).forEach(key => {
          let value = foundProduct[key];
          let validators = this.getValidatorsFor(value);
          newControls[key] = new FormControl(value, validators);
        });
        this.title = "Edit " + foundProduct.name;
        this.product = new FormGroup(newControls);
        this.modelLoaded = true;
        this.product.markAllAsTouched();
      }
    });
  }

  ngOnInit() {

  }

  saveProductDetails() {
    let newDataFromForm = this.product.value;
    let newData = this.model.jsonData.getValue().map((v: any, i: number) => {
      if (v.id == newDataFromForm.id) {
        return newDataFromForm;
      }
      return v;
    })
    this.product.markAsUntouched;
    this.model.jsonData.next(newData);
    this.router.navigate(['/product-list'])
  }

  getValidatorsFor(value: any): ValidatorFn[] {
    let validators = [];
    validators.push(Validators.required);
    if (isNaN(value)) {
      validators.push(Validators.minLength(1));
      validators.push(Validators.maxLength(55));
    } else {
      validators.push(Validators.min(0));
    }

    return validators
  }
}
