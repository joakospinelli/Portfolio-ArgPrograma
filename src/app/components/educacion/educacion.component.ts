import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormatterService } from 'src/app/services/formatter.service';
import { EducacionService } from 'src/app/services/educacion.service';
import { Educacion } from 'src/app/classes/educacion';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlashMessagesService } from 'flash-messages-angular';

@Component({
  selector: 'educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionItems: Array<Educacion> = [];

  constructor(private service: EducacionService, public auth: AuthService, private dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.service.getEducacion().subscribe((data: Array<Educacion>) => this.educacionItems = data.sort((a: Educacion,b: Educacion) =>{ return (b.terminado === a.terminado)? 0 : b.terminado? - 1 : 1; }));
  }

  add(): void{
    const dialogRef = this.dialog.open(EducacionCreate, {
      width: '45%'
    })

    dialogRef.afterClosed().subscribe( () => {
    })
  }

  delete(item: Educacion): void {
    console.log(item);
    if (confirm(`Seguro que desea borrar la entrada ${item.nombre}?`)){
      this.service.deleteEducacion(item.id).subscribe((data: any) => window.location.reload());
    }
  }

  edit(item: Educacion): void {
    const dialogRef = this.dialog.open(EducacionCreate, {
      width: '45%',
      data: item
    })

    dialogRef.afterClosed().subscribe( () => {
    })
  }

}

@Component({
  selector: 'educacion-item',
  templateUrl: './educacion-item.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionItem implements OnInit {

  @Input() item: Educacion = new Educacion(0,0,'','','','','',new Date(), new Date(), false);

  constructor (private dialog: MatDialog, public formatter: FormatterService, public auth: AuthService, private service: EducacionService, public flash: FlashMessagesService) {

  }

  ngOnInit(): void {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EducacionDialog, {
      data: this.item,
      width: '30%',
    })

    dialogRef.afterClosed().subscribe( () => {
    })
  }

  delete(): void {
    if (confirm(`Seguro que desea borrar la entrada ${this.item.nombre}?`)){
      this.service.deleteEducacion(this.item.id).subscribe((data: any) => {
        window.location.reload()
      });
    }
  }

  edit(): void {

  }

}

@Component({
  selector: 'educacion-dialog',
  templateUrl: './educacion-dialog.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionDialog implements OnInit {

  ngOnInit(): void {

  }

  constructor(public dialogRef: MatDialogRef<EducacionDialog>, @Inject(MAT_DIALOG_DATA) public data: any, public formatter: FormatterService) {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'educacion-create',
  templateUrl: './educacion-create.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionCreate {

  errorMessage: string = '';
  errorLogin: boolean = false;
  ed: Educacion = new Educacion(0,0,'','','','','', new Date(), new Date(), false);
  title: string  = 'Agregar educación';

  constructor(private service: EducacionService, public dialogRef: MatDialogRef<EducacionCreate>, @Inject(MAT_DIALOG_DATA) public data?: any) {
    
    if (data){
      this.ed = data;
      this.title = "Editar educación";
    }

  }

  onSubmit(event: Event){
    event.preventDefault();

    if (this.data){
      this.service.editEducacion(this.ed.id, this.ed).subscribe(() => { this.dialogRef.close(); window.location.reload(); });
    } else {
      this.service.addEducacion(this.ed).subscribe(() => { this.dialogRef.close(); window.location.reload(); });
    }
  }
  
  get Terminado(){
    return this.ed.terminado;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}