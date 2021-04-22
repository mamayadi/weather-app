import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, MaterialModule],
})
export class SharedModule {}
