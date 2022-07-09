import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

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
      width: '25%',
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
export class LoginDialogComponent implements OnInit {

  hide: boolean = true;
  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>, private formBuilder: FormBuilder, private auth: AuthService) {

    this.form = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      deviceInfo: this.formBuilder.group({
        deviceId: '',
        deviceType: '',
        notificationToken: ''
      })
    });

  }

  ngOnInit(): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password');
  }

  onSubmit(event: Event){
    event.preventDefault;
    this.auth.login(this.form.value).subscribe(data => {
      console.log(JSON.stringify(data));
    })
  }


}
