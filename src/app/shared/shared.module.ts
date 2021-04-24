import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './components/deleteDialog/deleteDialog.component';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [DeleteDialogComponent, NotFoundComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  entryComponents: [DeleteDialogComponent],
})
export class SharedModule {}
