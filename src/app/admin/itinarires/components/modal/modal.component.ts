import { Component, Inject } from '@angular/core';
import { DialogData } from '../../../dialog/dialog.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  versionform: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,private formBuilder:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.versionform = this.formBuilder.group({
      name: ['',Validators.required],
      pdf: ['',Validators.required],
      excel: ['',Validators.required]
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
