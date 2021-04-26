import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/shared/model/product.model';
import { ProduitService } from '../service/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  productForm: FormGroup;
  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private produitService: ProduitService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.productForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.fb.group({
      designationControl: [null, [Validators.required]],
      quantiteControl: [null, [Validators.required]],
      descriptionControl: [null],
    });
  }

  submitProduit(): void {
    if (this.productForm.valid) {
      const inputValues = this.productForm.getRawValue();
      const produit: Product = {
        designation: inputValues.designationControl,
        quantite: inputValues.quantiteControl,
        description: inputValues.descriptionControl,
      };
      this.produitService.createProduct(produit).subscribe(
        (data) => {
          if (data) {
            this.snackBar.open('Produit créé avec succès', 'OK', {
              duration: 5000,
              panelClass: ['mat-toolbar', 'mat-primary'],
            });
            this.router.navigate(['product']);
          }
        },
        (error) =>
          this.snackBar.open(error.error, 'OK', {
            duration: 3500,
            panelClass: ['mat-toolbar', 'mat-primary'],
          })
      );
    } else {
      this.snackBar.open('Formulaire invalid', 'OK', {
        duration: 3500,
        panelClass: ['mat-toolbar', 'mat-primary'],
      });
    }
  }

  onBack(): void {
    this.location.back();
  }
}
