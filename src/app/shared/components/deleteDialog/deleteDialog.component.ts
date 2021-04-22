import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface YesNoDialogInterface {
  title: string;
  message: string;
}

@Component({
  selector: 'app-deleteDialog',
  templateUrl: './deleteDialog.component.html',
  styleUrls: ['./deleteDialog.component.scss'],
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: YesNoDialogInterface
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {}
}
