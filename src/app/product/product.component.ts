import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

import { DeleteDialogComponent } from '../shared/components/deleteDialog/deleteDialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../shared/model/product.model';
import { ProduitService } from './service/produit.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'designation',
    'quantite',
    'description',
    'actions',
  ];
  public products: Product[] = [];
  public dataSource = new MatTableDataSource(this.products);
  constructor(
    private snackBar: MatSnackBar,
    private productService: ProduitService,
    public dialog: MatDialog,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      this.dataSource = new MatTableDataSource(this.products);
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDelete(produit: Product): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {
        title: 'Supprimer produit',
        message:
          'Êtes-vous sûr de vouloir de supprimer le produit ' +
          produit.designation,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 1) {
        this.productService.deleteProduct(produit).subscribe((data) => {
          this.loadProducts();
          this.snackBar.open('Produit supprimé avec succès', 'OK', {
            duration: 5000,
            panelClass: ['mat-toolbar', 'mat-primary'],
          });
        });
      }
    });
  }
}
