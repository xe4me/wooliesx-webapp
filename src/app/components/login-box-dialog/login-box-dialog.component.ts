import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login-box-dialog',
  templateUrl: './login-box-dialog.component.html',
  styleUrls: ['./login-box-dialog.component.scss']
})
export class LoginBoxDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<LoginBoxDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onLogin($event: any) {
    this.dialogRef.close();
  }
}
