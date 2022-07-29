import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormatterService } from 'src/app/services/formatter.service';
import { EducacionService } from 'src/app/services/educacion.service';
import { Educacion } from 'src/app/classes/educacion';

@Component({
  selector: 'educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionItems: Array<Educacion> = [];

  constructor(private service: EducacionService) {

  }

  ngOnInit(): void {
    this.service.getEducacion().subscribe((data: Array<Educacion>) => this.educacionItems = data.sort((a: Educacion,b: Educacion) =>{ return (b.terminado === a.terminado)? 0 : b.terminado? - 1 : 1; }));
  }

}

@Component({
  selector: 'educacion-item',
  templateUrl: './educacion-item.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionItem implements OnInit {

  @Input() item?: any;

  constructor (private dialog: MatDialog, public formatter: FormatterService) {

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
