import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private dialog: MatDialog) { }

  openDialog(): void {
    console.log('opening dialog');
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '25%'
    })

    dialogRef.afterClosed().subscribe( () => {
      console.log('dialog closed');
    })
  }

}

@Component({
  selector: 'login-dialog',
  templateUrl: './login-dialog.html',
  styleUrls: ['./login.component.css']
})
export class LoginDialogComponent {

  hide: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }  


}
